// src/pages/blender/_blenderData.ts

export interface WireframePair {
  normalSrc: string;
  normalAlt: string;
  wireframeSrc: string;
  wireframeAlt: string;
  isSquare?: boolean;
}

export interface BlenderProject {
  id: string;
  title: string;
  description: string;
  mainImageSrc: string;
  mainImageAlt: string;
  modelSrc?: string; // Properti ini akan membaca file gltf
  wireframes: WireframePair[];
}

export const blenderProjects: BlenderProject[] = [
  {
    id: "card-l300",
    title: "Mitsubishi L300 - Automotive Modeling",
    description: "Kendaraan pickup yang digunakan sebagai aset dalam game Sawit Harvester. Kendaraan ini cocok untuk memperkuat nuansa game bertema pertanian maupun konteks lokal Indonesia, sehingga terasa lebih autentik dan relevan.",
    mainImageSrc: "/Imagery/projects/blender/l300/L300_Tampak_Depan_Kanan.webp",
    mainImageAlt: "3D Model of Mitsubishi L300 Pickup",
    modelSrc: "/3D_Asset/L300/L300.gltf", // Path diperbarui
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
    description: "Nyawit",
    mainImageSrc: "/Imagery/projects/blender/sawit/Sawit_Tampak_Depan.webp",
    mainImageAlt: "3D Model Buah Sawit",
    modelSrc: "/3D_Asset/Sawit/Buah_Sawit.gltf", // Path ditambahkan
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
    description: "Kendaraan militer yang digunakan oleh US Army dan identik dengan berbagai operasi militer Amerika. Sering muncul dalam film, serta menjadi aset yang umum digunakan dalam game bertema perang karena nilai visual dan ikoniknya.",
    mainImageSrc: "/Imagery/projects/blender/HMMWV/HMMWV_Tampak_Depan_Kanan.webp",
    mainImageAlt: "3D Model HMMWV",
    modelSrc: "/3D_Asset/HMMWV/HMMWV.gltf", // Path ditambahkan
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
    description: "Model senjata yang banyak digunakan dalam game bertema perang, khususnya yang mengangkat latar Perang Vietnam.",
    mainImageSrc: "/Imagery/projects/blender/m16a1/M16A1_Tampak_Depan_Kanan.webp",
    mainImageAlt: "3D Model M16A1",
    modelSrc: "/3D_Asset/M16A1/M16A1.gltf", // Path ditambahkan
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
    description: "Model senjata yang banyak digunakan dalam game bertema perang.",
    mainImageSrc: "/Imagery/projects/blender/akm/AKM_Tampak_Depan_Kanan.webp",
    mainImageAlt: "3D Model AKM",
    modelSrc: "/3D_Asset/AKM/AKM.gltf", // Path ditambahkan
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