// src/pages/cad/_cadData.ts

export interface CadProject {
  id: string;
  title: string;
  desc: string;
  thumbnail: string;
  drawingSrc: string;
  featuresSrc: string;
  renders: { src: string; alt: string }[];
}

export const cadProjects: CadProject[] = [
  {
    id: "akm_bolt",
    title: "AKM Bolt",
    desc: "Detailed 3D model of an AKM Bolt.",
    thumbnail: "/Imagery/projects/solidworks/AKM_Bolt/AKM_Bolt.webp",
    drawingSrc: "/Imagery/projects/solidworks/AKM_Bolt/AKM_Bolt_Drawing.webp",
    featuresSrc: "/Imagery/projects/solidworks/AKM_Bolt/AKM_Bolt_Features.webp",
    renders: [
      { src: "/Imagery/projects/solidworks/AKM_Bolt/AKM_Bolt_Isometric_Kiri.webp", alt: "Isometric Left" },
      { src: "/Imagery/projects/solidworks/AKM_Bolt/AKM_Bolt_isometric_%20Kanan.webp", alt: "Isometric Right" },
      { src: "/Imagery/projects/solidworks/AKM_Bolt/AKM_Bolt_Belakang.webp", alt: "Back View" }
    ]
  },
  {
    id: "l_plate",
    title: "L Mounting Plate",
    desc: "Structural mounting bracket design.",
    thumbnail: "/Imagery/projects/solidworks/l_mounting_plate/L_plate.webp",
    drawingSrc: "/Imagery/projects/solidworks/l_mounting_plate/L_plate_drawing.webp",
    featuresSrc: "/Imagery/projects/solidworks/l_mounting_plate/L_plate_features.webp",
    renders: [
      { src: "/Imagery/projects/solidworks/l_mounting_plate/L_plate_isometric_depan.webp", alt: "Isometric Front" },
      { src: "/Imagery/projects/solidworks/l_mounting_plate/L_plate_unfolded.webp", alt: "Unfolded Sheet" }
    ]
  },
  {
    id: "spiral_tap",
    title: "Spiral Flute Tap",
    desc: "Precision machining tool design.",
    thumbnail: "/Imagery/projects/solidworks/spiral_flute_tap/Spiral_Tap.webp",
    drawingSrc: "/Imagery/projects/solidworks/spiral_flute_tap/Spiral_Tap_Drawing.webp",
    featuresSrc: "/Imagery/projects/solidworks/spiral_flute_tap/Spiral_Tap_Features.webp",
    renders: [
      { src: "/Imagery/projects/solidworks/spiral_flute_tap/Spiral_Tap_Depan.webp", alt: "Front View" },
      { src: "/Imagery/projects/solidworks/spiral_flute_tap/Spiral_Tap_Isometric_Belakang.webp", alt: "Isometric Back" }
    ]
  },
  {
    id: "exercise_997",
    title: "Mechanical Part 997",
    desc: "Complex mechanical practice part.",
    thumbnail: "/Imagery/projects/solidworks/exercise_997/exercise_997.webp",
    drawingSrc: "/Imagery/projects/solidworks/exercise_997/exercise_997_Drawing.webp",
    featuresSrc: "/Imagery/projects/solidworks/exercise_997/exercise_997_Features.webp",
    renders: [
      { src: "/Imagery/projects/solidworks/exercise_997/exercise_997_Isometric_Depan.webp", alt: "Isometric Front" }
    ]
  }
];