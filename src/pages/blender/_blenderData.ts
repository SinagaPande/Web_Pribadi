// src/pages/blender/_blenderData.ts

export interface WireframePair {
  normalSrc: string;
  normalAlt: string;
  wireframeSrc: string;
  wireframeAlt: string;
  isSquare?: boolean; // Opsional, khusus untuk gambar rasio 1:1
}

export interface BlenderProject {
  id: string;
  title: string;
  description: string;
  mainImageSrc: string;
  mainImageAlt: string;
  wireframes: WireframePair[];
}

export const blenderProjects: BlenderProject[] = [
  {
    id: "card-l300",
    title: "Mitsubishi L300 - Automotive Modeling",
    description: "A detailed 3D model of the legendary Mitsubishi L300 pickup. Focused on automotive hard surface techniques, accurate vehicle proportions, and realistic shading using Blender.",
    mainImageSrc: "/Imagery/projects/blender/l300/L300_Tampak_Depan_Kanan.webp",
    mainImageAlt: "3D Model of Mitsubishi L300 Pickup",
    wireframes: [
      {
        normalSrc: "/Imagery/projects/blender/l300/L300_Tampak_Belakang_Kanan.webp",
        normalAlt: "Normal View",
        wireframeSrc: "/Imagery/projects/blender/l300/L300_Tampak_Belakang_Kanan_Wireframe.webp",
        wireframeAlt: "Wireframe View"
      },
      {
        normalSrc: "/Imagery/projects/blender/l300/L300_Tampak_Depan_Kanan.webp",
        normalAlt: "Normal View",
        wireframeSrc: "/Imagery/projects/blender/l300/L300_Tampak_Depan_Kanan_Wireframe.webp",
        wireframeAlt: "Wireframe View"
      },
      {
        normalSrc: "/Imagery/projects/blender/l300/L300_Tampak_Samping_Kanan.webp",
        normalAlt: "Normal View",
        wireframeSrc: "/Imagery/projects/blender/l300/L300_Tampak_Samping_Kanan_Wireframe.webp",
        wireframeAlt: "Wireframe View"
      }
    ]
  },
  {
    id: "card-sawit",
    title: "Palm Fruit (Sawit) - Organic Modeling",
    description: "Studi pemodelan organik detail dari Buah Kelapa Sawit. Fokus pada pembentukan geometri alami buah, tekstur organik, dan topologi yang rapi (quad-based topology).",
    mainImageSrc: "/Imagery/projects/blender/sawit/Sawit_Tampak_Depan.webp",
    mainImageAlt: "3D Model Buah Sawit",
    wireframes: [
      {
        normalSrc: "/Imagery/projects/blender/sawit/Sawit_Tampak_Depan_Kanan.webp",
        normalAlt: "Sawit Kanan Normal",
        wireframeSrc: "/Imagery/projects/blender/sawit/Sawit_Tampak_Depan_Kanan_Wireframe.webp",
        wireframeAlt: "Sawit Kanan Wireframe",
        isSquare: true
      },
      {
        normalSrc: "/Imagery/projects/blender/sawit/Sawit_Tampak_Depan_Atas.webp",
        normalAlt: "Sawit Atas Normal",
        wireframeSrc: "/Imagery/projects/blender/sawit/Sawit_Tampak_Depan_Atas_Wireframe.webp",
        wireframeAlt: "Sawit Atas Wireframe"
      },
      {
        normalSrc: "/Imagery/projects/blender/sawit/Sawit_Tampak_Depan.webp",
        normalAlt: "Sawit Depan Normal",
        wireframeSrc: "/Imagery/projects/blender/sawit/Sawit_Tampak_Depan_Wireframe.webp",
        wireframeAlt: "Sawit Depan Wireframe",
        isSquare: true
      }
    ]
  },
  {
    id: "card-hmmwv",
    title: "HMMWV (Humvee) - Military Vehicle",
    description: "Model kendaraan taktis militer High Mobility Multipurpose Wheeled Vehicle. Detail chassis lengkap dengan 5 sudut pandang (Depan, Samping Kanan/Kiri, Belakang Kanan/Kiri).",
    mainImageSrc: "/Imagery/projects/blender/HMMWV/HMMWV_Tampak_Depan_Kanan.webp",
    mainImageAlt: "3D Model HMMWV",
    wireframes: [
      {
        normalSrc: "/Imagery/projects/blender/HMMWV/HMMWV_Tampak_Samping_Kanan.webp",
        normalAlt: "HMMWV Samping Kanan Normal",
        wireframeSrc: "/Imagery/projects/blender/HMMWV/HMMWV_Tampak_Samping_Kanan_Wireframe.webp",
        wireframeAlt: "HMMWV Samping Kanan Wireframe"
      },
      {
        normalSrc: "/Imagery/projects/blender/HMMWV/HMMWV_Tampak_Samping_Kiri.webp",
        normalAlt: "HMMWV Samping Kiri Normal",
        wireframeSrc: "/Imagery/projects/blender/HMMWV/HMMWV_Tampak_Samping_Kiri_Wireframe.webp",
        wireframeAlt: "HMMWV Samping Kiri Wireframe"
      },
      {
        normalSrc: "/Imagery/projects/blender/HMMWV/HMMWV_Tampak_Depan_Kanan.webp",
        normalAlt: "HMMWV Depan Kanan Normal",
        wireframeSrc: "/Imagery/projects/blender/HMMWV/HMMWV_Tampak_Depan_Kanan_Wireframe.webp",
        wireframeAlt: "HMMWV Depan Kanan Wireframe"
      },
      {
        normalSrc: "/Imagery/projects/blender/HMMWV/HMMWV_Tampak_Belakang_Kanan.webp",
        normalAlt: "HMMWV Belakang Kanan Normal",
        wireframeSrc: "/Imagery/projects/blender/HMMWV/HMMWV_Tampak_Belakang_Kanan_Wireframe.webp",
        wireframeAlt: "HMMWV Belakang Kanan Wireframe"
      },
      {
        normalSrc: "/Imagery/projects/blender/HMMWV/HMMWV_Tampak_Belakang_Kiri.webp",
        normalAlt: "HMMWV Belakang Kiri Normal",
        wireframeSrc: "/Imagery/projects/blender/HMMWV/HMMWV_Tampak_Belakang_Kiri_Wireframe.webp",
        wireframeAlt: "HMMWV Belakang Kiri Wireframe"
      }
    ]
  },
  {
    id: "card-m16a1",
    title: "M16A1 Rifle - Weapon Asset",
    description: "Rekreasi senjata ikonik M16A1 dengan topologi efisien.",
    mainImageSrc: "/Imagery/projects/blender/m16a1/M16A1_Tampak_Depan_Kanan.webp",
    mainImageAlt: "3D Model M16A1",
    wireframes: [
      {
        normalSrc: "/Imagery/projects/blender/m16a1/M16A1_Tampak_Samping.webp",
        normalAlt: "M16A1 Samping Normal",
        wireframeSrc: "/Imagery/projects/blender/m16a1/M16A1_Tampak_Samping_Wireframe.webp",
        wireframeAlt: "M16A1 Samping Wireframe"
      },
      {
        normalSrc: "/Imagery/projects/blender/m16a1/M16A1_Tampak_Belakang_Kiri.webp",
        normalAlt: "M16A1 Belakang Kiri Normal",
        wireframeSrc: "/Imagery/projects/blender/m16a1/M16A1_Tampak_Belakang_Kiri_Wireframe.webp",
        wireframeAlt: "M16A1 Belakang Kiri Wireframe"
      },
      {
        normalSrc: "/Imagery/projects/blender/m16a1/M16A1_Tampak_Depan_Kanan.webp",
        normalAlt: "M16A1 Depan Kanan Normal",
        wireframeSrc: "/Imagery/projects/blender/m16a1/M16A1_Tampak_Depan_Kanan_Wireframe.webp",
        wireframeAlt: "M16A1 Depan Kanan Wireframe"
      }
    ]
  },
  {
    id: "card-akm",
    title: "AKM Rifle - Weapon Asset",
    description: "Model 3D AKM dengan detail stamped receiver dan popor kayu.",
    mainImageSrc: "/Imagery/projects/blender/akm/AKM_Tampak_Depan_Kanan.webp",
    mainImageAlt: "3D Model AKM",
    wireframes: [
      {
        normalSrc: "/Imagery/projects/blender/akm/AKM_Tampak_Samping.webp",
        normalAlt: "AKM Samping Normal",
        wireframeSrc: "/Imagery/projects/blender/akm/AKM_Tampak_Samping_Wireframe.webp",
        wireframeAlt: "AKM Samping Wireframe"
      },
      {
        normalSrc: "/Imagery/projects/blender/akm/AKM_Tampak_Belakang_Kiri.webp",
        normalAlt: "AKM Belakang Kiri Normal",
        wireframeSrc: "/Imagery/projects/blender/akm/AKM_Tampak_Belakang_Kiri_Wireframe.webp",
        wireframeAlt: "AKM Belakang Kiri Wireframe"
      },
      {
        normalSrc: "/Imagery/projects/blender/akm/AKM_Tampak_Depan_Kanan.webp",
        normalAlt: "AKM Depan Kanan Normal",
        wireframeSrc: "/Imagery/projects/blender/akm/AKM_Tampak_Depan_Kanan_Wireframe.webp",
        wireframeAlt: "AKM Depan Kanan Wireframe"
      }
    ]
  }
];