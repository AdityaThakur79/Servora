import { useState } from 'react';
import { Button } from './ui/button';

const PortfolioSection = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'CTRL Clothing',
      category: 'web',
      image: "https://adityathakur.vercel.app/project_images/ctrlClothing.png",
      tags: ['E-commerce', 'Web Development', 'Wordpress'],
      link:"http://ctrlclothing.in/"
    },
    {
      id: 2,
      title: 'Dellcube Logistics',
      category: 'app',
      image: "https://servora.in/assets/dellcube-service-Chj8gV7r.png",
      tags: ['Logistics', 'Web Development'],
      link:"https://dellcube-stg.vercel.app/"
    },
    {
      id: 3,
      title: 'Doctor Appointment System',
      category: 'web',
      image: "https://adityathakur.vercel.app/project_images/ctrlClothing.png",
      tags: ['Web Design', 'Corporate', 'WordPress'],
      link:"https://mamatahearingaid.in/"
    },
    {
      id: 4,
      title: 'Food Delivery Platform',
      category: 'app',
      image: "https://adityathakur.vercel.app/project_images/ctrlClothing.png",
      tags: ['Food & Hospitality', 'Web App', 'Mobile App'],
      link:"http://ctrlclothing.in/"
    },
    {
      id: 5,
      title: 'Real Estate Listings Portal',
      category: 'web',
      image: "https://adityathakur.vercel.app/project_images/ctrlClothing.png",
      tags: ['Real Estate', 'Web Development', 'SEO'],
      link:"http://ctrlclothing.in/"
    },
    {
      id: 6,
      title: 'Logistics Management System',
      category: 'software',
      image: "https://adityathakur.vercel.app/project_images/ctrlClothing.png",
      tags: ['Logistics', 'Software', 'Web App'],
      link:"http://ctrlclothing.in/"
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="section bg-light py-0">
      <div className="container">
        {/* <div className="container"> */}
        
          <div className="max-w-5xl mx-auto pb-10">
          <div
            className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-400   dark:bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
          >
         Our Portfolio
          </div>
          </div>


        <div className="flex justify-center flex-wrap gap-4 mb-12">
          <button 
            className={`px-6 py-2 rounded-full transition-colors ${
              filter === 'all' 
                ? 'bg-primary text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`px-6 py-2 rounded-full transition-colors ${
              filter === 'web' 
                ? 'bg-primary text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => setFilter('web')}
          >
            Web
          </button>
          <button 
            className={`px-6 py-2 rounded-full transition-colors ${
              filter === 'app' 
                ? 'bg-primary text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => setFilter('app')}
          >
            Mobile
          </button>
          <button 
            className={`px-6 py-2 rounded-full transition-colors ${
              filter === 'software' 
                ? 'bg-primary text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => setFilter('software')}
          >
            Software
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={project?.image}
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                  
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                {/* <h4 className="text-xl font-bold mb-2">{project.category}</h4> */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-primary font-medium hover:underline"
                  
                >
                  View Live
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button className="btn btn-outline">
            Have a Project in Mind? Let's Talk
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;