export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  problem: string;
  solution: string;
  role: string;
  achievements: string[];
  demoUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    shortDescription: 'Plataforma de comercio electrónico completa con carrito de compras, pasarela de pago y panel de administración.',
    image: '/project-placeholder-1.jpg',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
    problem: 'Las pequeñas empresas necesitaban una solución asequible para vender sus productos online sin depender de plataformas de terceros con altas comisiones.',
    solution: 'Desarrollé una plataforma e-commerce personalizable que permite a las empresas gestionar su inventario, procesar pagos y analizar ventas desde un único panel.',
    role: 'Full-Stack Developer - Manejé tanto el frontend (React/TS) como el backend (Node.js/Express), implementé la integración con Stripe y diseñé la base de datos.',
    achievements: [
      'Implementé lazy loading de imágenes que mejoró el tiempo de carga en un 60%',
      'Optimicé las consultas SQL reduciendo el tiempo de respuesta de la API en un 40%',
      'Integré un sistema de caché con Redis para mejorar el rendimiento'
    ],
    demoUrl: 'https://demo-ecommerce.example.com',
    githubUrl: 'https://github.com/alonsomoros/ecommerce-platform'
  },
  {
    id: 'task-manager',
    title: 'Task Manager Pro',
    shortDescription: 'Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones y análisis de productividad.',
    image: '/project-placeholder-2.jpg',
    technologies: ['React', 'Spring Boot', 'MongoDB', 'WebSocket', 'Docker'],
    problem: 'Los equipos remotos necesitaban una herramienta que permitiera colaboración en tiempo real y seguimiento de productividad sin complejidad innecesaria.',
    solution: 'Creé una aplicación de gestión de tareas con actualizaciones en tiempo real usando WebSockets, sistema de notificaciones y dashboards de productividad.',
    role: 'Full-Stack Developer - Desarrollé el frontend en React, el backend con Spring Boot, implementé WebSockets para tiempo real y configuré Docker para deployment.',
    achievements: [
      'Implementé arquitectura de microservicios con Spring Boot mejorando la escalabilidad',
      'Desarrollé un sistema de notificaciones push en tiempo real con WebSocket',
      'Containericé la aplicación con Docker reduciendo el tiempo de deployment en un 70%'
    ],
    demoUrl: 'https://taskmanager-demo.example.com',
    githubUrl: 'https://github.com/alonsomoros/task-manager'
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Analytics Dashboard',
    shortDescription: 'Dashboard interactivo de análisis meteorológico con visualizaciones de datos y predicciones basadas en ML.',
    image: '/project-placeholder-3.jpg',
    technologies: ['React', 'Python', 'FastAPI', 'MySQL', 'Chart.js', 'Azure'],
    problem: 'Los agricultores necesitaban acceso a datos meteorológicos históricos y predicciones precisas para planificar sus cultivos de manera más efectiva.',
    solution: 'Desarrollé un dashboard que consume APIs meteorológicas, procesa datos históricos con Python y presenta visualizaciones interactivas con predicciones.',
    role: 'Full-Stack Developer - Creé el frontend con React y Chart.js, desarrollé la API con Python/FastAPI, implementé modelos de ML para predicciones y desplegué en Azure.',
    achievements: [
      'Integré múltiples APIs meteorológicas con sistema de fallback automático',
      'Implementé caché inteligente que redujo las llamadas a APIs externas en un 80%',
      'Desarrollé modelo de ML con Python que mejoró la precisión de predicciones en un 25%'
    ],
    demoUrl: 'https://weather-dashboard.example.com',
    githubUrl: 'https://github.com/alonsomoros/weather-dashboard'
  }
];
