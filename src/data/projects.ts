export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  year: number;
  category: string;
  featured?: boolean;
  technologies: string[];
  problem: string;
  solution: string;
  role: string;
  achievements: string[];
  demoUrl?: string;
  githubUrl?: string;
  docsUrl?: string;
}

export const projects: Project[] = [
{
    "id": "hipoglifo-website",
    "title": "Hipoglifo Website",
    "shortDescription":
      "Juego de puzzles diario online gratuito. Averigua la palabra detrás del glifo y comparte con tus amigos para ver quién lo resuelve más rápido.",
    "image": "/hipoglifo.png",
    "year": 2026,
    "category": "Web Game",
    "featured": true,
    "technologies": ["React", "TypeScript", "Tailwind CSS", "Supabase", "Vercel", "Framer Motion"],
    "problem":
      "Los juegos de palabras diarios suelen ser puramente textuales y predecibles. Faltaba una propuesta que desafiara no solo la lingüística, sino también la capacidad de reconocimiento visual y geométrico mediante una estética moderna.",
    "solution":
      "Desarrollé un motor de juego basado en matrices de píxeles donde las letras se superponen para formar un 'glifo' único. Los usuarios deben decodificar la imagen aplicando lógica de sustracción visual para identificar las letras ocultas.",
    "role": "Full-Stack Developer - Diseñé la lógica algorítmica de superposición de matrices y desarrollé la arquitectura completa, desde la interfaz reactiva hasta la persistencia de datos y estadísticas globales.",
    "achievements": [
      "Diseñé un algoritmo eficiente de fusión de matrices para superponer caracteres dinámicamente sin penalizar el rendimiento del renderizado.",
      "Implementé una interfaz 'Cyber-tech' altamente interactiva utilizando Tailwind CSS y animaciones fluidas con Framer Motion.",
      "Integré Supabase para la gestión del diccionario diario, el control de sesiones de usuario y el almacenamiento de estadísticas en tiempo real.",
      "Desarrollé un sistema de generación de resultados dinámico para compartir en redes sociales, optimizando la viralidad mediante el uso de emojis y metadatos OG."
    ],
    "githubUrl": "https://github.com/UnaiMurilloMesa/hipoglifo-prod",
    "demoUrl": "https://hipoglifo.es/",
  },
  {
    id: "el-negredo-website",
    title: "El Negredo Website",
    shortDescription:
      "Sitio web para el pueblo El Negredo, con información, fotos, formularios y fechas de actividades para la gente.",
    image: "/el-negredo.png",
    year: 2026,
    category: "Web",
    featured: false,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Cloudinary",
      "Vercel",
    ],
    problem:
      "Al ser un pueblo pequeño, no suele haber mucha gente y la comunicación a veces se hace difícil y las familias no tienen manera de enterarse de lo que se organiza.",
    solution:
      "Construí un sitio web completo con información, fotos, formularios y fechas de actividades para la gente del pueblo, facilitando la difusión de noticias y eventos.",
    role: "Full-Stack Developer - Diseñé y desarrollé el sitio web utilizando React, TypeScript y Tailwind CSS, integrando Cloudinary para la gestión de imágenes y desplegándolo en Vercel.",
    achievements: [
      "Conseguí desplegar un sitio web completo con información, fotos, formularios y fechas de actividades para la gente del pueblo",
      "Conecté una de las páginas de fotos a Cloudinary para mostrar las fotos de forma dinámica sin necesidad de subirlas al repositorio",
      "Usé React, TypeScript y Tailwind para construir una interfaz moderna, rápida y responsive",
      "Preparé una sección para registro de socios funcional para la junta de mi pueblo",
    ],
    githubUrl: "https://github.com/alonsomoros/el-negredo",
    demoUrl: "https://el-negredo.vercel.app/",
  },
  {
    id: "pi-hole-raspberry",
    title: "Pi-hole Network-wide Ad Blocker",
    shortDescription:
      "Servidor DNS personalizado en Raspberry Pi que bloquea anuncios y rastreadores a nivel de red para todos los dispositivos.",
    image: "/pi-hole.png",
    year: 2024,
    category: "Infraestructura",
    featured: true,
    technologies: ["Bash", "Docker", "Raspberry Pi", "DNS", "Linux"],
    problem:
      "Los anuncios y rastreadores web afectan la privacidad y velocidad de navegación en todos los dispositivos del hogar, y las soluciones tradicionales requieren configuración individual en cada dispositivo.",
    solution:
      "Implementé Pi-hole en una Raspberry Pi usando Docker y Bash scripts, creando un servidor DNS que filtra peticiones maliciosas y publicitarias a nivel de red, protegiendo automáticamente todos los dispositivos conectados.",
    role: "DevOps Engineer - Configuré la Raspberry Pi, containericé Pi-hole con Docker, desarrollé scripts en Bash para automatizar la instalación y mantenimiento, y optimicé las listas de bloqueo.",
    achievements: [
      "Automaticé la instalación completa con scripts Bash reduciendo el tiempo de setup de 2 horas a 10 minutos",
      "Implementé Docker para facilitar actualizaciones y rollbacks sin afectar el sistema base",
      "Configuré listas de bloqueo personalizadas que filtran más del 30% del tráfico publicitario",
      "Reduje el consumo de ancho de banda en un 25% bloqueando contenido no deseado",
    ],
    docsUrl: "https://docs.pi-hole.net/",
  },
  {
    id: "morning-briefing-n8n",
    title: "Morning Briefing",
    shortDescription:
      "Sistema automatizado de morning briefing construido con n8n para centralizar información diaria resumida.",
    image: "/morning_briefing.png",
    year: 2026,
    category: "Automatización",
    featured: false,
    technologies: ["n8n", "Automation", "APIs", "Scheduling", "Notifications"],
    problem:
      "Consultar cada mañana noticias, tareas, eventos o fuentes dispersas consume tiempo y fragmenta la atención. Hacía falta un flujo automático que reuniera la información relevante en un único briefing diario.",
    solution:
      "Construí un sistema de automatización con n8n que recopila información desde distintas fuentes, la transforma en un resumen estructurado y la envía en el formato más útil para empezar el día con contexto claro y prioridades visibles.",
    role: "Automation Builder - Diseñé los flujos en n8n, conecté APIs y orígenes de información, definí la lógica de transformación de datos y preparé la entrega automática del briefing diario.",
    achievements: [
      "Automaticé la recopilación de información diaria desde múltiples fuentes en un único flujo reproducible",
      "Diseñé nodos de transformación para convertir datos heterogéneos en un briefing legible y accionable",
      "Reduje el tiempo manual de revisión matinal centralizando tareas, contexto y avisos en una sola salida",
      "Dejé la automatización preparada para ampliar integraciones futuras con correo, calendario, Slack o WhatsApp",
    ],
    docsUrl: "https://forms.gle/TDvAmu3W5egzT5ZR8",
  },
  {
    id: "hartz-gym-routines-app",
    title: "Hartz",
    shortDescription:
      "Aplicación de gimnasio y rutinas con histórico y control de progreso.",
    image: "/logo_hartz.png",
    year: 2025,
    category: "Full-Stack",
    featured: true,
    technologies: [
      "Java",
      "REST API",
      "PostgreSQL",
      "MongoDB",
      "AWS Cognito",
      "React",
      "TypeScript",
    ],
    problem:
      "Las apps de entrenamiento suelen quedarse cortas en personalización de rutinas, seguimiento del progreso o gestión segura de usuarios. Queríamos una solución propia que permitiera estructurar entrenamientos, guardar historial y separar bien la información relacional de la documental.",
    solution:
      "Desarrollé, junto con unos amigos de universidad, Hartz como una aplicación full-stack con backend Java expuesto como API REST, frontend en React con TypeScript y autenticación con AWS Cognito. Utilizamos PostgreSQL para la información estructurada de usuarios y rutinas, y MongoDB para almacenar registros más flexibles de sesiones, progreso y datos evolutivos.",
    role: "Full-Stack Developer - Diseñamos la arquitectura completa, implementamos la API REST en Java, modelamos la persistencia entre PostgreSQL y MongoDB, integramos AWS Cognito para autenticación y construimos la interfaz en React con TypeScript.",
    achievements: [
      "Ayudé a decidir qué tipo de base de datos era la mejor, y como sería el modelo de entidades",
      "Aprendí sobre el funcionamiento de API Rest y cómo manejar llamadas complejas end-to-end",
      "Construimos una interfaz en React y TypeScript orientada a crear, editar y consultar rutinas de forma rápida",
      "Estructuramos unos workflows para mejorar CICD y desplegamos la aplicación en una raspeberrypi",
    ],
    githubUrl: "https://github.com/UnaiMurilloMesa/HARTZ_CO",
  },
  {
    id: "neural-network-framework",
    title: "Custom Neural Network Framework",
    shortDescription:
      "Framework de red neuronal desde cero implementado en Java con visualización interactiva en JavaScript para fines educativos.",
    image: "/neuronal-network.png",
    year: 2025,
    category: "Machine Learning",
    featured: true,
    technologies: [
      "Java",
      "JavaScript",
      "Neural Networks",
      "Machine Learning",
      "Canvas API",
    ],
    problem:
      "Las librerías de ML existentes son cajas negras que dificultan entender cómo funcionan realmente las redes neuronales, especialmente para estudiantes y desarrolladores que quieren aprender los fundamentos.",
    solution:
      "Desarrollé un framework de red neuronal completamente desde cero en Java, implementando backpropagation, funciones de activación y optimizadores. Añadí una interfaz web en JavaScript para visualizar el entrenamiento en tiempo real.",
    role: "Full-Stack ML Developer - Implementé toda la lógica de la red neuronal en Java, desarrollé el frontend de visualización con JavaScript y Canvas API, y diseñé la arquitectura del sistema.",
    achievements: [
      "Implementé backpropagation desde cero sin usar librerías de ML, logrando 95% de precisión en MNIST",
      "Desarrollé visualización en tiempo real del proceso de aprendizaje usando Canvas API",
      "Optimicé el rendimiento con paralelización en Java, reduciendo el tiempo de entrenamiento en un 60%",
      "Documenté el código extensivamente para uso educativo con más de 500 líneas de comentarios explicativos",
    ],
    githubUrl: "https://github.com/alonsomoros/neuronal-network",
  },
  {
    id: "text-to-speech-transformer",
    title: "Text-to-Speech Transformer",
    shortDescription:
      "Sistema de síntesis de voz basado en arquitectura Transformer implementado con Keras y PyTorch para generar audio natural.",
    image: "/text-to-speech-transformer.png",
    year: 2025,
    category: "IA Aplicada",
    featured: false,
    technologies: [
      "Python",
      "Keras",
      "PyTorch",
      "Transformers",
      "NLP",
      "Audio Processing",
    ],
    problem:
      "Los sistemas TTS tradicionales producen voz robótica y poco natural. Se necesitaba un modelo que generara audio más humano y expresivo usando arquitecturas modernas de deep learning.",
    solution:
      "Implementé un modelo Text-to-Speech basado en arquitectura Transformer usando Keras y PyTorch, entrenado con datasets de voz en español para generar audio natural con prosodia mejorada.",
    role: "ML Engineer - Diseñé la arquitectura del modelo Transformer, implementé el pipeline de preprocesamiento de audio, entrené el modelo con datasets personalizados y optimicé la inferencia.",
    achievements: [
      "Implementé arquitectura Transformer adaptada para síntesis de voz logrando MOS score de 4.2/5",
      "Desarrollé pipeline de preprocesamiento de audio que reduce ruido y normaliza espectrogramas",
      "Optimicé el modelo con técnicas de cuantización reduciendo el tamaño en un 70% sin pérdida significativa de calidad",
      "Integré soporte multilingüe (español e inglés) con transfer learning entre idiomas",
    ],
    githubUrl: "https://github.com/alonsomoros/Text-Speech_Transformer",
  }
];
