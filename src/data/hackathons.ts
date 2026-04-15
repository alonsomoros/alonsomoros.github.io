export interface Hackathon {
  id: string;
  name: string;
  year: number;
  role: string;
  theme: string;
  location: string;
  projectName: string;
  stack: string[];
  achievement: string;
  summary: string;
  repoUrl?: string;
  demoUrl?: string;
}

export const hackathons: Hackathon[] = [
  {
    id: 'datahack4good-2025',
    name: 'DataHack4Good',
    year: 2025,
    role: 'Full-Stack Developer',
    theme: 'Impacto Ambiental',
    location: 'NTT Data, Fuente de la Mora, Madrid',
    projectName: 'Calidad Aire Madrid',
    stack: ['Python', 'Azure', 'React', 'Javascript', 'Vite', 'Open APIs'],
    achievement: '3er Puesto',
    summary: 'Diseñamos una aplicación estilo Newsletter que analiza datos de calidad del aire y las zonas de particulas polen en Madrid, proporcionando información del día personalizado por zona de los elementos seleccionados.',
    repoUrl: 'https://github.com/alonsomoros/demo_airqualitymad'
  },
  {
    id: 'nextDigital-2025',
    name: 'Next Digital v1.0',
    year: 2025,
    role: 'Apis + Web Developer',
    theme: 'Campus Sostenible',
    location: 'ETSISI Campus Sur, Vallecas, Madrid',
    projectName: 'Campus Sostenible - Antimadrugones',
    stack: ['Java + Spring Boot', 'React + JS', 'Vite', 'ApiRest', 'H2 Database', 'Docker', 'Tailwind CSS'],
    achievement: '5o Puesto + Certificado',
    summary: 'Hicimos un protopipo de página web administrativa para la gestión del almacenaje de contenedores de reciclaje en el campus con Dashboard de métricas, gestión de contenedores y alertas.',
    repoUrl: 'https://github.com/alonsomoros/pruebaHackatonNextDigital'
  },
  {
    id: 'eelisa-innovationWeek-2024',
    name: 'EELISA Innovation Week',
    year: 2024,
    role: 'Tech Lead + Business Coordinator + Designer',
    theme: 'ODS - Ciudades Mejores',
    location: 'ETSIDI, Embajadores, Madrid',
    projectName: 'Smart Roads',
    stack: ['Trello', 'Canvas', 'PowerPoint', 'Miro', 'IA'],
    achievement: 'Certificado',
    summary: 'Construimos una solución para optimizar rutas y reducir congestión con una IA que gestiona datos e imagenes públicas de las carreteras.',
  },
  {
    id: 'nextDigital-2026',
    name: 'Next Digital v2.0',
    year: 2026,
    role: 'Apis + Web Developer',
    theme: 'Alerta Meteorológica',
    location: 'ETSISI Campus Sur, Vallecas, Madrid',
    projectName: 'MeteoAlert - Antimadrugones v2.0',
    stack: ['React', 'JS', 'Vite', 'ApiRest', 'PostgreSQL', 'OAuth2.0', 'Docker', 'Supabase', 'Vercel'],
    achievement: '¡1er Puesto!',
    summary: 'Construimos en medio día una aplicación web funcional y desplegada para alertar a usuarios sobre alertas meteorológicas, consimiendo 2 apis que nos proporcionaban y se requería Login con OAuth2.0 y una base de datos sólida para históricos y dashboards.',
    repoUrl: 'https://github.com/juanlu-ms/hackaton-upm-2026',
    demoUrl: 'https://hackaton-upm-2026.vercel.app'
  }
];
