/**
 * Carousel and Gallery Filtering Script (Updated for Perfect Centering)
 */
document.addEventListener("DOMContentLoaded", () => {
    const carouselTrack = document.getElementById("carouselTrack");
    if (!carouselTrack) return; 

    const carouselPrev = document.getElementById("carouselPrev");
    const carouselNext = document.getElementById("carouselNext");
    const carouselCards = Array.from(carouselTrack.children);
    const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));

    let carouselIndex = 0;

    function setActiveCard(idx) {
        carouselCards.forEach((card, i) => {
            card.classList.toggle("active", i === idx);
        });
    }

    function filterGallery(category) {
        let drawingShown = false;
        let renderCount = 0;

        galleryItems.forEach((item) => {
            item.classList.remove("hidden"); 

            const isMatch = item.dataset.category === category;
            let shouldShow = false;

            if (isMatch) {
                if (item.classList.contains("gallery-item--drawing") && !drawingShown) {
                    shouldShow = true;
                    drawingShown = true;
                } else if (item.classList.contains("gallery-item--render") && renderCount < 3) {
                    shouldShow = true;
                    renderCount++;
                }
            }

            if (shouldShow) {
                item.classList.remove("fade-out");
                item.classList.add("fade-in");
            } else {
                item.classList.remove("fade-in");
                item.classList.add("fade-out");
            }
        });

        setTimeout(() => {
            galleryItems.forEach((item) => {
                if (item.classList.contains("fade-out")) {
                    item.classList.add("hidden");
                }
            });
        }, 400); 
    }

function updateCarousel(triggerGallery = true) {
        if (carouselCards.length === 0) return;
        
        const isMobile = window.innerWidth <= 600;
        const gap = parseInt(getComputedStyle(carouselTrack).gap) || 0;
        
        const cardWidth = carouselCards[0].getBoundingClientRect().width; 
        const cardFullWidth = cardWidth + gap;
        const viewportWidth = carouselTrack.parentElement.offsetWidth;

        const maxIndex = Math.max(0, carouselCards.length - 1);
        
        // Safety check index
        if (carouselIndex < 0) carouselIndex = 0;
        if (carouselIndex > maxIndex) carouselIndex = maxIndex;

        let calculateValue = 0;

        if (isMobile) {
            // === LOGIKA MOBILE (CENTERING) ===
            const currentCardCenter = (carouselIndex * cardFullWidth) + (cardWidth / 2);
            const centerScreen = viewportWidth / 2;
            
            // Hitung selisih jarak
            calculateValue = currentCardCenter - centerScreen;
        } else {
            // === LOGIKA DESKTOP (ALIGN LEFT) ===
            calculateValue = carouselIndex * cardFullWidth;
            
            // Batasi agar tidak scroll berlebih di desktop
            const trackWidth = carouselCards.length * cardFullWidth; 
            const maxTranslate = Math.max(0, trackWidth - viewportWidth);
            if (calculateValue > maxTranslate) calculateValue = maxTranslate;
        }
        
        // PERBAIKAN UTAMA DI SINI:
        // Kita kalikan dengan -1 di JavaScript agar tidak terjadi double minus "--" di CSS strings
        const finalTranslateX = -calculateValue;
        
        carouselTrack.style.transform = `translateX(${finalTranslateX}px)`;
        
        setActiveCard(carouselIndex);

        if (triggerGallery) {
            const activeCategory = carouselCards[carouselIndex].dataset.category;
            filterGallery(activeCategory);
        }
        
        // Update status tombol panah
        if (carouselPrev) carouselPrev.disabled = carouselIndex === 0;
        if (carouselNext) carouselNext.disabled = carouselIndex === maxIndex;
        
        carouselPrev.style.opacity = carouselIndex === 0 ? "0.3" : "1";
        carouselNext.style.opacity = carouselIndex === maxIndex ? "0.3" : "1";
    }

    if (carouselPrev) {
        carouselPrev.addEventListener("click", () => {
            carouselIndex = Math.max(0, carouselIndex - 1);
            updateCarousel();
        });
    }

    if (carouselNext) {
        carouselNext.addEventListener("click", () => {
            carouselIndex = Math.min(carouselCards.length - 1, carouselIndex + 1);
            updateCarousel();
        });
    }

    carouselCards.forEach((card, idx) => {
        card.addEventListener("click", () => {
            carouselIndex = idx;
            updateCarousel();
        });
    });

    window.addEventListener("resize", () => {
        updateCarousel(false); 
    });

    setTimeout(() => {
        updateCarousel();
    }, 100);
});