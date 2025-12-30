/**
 * Script untuk mengelola fungsionalitas Toggle Card (Expandable Project Card)
 */
document.addEventListener('DOMContentLoaded', () => {
    // Gunakan event delegation untuk menangani klik pada tombol toggle
    document.addEventListener('click', (event) => {
        const btn = event.target.closest('.toggle-button');
        
        // Pastikan yang diklik adalah tombol toggle
        if (!btn) return;

        const cardWrapper = btn.closest('.card-wrapper');
        if (!cardWrapper) return;
        
        const additionalImages = cardWrapper.querySelector('.additional-images');
        const downButton = cardWrapper.querySelector('.toggle-button.down');
        
        if (!additionalImages) return;

        // Logika untuk tombol "Detail" (▼)
        if (btn.classList.contains('down')) {
            additionalImages.classList.remove('hidden');
            btn.classList.add('hidden');
            btn.setAttribute('aria-expanded', 'true');
        } 
        // Logika untuk tombol "Tutup" (▲)
        else if (btn.classList.contains('up')) {
            additionalImages.classList.add('hidden');
            if (downButton) {
                downButton.classList.remove('hidden');
                downButton.setAttribute('aria-expanded', 'false');
            }
        }
    });
});