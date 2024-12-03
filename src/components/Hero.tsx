import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(22,163,74,0.15),rgba(0,0,0,0.2))]" />
      <div className="relative flex flex-col items-center justify-center min-h-screen text-white px-4">
        <div className="animate-float">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQHhB1AOURyV4w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730778060683?e=1738800000&v=beta&t=9Zg49XoY_-jwDoCsH5hDBxHmr2Z9LXwvM1EuJbBQGHk"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-green-500/50 shadow-xl mb-8 shadow-green-500/20"
          />
        </div>
        <h1 className="text-6xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
          Niall Mclawrence
        </h1>
        <p className="text-xl mb-8 max-w-2xl text-center text-gray-300">
          Graduate Software Engineer from Northern Ireland.
        </p>
        
        <div className="flex gap-6">
          <SocialLink href="https://github.com/nmclawrence010" icon={<Github />} label="GitHub" />
          <SocialLink href="https://www.linkedin.com/in/niall-mcl/" icon={<Linkedin />} label="LinkedIn" />
          <SocialLink href="https://x.com/NiallMclawrence" icon={<Twitter />} label="Twitter" />
          <SocialLink href="mailto:nmclawrence010@gmail.com" icon={<Mail />} label="Email" />
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-500/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-500/50 rounded-full mt-2" />
        </div>
      </div>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transform hover:scale-110 transition-transform duration-200"
      aria-label={label}
    >
      <div className="p-3 bg-green-500/10 backdrop-blur-sm rounded-full hover:bg-green-500/20 border border-green-500/20">
        {icon}
      </div>
    </a>
  );
}
