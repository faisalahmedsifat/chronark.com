export type Project = {
  slug: string;
  title: string;
  description: string;
  status: string;
  category: string;
  longDescription?: string;
  technologies: string[];
  problem?: string;
  solution?: string;
  results?: string;
  keyFeatures?: string[];
  keyResponsibilities?: string[];
  keyBenefits?: string[];
  keyChallenges?: string[];
  modelAvailable?: string;
  website?: string;
  googleplay?: string;
  doi?: string;
  journal?: string;
  publishedDate?: string;
  views: number;
  date: string;
  published: boolean;
  featured: boolean;
  type: 'commercial' | 'professional' | 'research' | 'publication';
};

export const projects: Project[] = [
  // Commercial Products
  {
    slug: "tensorify",
    title: "Tensorify.io",
    description: "A node-based AI development platform that lets you visually create, connect, and reuse model components — like snapping together LEGO blocks.",
    status: "Active",
    category: "AI Development Platform",
    longDescription: "A node-based AI development platform that lets you visually create, connect, and reuse model components — like snapping together LEGO blocks. Whether you're building attention mechanisms, embedding layers, or custom data pipelines, Tensorify helps AI researchers and engineers focus on innovative architecture rather than boilerplate code.",
    technologies: ["React", "PyTorch", "JavaScript", "Python", "AWS"],
    problem: "AI researchers and ML engineers spend too much time on implementation details and debugging code instead of focusing on improving algorithms and solving core business problems. Knowledge is trapped in fragmented codebases, making collaboration inefficient.",
    solution: "Tensorify provides a visual interface to rapidly prototype ideas and generate optimized PyTorch code with one click. It eliminates documentation debt with self-documenting visual models and accelerates the development cycle by up to 3x.",
    keyBenefits: ["80% less time from concept to deployment", "zero boilerplate code", "3x faster experimentation and iteration cycles"],
    website: "https://tensorify.io",
    views: 1580,
    date: "2023-06-10",
    published: true,
    featured: true,
    type: "commercial"
  },
  {
    slug: "vocablet",
    title: "Vocablet.io",
    description: "An innovative language learning platform that allows users to chat with customizable role-playing AI agents.",
    status: "Paused",
    category: "EdTech / Language Learning",
    longDescription: "An innovative language learning platform that allows users to chat with customizable role-playing AI agents. The system automatically identifies and suggests vocabulary and sentences for learning through interactive flashcards.",
    technologies: ["Python", "NextJS", "LLMs", "OpenAI", "React", "TailwindCSS", "PostgreSQL"],
    problem: "Traditional vocabulary learning methods are often boring and disconnected from real conversational contexts.",
    solution: "By combining conversational AI with spaced repetition learning techniques, Vocablet creates an engaging, personalized vocabulary learning experience.",
    website: "https://vocablet.io",
    views: 1320,
    date: "2023-08-15",
    published: true,
    featured: true,
    type: "commercial"
  },
  {
    slug: "axpense",
    title: "AXpense",
    description: "A clean, user-friendly mobile application for personal expense tracking that focuses on simplicity and ease of use.",
    status: "Released",
    category: "Finance / Mobile App",
    longDescription: "A clean, user-friendly mobile application for personal expense tracking that focuses on simplicity and ease of use while providing powerful budgeting features.",
    technologies: ["Flutter", "Dart", "Firebase", "Google Play Store"],
    problem: "Most expense tracking apps are either too complex or too limited in functionality for everyday users.",
    solution: "AXpense strikes the perfect balance between simplicity and functionality with an intuitive UI and just the right features for personal finance management.",
    googleplay: "https://play.google.com/store/apps/details?id=com.alphawolfventures.axpense&hl=en",
    views: 890,
    date: "2023-01-15",
    published: true,
    featured: false,
    type: "commercial"
  },
  {
    slug: "dentalloop",
    title: "DentalLoop (Coming Soon)",
    description: "A comprehensive solution for managing dental clinics with AI-powered decision support to assist dentists in clinical workflows.",
    status: "Active",
    category: "Healthcare / Dental Management",
    longDescription: "A comprehensive solution for managing dental clinics, including appointment scheduling, document management, and AI-powered decision support to assist dentists in clinical workflows.",
    technologies: ["Python", "LLMs", "RAG", "React", "FastAPI", "PostgreSQL"],
    problem: "Dental clinics struggle with efficient information management and knowledge retrieval during patient consultations.",
    solution: "DentalLoop integrates AI-powered knowledge retrieval with practice management tools to provide dentists with relevant information exactly when needed during clinical workflows.",
    results: "Achieved 50% improvement in knowledge retrieval accuracy for dental guidelines.",
    views: 750,
    website: "https://dentalloop.au",
    date: "2022-11-20",
    published: true,
    featured: false,
    type: "commercial"
  },
  
  // Professional Projects
  {
    slug: "happy-tuna",
    title: "Happy Tuna E-commerce Platform",
    description: "A comprehensive e-commerce platform for Happy Tuna, a sushi restaurant in New York City.",
    status: "Deployed",
    category: "E-commerce / Restaurant",
    longDescription: "Developed a comprehensive e-commerce platform for Happy Tuna, a sushi restaurant in New York City. The system includes a user-friendly ordering interface, account management, and a robust admin panel for menu management, order processing, and business analytics.",
    technologies: ["NextJS", "React", "Node.js", "PostgreSQL", "Stripe", "Firebase Auth", "Tailwind CSS"],
    problem: "Happy Tuna needed a customized e-commerce solution that could handle their specific menu requirements, ordering workflow, and integrate with their existing operations.",
    solution: "Built a full-stack solution with separate user interfaces for customers and administrators, robust authentication, secure payment processing, and real-time order updates.",
    results: "Successfully deployed platform handling hundreds of daily orders, reducing phone order volume by 65% and increasing average order value by 18%.",
    keyResponsibilities: [
      "Full-stack development of the entire platform",
      "User authentication and authorization system",
      "Admin panel for inventory and order management",
      "Secure payment gateway integration"
    ],
    website: "https://order.happytuna.com",
    views: 680,
    date: "2022-10-05",
    published: true,
    featured: false,
    type: "professional"
  },
  {
    slug: "taraa-ai",
    title: "Taraa.ai",
    description: "An innovative learning management system that leverages AI to create personalized learning experiences.",
    status: "In Development",
    category: "EdTech / AI-Enhanced LMS",
    longDescription: "An innovative learning management system (LMS) that leverages AI to create personalized learning experiences. Taraa.ai connects learners with peers and tutors while providing AI agent assistance for learning challenges, questions, and skill development.",
    technologies: ["NextJS", "Python", "LLMs", "Vector Databases", "WebSockets", "React", "TailwindCSS", "PostgreSQL"],
    problem: "Traditional LMS platforms lack personalization and intelligent assistance, creating gaps in the learning experience and making it difficult for students to get timely help.",
    solution: "Combining collaborative learning features with AI agents that can provide instant feedback, answer questions, and guide learning based on individual progress and needs.",
    keyFeatures: [
      "AI-powered learning assistance with domain-specific knowledge",
      "Peer collaboration tools with real-time interaction",
      "Tutor marketplace and scheduling system",
      "Personalized learning paths and progress tracking",
      "Knowledge assessment and gap identification"
    ],
    keyResponsibilities: [
      "Full-stack development of core platform features",
      "Implementation of AI agents and their integration with the learning environment",
      "Real-time communication and collaboration systems",
      "User experience design for students, tutors, and administrators"
    ],
    views: 720,
    date: "2023-03-15",
    published: true,
    featured: false,
    type: "professional"
  },
  
  // Research Publications
  {
    slug: "tooth-segmentation",
    title: "Unsupervised Tooth Segmentation from 3D Scans",
    description: "Research focusing on unsupervised segmentation of individual teeth from three-dimensional scans of the dental arch.",
    status: "Published",
    category: "3D Computer Vision / Dentistry",
    longDescription: "Twenty scanned dental arches from various age groups and developmental stages were used to generate 20 simplified synthetic variants of the scans. These synthetic variants, along with 16 natural scanned dental arches, were used to train the deep learning models. Domain adaptation was employed using Gradient Reversal Layer and Siamese Network techniques. The PointNet and PointNet++ model backbones were trained to align the latent space distribution of real and synthetic domains. Validations were performed on four unseen natural scanned arches, with and without domain adaptation enabled, to evaluate whether a 3D deep neural network can be trained without any human-annotated 3D models.",
    technologies: ["Domain Adaptation", "Cloud Compare", "PointNet", "PointNet++", "Siamese Network"],
    publishedDate: "December 19, 2024",
    journal: "International Journal of Medical Informatics",
    doi: "https://doi.org/10.1016/j.ijmedinf.2024.105769",
    views: 560,
    date: "2024-12-19",
    published: true,
    featured: false,
    type: "publication"
  },
  {
    slug: "dental-loop-chatbot",
    title: "Dental Loop Chatbot",
    description: "A prototype Large Language Model framework tailored specifically for dentistry applications.",
    status: "Published",
    category: "NLP / Healthcare",
    longDescription: "The Dental Loop Chatbot was developed as a real-time, evidence-based guidance system for dental practitioners using a fine-tuned large language model (LLM) and Retrieval-Augmented Generation (RAG). This paper outlines the development and preliminary evaluation of the chatbot as a scalable clinical decision-support tool designed for resource-limited settings. The system’s architecture incorporates Quantized Low-Rank Adaptation (QLoRA) for efficient fine-tuning, while dynamic retrieval mechanisms ensure contextually accurate and relevant responses. This prototype lays the groundwork for future triaging and diagnostic support systems tailored specifically to the field of dentistry.",
    technologies: ["RAG", "QLoRa", "Domain-Specific Instruction Tuning", "LLMs"],
    publishedDate: "December 17, 2024",
    journal: "MDPI Software",
    doi: "https://doi.org/10.3390/software3040029",
    views: 650,
    date: "2024-12-17",
    published: true,
    featured: false,
    type: "publication"
  },
  {
    slug: "icdas-classification",
    title: "3D Neural Networks for ICDAS Classification",
    description: "Application of 3D neural networks and explainable AI techniques to classify dental conditions.",
    status: "Published",
    category: "3D Computer Vision / Dentistry",
    longDescription: "Two operators prepared 56 restorative cavities on simulated mandibular first molars according to 4 ICDAS classifications, followed by 3D scanning and computer-aided design processing. The surface area, virtual volume, Hausdorff distance (HD), and Dice Similarity Coefficients were computed. Multivariate analysis of variance was used to assess cavity size and operator proficiency interactions, and 1-way ANOVA was used to evaluate HD differences across 4 cavity classifications (α=.05). The 3D convolutional neural network (CNN) predicted the ICDAS class, and Saliency Maps explained the decisions of the models.",
    technologies: ["3D Scanning", "CAD", "Deep Learning", "3D CNN", "Saliency Maps", "Vision Transformer"],
    publishedDate: "October 22, 2024",
    journal: "The Journal of Prosthetic Dentistry",
    doi: "https://doi.org/10.1016/j.prosdent.2024.09.014",
    views: 590,
    date: "2024-10-22",
    published: true,
    featured: false,
    type: "publication"
  },
  {
    slug: "3d-tooth-classification",
    title: "3D Vision Transformers in Prosthetic Dentistry",
    description: "Research on applying 3D Vision Transformers and Explainable AI techniques to challenges in prosthetic dentistry.",
    status: "Published",
    category: "3D Computer Vision / Dentistry",
    longDescription: "To create and validate a transformer-based deep neural network architecture for classifying 3D scans of teeth for computer-assisted manufacturing and dental prosthetic rehabilitation surpassing previously reported validation accuracies obtained with convolutional neural networks (CNNs). Voxel-based representation and encoding input data in a high-dimensional space forms of preprocessing were investigated using 34 3D models of teeth obtained from intraoral scanning. Independent CNNs and vision transformers (ViTs), and their combination (CNN and ViT hybrid model) were implemented to classify the 3D scans directly from standard tessellation language (.stl) files and an Explainable AI (ExAI) model was generated to qualitatively explore the deterministic patterns that influenced the outcomes of the automation process. The results demonstrate that the CNN and ViT hybrid model architecture surpasses conventional supervised CNN, achieving a consistent validation accuracy of 90% through three-fold cross-validation. This process validated our initial findings, where each instance had the opportunity to be part of the validation set, ensuring it remained unseen during training. Furthermore, employing high-dimensional encoding of input data solely with 3DCNN yields a validation accuracy of 80%. When voxel data preprocessing is utilized, ViT outperforms CNN, achieving validation accuracies of 80% and 50%, respectively. The study also highlighted the saliency map's ability to identify areas of tooth cavity preparation of restorative importance, that can theoretically enable more accurate 3D printed prosthetic outputs. The investigation introduced a CNN and ViT hybrid model for classification of 3D tooth models in digital dentistry, and it was the first to employ ExAI in the efforts to automate the process of dental computer-assisted manufacturing.",
    technologies: ["PyTorch", "Vision Transformer", "3D Computer Vision", "Explainable AI", "CNN"],
    publishedDate: "September 3, 2024",
    journal: "Applied AI Letters",
    doi: "http://doi.org/10.1002/ail2.101",
    views: 680,
    date: "2024-09-03",
    published: true,
    featured: false,
    type: "publication"
  },
  
  // Research Projects
  {
    slug: "segment3d",
    title: "3D AI Segmentation Software",
    description: "A Python-based application that extends Meta's Segment Anything Model to work with 3D data.",
    status: "Completed",
    category: "Computer Vision / 3D Modeling",
    longDescription: "A Python-based application that extends Meta's Segment Anything Model to work with 3D data, enabling powerful 3D object segmentation capabilities for various applications.",
    technologies: ["Python", "VTK", "Point Clouds", "CAD", "Segment-Anything"],
    problem: "Meta's Segment Anything Model is limited to 2D images, while many real-world applications require 3D segmentation.",
    solution: "Extended the 2D model to work in 3D space by implementing novel techniques for depth projection and point cloud processing.",
    keyChallenges: [
      "Processing 3D point clouds efficiently",
      "Maintaining segmentation accuracy across dimensions",
      "Handling occlusion in 3D space"
    ],
    views: 1580,
    date: "2023-07-22",
    published: true,
    featured: true,
    type: "research"
  },
  {
    slug: "bangla-finetuned-model",
    title: "Bloom Model for Bangla",
    description: "A language model based on BLOOM, fine-tuned specifically for Bangla language understanding and generation.",
    status: "Completed",
    category: "NLP / Language Models",
    longDescription: "A language model based on BLOOM, fine-tuned specifically for Bangla language understanding and generation, with support for bilingual Bangla-English instruction following.",
    technologies: ["PyTorch", "BLOOM", "Fine-Tuning", "LoRA", "Quantization", "Transformers", "WandB"],
    problem: "Limited availability of high-quality language models for Bengali language speakers.",
    solution: "Fine-tuned the BLOOM 3B model on a curated dataset of conversational Bangla, using LoRA for efficient adaptation and maintaining bilingual capabilities.",
    modelAvailable: "https://huggingface.co/faisalahmedsifat/bloom-3b-convo-bangla-english-instruction-existing",
    views: 720,
    date: "2022-08-15",
    published: true,
    featured: false,
    type: "research"
  },
  {
    slug: "rag-chatbot",
    title: "RAG-based Chatbot with Llama 2",
    description: "A chatbot implementation using the Llama 2 7B model, enhanced with Retrieval-Augmented Generation.",
    status: "Completed",
    category: "NLP / Conversational AI",
    longDescription: "A chatbot implementation using the Llama 2 7B model, enhanced with Retrieval-Augmented Generation to provide factual and contextually relevant responses.",
    technologies: ["PyTorch", "Llama 2", "RAG", "Vector Database", "Transformers", "FastAPI"],
    problem: "Large language models often hallucinate information and lack up-to-date knowledge.",
    solution: "Integrated a vector database with the fine-tuned Llama 2 model to retrieve relevant information before generating responses, improving factuality and relevance.",
    views: 680,
    date: "2022-12-10",
    published: true,
    featured: false,
    type: "research"
  }
]; 