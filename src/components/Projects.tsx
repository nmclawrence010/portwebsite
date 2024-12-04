import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import stockwave1 from '/public/stockwave1.png';
import stockwave2 from '/public/stockwave2.png';
import fm1 from '/public/fm23.png';
import fm2 from '/public/fmoutput.png';
import animalmanagement from '/public/animalprofile.png';
import lrhpic from '/public/lrhpic.png';
import fpllineup from  '/public/fpllineup.png';


const projects = [
  {
    title: 'Stockwave',
    description: 'A portfolio tracker and screener for US based equities. (Currently undergoing a redesign)',
    images: [
          stockwave1,
          stockwave2
    ],
    tags: ['Next.js', 'React', 'Typescript', 'AWS'],
    github: 'https://github.com/nmclawrence010/Stockwave',
    demo: 'https://stockwave.app/'
  },
  {
    title: 'LRH Store',
    description: 'An E-commerce store for a local business.',
    image: lrhpic,
    tags: ['React', 'TypeScript', 'Stripe'],
    github: 'https://github.com/nmclawrence010/lrh-store',
    demo: 'https://demo.com'
  },
  {
    title: 'FPL Lineup Predictor',
    description: 'An automated app that scrapes predicted football lineups from the web and updates itself in real-time using GitHub Actions',
    image: fpllineup,
    tags: ['React', 'Vite', 'Github Actions', 'Octoparse'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'FM23 Position Calculator',
    description: 'Scripts for the game Football Manager 23 to calculate the statistical best position of a player based on their in game attributes.',
    images: [
          fm,
          fm2
    ],    tags: ['Python'],
    github: 'https://github.com/nmclawrence010/fm23-position-calculator',
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather monitoring dashboard with interactive maps and forecasting.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80',
    tags: ['Vue.js', 'D3.js', 'OpenWeather API'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Task Manager',
    description: 'A collaborative task management platform with real-time updates and team features.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Socket.io', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
];

export function Projects() {
  return (
    <div className="bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="projects-swiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
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
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
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
