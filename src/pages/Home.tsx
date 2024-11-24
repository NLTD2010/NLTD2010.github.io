import React from 'react';
import { Facebook, Github, Instagram, Mail } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-colors duration-300">
      <div className="relative h-80 w-full overflow-hidden">
        <img
          className="h-auto w-full object-cover object-top"
          src="https://i.ibb.co/XXXhwYy/image.png"
        />
      </div>        
      <div className="relative px-8 pb-8">
          <div className="relative -mt-24">
            <img
              src="https://i.ibb.co/znJ17Dp/vbyq6-Dj-d.jpg"
              alt="Profile"
              className="w-32 h-32 object-contain rounded-full border-4 border-white dark:border-gray-800 shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="mt-4">
            <div className="text-gray-900 dark:text-white">
              <h1 className="text-4xl font-bold inline">Thai Duong</h1>
              <span className="text-sm text-gray-700 dark:text-white ml-2">(First name: Duong)</span>
            </div>

            <p className="text-xl text-gray-600 dark:text-gray-300 mt-3">Student</p>
          </div>



          <div className="mt-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Student with a strong passion for technology. 
            4+ years of programming, proficient in Python and C++.
            Always excited to learn new technologies and solve complex problems.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Skills</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Python', 'C++', 'Node.js', 'Docker'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 
                    rounded-full text-sm font-medium transform hover:scale-110 hover:bg-blue-100 
                    dark:hover:bg-blue-800/50 transition-all duration-300 ease-in-out cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex space-x-4">
            {[
              { icon: Github, label: 'GitHub', href: 'https://github.com/NLTD2010' },
              { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/NLTD2010' },
              { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/nltd2010/' },
              { icon: Mail, label: 'Email', href: 'mailto:thaiduong35cpu@gmail.com' }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 
                  hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-110 
                  transition-all duration-300 ease-in-out"
              >
                <social.icon className="w-5 h-5" />
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;