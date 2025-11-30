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
  demoUrl?: string;
  githubUrl?: string;
  docsUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'pi-hole-raspberry',
    title: 'Pi-hole Network-wide Ad Blocker',
    shortDescription: 'Servidor DNS personalizado en Raspberry Pi que bloquea anuncios y rastreadores a nivel de red para todos los dispositivos.',
    image: '/pi-hole.png',
    technologies: ['Bash', 'Docker', 'Raspberry Pi', 'DNS', 'Linux'],
    problem: 'Los anuncios y rastreadores web afectan la privacidad y velocidad de navegación en todos los dispositivos del hogar, y las soluciones tradicionales requieren configuración individual en cada dispositivo.',
    solution: 'Implementé Pi-hole en una Raspberry Pi usando Docker y Bash scripts, creando un servidor DNS que filtra peticiones maliciosas y publicitarias a nivel de red, protegiendo automáticamente todos los dispositivos conectados.',
    role: 'DevOps Engineer - Configuré la Raspberry Pi, containericé Pi-hole con Docker, desarrollé scripts en Bash para automatizar la instalación y mantenimiento, y optimicé las listas de bloqueo.',
    achievements: [
      'Automaticé la instalación completa con scripts Bash reduciendo el tiempo de setup de 2 horas a 10 minutos',
      'Implementé Docker para facilitar actualizaciones y rollbacks sin afectar el sistema base',
      'Configuré listas de bloqueo personalizadas que filtran más del 30% del tráfico publicitario',
      'Reduje el consumo de ancho de banda en un 25% bloqueando contenido no deseado'
    ],
    docsUrl: 'https://docs.pi-hole.net/'
  },
  {
    id: 'neural-network-framework',
    title: 'Custom Neural Network Framework',
    shortDescription: 'Framework de red neuronal desde cero implementado en Java con visualización interactiva en JavaScript para fines educativos.',
    image: '/neuronal-network.png',
    technologies: ['Java', 'JavaScript', 'Neural Networks', 'Machine Learning', 'Canvas API'],
    problem: 'Las librerías de ML existentes son cajas negras que dificultan entender cómo funcionan realmente las redes neuronales, especialmente para estudiantes y desarrolladores que quieren aprender los fundamentos.',
    solution: 'Desarrollé un framework de red neuronal completamente desde cero en Java, implementando backpropagation, funciones de activación y optimizadores. Añadí una interfaz web en JavaScript para visualizar el entrenamiento en tiempo real.',
    role: 'Full-Stack ML Developer - Implementé toda la lógica de la red neuronal en Java, desarrollé el frontend de visualización con JavaScript y Canvas API, y diseñé la arquitectura del sistema.',
    achievements: [
      'Implementé backpropagation desde cero sin usar librerías de ML, logrando 95% de precisión en MNIST',
      'Desarrollé visualización en tiempo real del proceso de aprendizaje usando Canvas API',
      'Optimicé el rendimiento con paralelización en Java, reduciendo el tiempo de entrenamiento en un 60%',
      'Documenté el código extensivamente para uso educativo con más de 500 líneas de comentarios explicativos'
    ],
    githubUrl: 'https://github.com/alonsomoros/neuronal-network'
  },
  {
    id: 'text-to-speech-transformer',
    title: 'Text-to-Speech Transformer',
    shortDescription: 'Sistema de síntesis de voz basado en arquitectura Transformer implementado con Keras y PyTorch para generar audio natural.',
    image: '/text-to-speech-transformer.png',
    technologies: ['Python', 'Keras', 'PyTorch', 'Transformers', 'NLP', 'Audio Processing'],
    problem: 'Los sistemas TTS tradicionales producen voz robótica y poco natural. Se necesitaba un modelo que generara audio más humano y expresivo usando arquitecturas modernas de deep learning.',
    solution: 'Implementé un modelo Text-to-Speech basado en arquitectura Transformer usando Keras y PyTorch, entrenado con datasets de voz en español para generar audio natural con prosodia mejorada.',
    role: 'ML Engineer - Diseñé la arquitectura del modelo Transformer, implementé el pipeline de preprocesamiento de audio, entrené el modelo con datasets personalizados y optimicé la inferencia.',
    achievements: [
      'Implementé arquitectura Transformer adaptada para síntesis de voz logrando MOS score de 4.2/5',
      'Desarrollé pipeline de preprocesamiento de audio que reduce ruido y normaliza espectrogramas',
      'Optimicé el modelo con técnicas de cuantización reduciendo el tamaño en un 70% sin pérdida significativa de calidad',
      'Integré soporte multilingüe (español e inglés) con transfer learning entre idiomas'
    ],
    githubUrl: 'https://github.com/alonsomoros/Text-Speech_Transformer'
  }
];
