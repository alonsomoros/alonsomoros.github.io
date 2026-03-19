import heroBackground from '../assets/b1.jpg';
import hackatonND from '../assets/hackaton_next_digital_2.jpg';
import cs2017 from '../assets/CS_2017.png';
import cs2018 from '../assets/CS_2018.png';
import cs2022 from '../assets/CS_2022.png';
import cs2023 from '../assets/CS_2023.jpg';
import cs2024 from '../assets/CS_2024.png';
import cs2025 from '../assets/CS_2025.jpg';
import trinityB2 from '../assets/Trinity_B2.jpg';
import campeonesAlevin from '../assets/Campeones_Alevin.jpg';

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  location: string;
  year: number;
  category: 'Deporte' | 'Solidario' | 'Académico' | 'Tecnológico' | 'Personal';
  milestone: string;
  summary: string;
  hoverImage?: string;
}

export const achievements: Achievement[] = [
  {
    id: 'carrera-solidaria-2017',
    title: 'Carrera solidaria 2017',
    organization: 'Fundación Menudos Corazones',
    location: 'Parque Juan Carlos I, Madrid',
    year: 2017,
    category: 'Solidario',
    milestone: '5 km en 25 minutos',
    summary: 'Participación en carrera benéfica para apoyar a niños y adolescentes con cardiopatías congénitas.',
    hoverImage: cs2017
  },
  {
    id: 'carrera-solidaria-2018',
    title: 'Carrera solidaria 2018',
    organization: 'Fundación Menudos Corazones',
    location: 'Parque Juan Carlos I, Madrid',
    year: 2018,
    category: 'Solidario',
    milestone: '5 km en 25 minutos',
    summary: 'Participación en carrera benéfica para apoyar a niños y adolescentes con cardiopatías congénitas.',
    hoverImage: cs2018
  },
  {
    id: 'carrera-solidaria-2022',
    title: 'Carrera solidaria 2022',
    organization: 'Fundación Menudos Corazones',
    location: 'Parque Juan Carlos I, Madrid',
    year: 2022,
    category: 'Solidario',
    milestone: '5 km en 25 minutos',
    summary: 'Participación en carrera benéfica para apoyar a niños y adolescentes con cardiopatías congénitas.',
    hoverImage: cs2022
  },
  {
    id: 'carrera-solidaria-2023',
    title: 'Carrera solidaria 2023',
    organization: 'Fundación Menudos Corazones',
    location: 'Parque Juan Carlos I, Madrid',
    year: 2023,
    category: 'Solidario',
    milestone: '5 km en 25 minutos',
    summary: 'Participación en carrera benéfica para apoyar a niños y adolescentes con cardiopatías congénitas.',
    hoverImage: cs2023
  },
  {
    id: 'carrera-solidaria-2024',
    title: 'Carrera solidaria 2024',
    organization: 'Fundación Menudos Corazones',
    location: 'Parque Juan Carlos I, Madrid',
    year: 2024,
    category: 'Solidario',
    milestone: '5 km en 25 minutos',
    summary: 'Participación en carrera benéfica para apoyar a niños y adolescentes con cardiopatías congénitas.',
    hoverImage: cs2024
  },
  {
    id: 'carrera-solidaria-2025',
    title: 'Carrera solidaria 2025',
    organization: 'Fundación Menudos Corazones',
    location: 'Parque Juan Carlos I, Madrid',
    year: 2025,
    category: 'Solidario',
    milestone: '5 km en 25 minutos',
    summary: 'Participación en carrera benéfica para apoyar a niños y adolescentes con cardiopatías congénitas.',
    hoverImage: cs2025
  },
  {
    id: 'copa-colegial-2023',
    title: 'Campeones de la Copa Colegial 2023',
    organization: 'Liga Colegial Alevín',
    location: 'Hortaleza, Madrid',
    year: 2023,
    category: 'Deporte',
    milestone: '1er puesto en la liga colegial',
    summary: 'Victoria trabajada y disfrutada con mi alevín femenino de 2011, un grupo de campeonas y luchadoras.',
    hoverImage: campeonesAlevin
  },
  {
    id: 'media-maraton-2026',
    title: 'Primera media maratón',
    organization: 'Proximamente...',
    location: 'Madrid',
    year: 2026,
    category: 'Personal',
    milestone: '21 km finalizados',
    summary: 'Proximamente...',
    hoverImage: heroBackground
  },
  {
    id: 'hackaton-next-digital-2026',
    title: 'Hackathon Next Digital 2026',
    organization: 'Next Digital',
    location: 'Madrid, ETSISI Campus Sur',
    year: 2026,
    category: 'Personal',
    milestone: '1er Puesto',
    summary: 'Construimos en medio día una aplicación web funcional y desplegada para alertar a usuarios sobre alertas meteorológicas, consimiendo unas apis que nos proporcionaban y se requería Login con OAuth2.0 y una base de datos sólida para históricos y dashboards.',
    hoverImage: hackatonND
  },
  {
    id: 'certificacion-trinity-b2-2017',
    title: 'Certificación Trinity B2 obtenida',
    organization: 'Trinity College London',
    location: 'Colegio Greenwich School',
    year: 2017,
    category: 'Académico',
    milestone: 'Nivel B2 de inglés certificado',
    summary: 'Obtuve la certificación de inglés Trinity B2, un paso más cerca del C1!',
    hoverImage: trinityB2
  },
];
