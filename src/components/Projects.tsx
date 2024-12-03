import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    title: 'Stockwave',
    description: 'A portfolio tracker and screener for US based equities. (Currently undergoing a redesign)',
    images: [
      '/stockwave-1.png',
      '/stockwave-2.png'
    ],
    tags: ['Next.js', 'React', 'Typescript', 'AWS'],
    github: 'https://github.com/nmclawrence010/Stockwave',
    demo: 'https://stockwave.app/'
  },
  {
    title: 'LRH Store',
    description: 'An E-commerce store for a local business.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'TypeScript', 'Stripe'],
    github: 'https://github.com/nmclawrence010/lrh-store',
    demo: 'https://demo.com'
  },
  {
    title: 'Fitness Tracker',
    description: 'A mobile-first web application for tracking workouts and nutrition with progress visualization.',
    image: 'https://images.unsplash.com/photo-1461773518188-b3e86f98242f?auto=format&fit=crop&w=800&q=80',
    tags: ['React Native', 'Redux', 'Firebase'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
];

export function Projects() {
  return (
    <div className="bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  images?: string[];
  tags: string[];
  github: string;
  demo: string;
}

function ProjectCard({ title, description, image, images, tags, github, demo }: ProjectCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        {images ? (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className="h-full w-full"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`${title} screenshot ${index + 1}`} className="w-full h-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          image && (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          )
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
        
        <div className="mt-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
              <span>Code</span>
            </a>
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ExternalLink size={20} />
              <span>Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}