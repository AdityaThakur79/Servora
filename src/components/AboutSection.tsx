import { FaUsers, FaLightbulb, FaLaptopCode, FaTrophy } from 'react-icons/fa';

const AboutSection = () => {
  const stats = [
    {
      value: '50+',
      label: 'Completed Projects',
      icon: <FaLaptopCode />,
    },
    {
      value: '98%',
      label: 'Client Satisfaction',
      icon: <FaTrophy />,
    },
    {
      value: '15+',
      label: 'Team Members',
      icon: <FaUsers />,
    },
    {
      value: '5+',
      label: 'Years Experience',
      icon: <FaLightbulb />,
    },
  ];

  const teamMembers = [
    {
      name: 'John Smith',
      position: 'CEO & Founder',
      image: 'https://via.placeholder.com/400x400?text=John+Smith',
    },
    {
      name: 'Sarah Johnson',
      position: 'Creative Director',
      image: 'https://via.placeholder.com/400x400?text=Sarah+Johnson',
    },
    {
      name: 'Michael Chen',
      position: 'Lead Developer',
      image: 'https://via.placeholder.com/400x400?text=Michael+Chen',
    },
  ];

  return (
    <section id="about" className="section bg-light py-0">
      <div className="container">
         
         {/* <div className="container"> */}
        
          <div className="max-w-5xl mx-auto pb-10">
          <div
            className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-400   dark:bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
          >
          About Servora
          </div>
          </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Your Partner for Digital Growth and Success
            </h3>
            <p className="text-gray-600 mb-6">
              Servora is a full-service digital agency dedicated to helping businesses transform their online presence and achieve their digital goals. With a team of passionate designers, developers, and marketers, we bring ideas to life and create digital experiences that drive results.
            </p>
            <p className="text-gray-600 mb-6">
              Founded in 2018, we've worked with clients across various industries, providing tailored solutions that address unique business challenges. Our client-centric approach and commitment to excellence have established us as a trusted partner for businesses looking to succeed in the digital landscape.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-primary rounded-full mr-3"></div>
                <span className="font-medium">Creative and innovative solutions</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-primary rounded-full mr-3"></div>
                <span className="font-medium">Client-focused approach</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-primary rounded-full mr-3"></div>
                <span className="font-medium">Transparent communication</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-primary rounded-full mr-3"></div>
                <span className="font-medium">Continuous improvement</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-64 h-64 bg-primary rounded-full opacity-10 absolute -top-6 -right-6"></div>
            <img 
              src="https://via.placeholder.com/600x400?text=Our+Team" 
              alt="Servora team" 
              className="rounded-lg shadow-xl w-full h-auto relative z-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-primary"
            >
              <div className="text-primary text-3xl mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center mb-12">Meet Our Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src= "https://servora.in/assets/dellcube-service-Chj8gV7r.png"
                    alt={member.name} 
                    className="w-full h-full object-cover"
                    
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;