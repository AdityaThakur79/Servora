import { FaTruck, FaHospital, FaShoppingCart, FaUniversity, FaHome, FaHammer, FaUtensils, FaPlane, FaGraduationCap } from 'react-icons/fa';
import { Button } from './ui/button';

const IndustriesSection = () => {
  const industries = [
    {
      id: 1,
      name: 'Logistics & Transportation',
      description: 'Digital solutions for fleet management, route optimization, and supply chain visibility.',
      icon: <FaTruck size={36} />,
      bgClass: 'from-blue-500 to-blue-700',
    },
    {
      id: 2,
      name: 'Healthcare & Wellness',
      description: 'Patient management systems, telehealth platforms, and healthcare data analytics.',
      icon: <FaHospital size={36} />,
      bgClass: 'from-green-500 to-green-700',
    },
    {
      id: 3,
      name: 'E-commerce & Retail',
      description: 'Online stores, inventory management, and omnichannel retail solutions.',
      icon: <FaShoppingCart size={36} />,
      bgClass: 'from-purple-500 to-purple-700',
    },
    {
      id: 4,
      name: 'Banking & Finance',
      description: 'Secure payment gateways, financial management tools, and banking applications.',
      icon: <FaUniversity size={36} />,
      bgClass: 'from-yellow-500 to-yellow-700',
    },
    {
      id: 5,
      name: 'Real Estate',
      description: 'Property listing platforms, virtual tours, and real estate management systems.',
      icon: <FaHome size={36} />,
      bgClass: 'from-red-500 to-red-700',
    },
    {
      id: 6,
      name: 'Construction',
      description: 'Project management tools, estimation software, and construction monitoring solutions.',
      icon: <FaHammer size={36} />,
      bgClass: 'from-orange-500 to-orange-700',
    },
    {
      id: 7,
      name: 'Food & Hospitality',
      description: 'Reservation systems, online ordering platforms, and restaurant management tools.',
      icon: <FaUtensils size={36} />,
      bgClass: 'from-pink-500 to-pink-700',
    },
    {
      id: 8,
      name: 'Travel & Tourism',
      description: 'Booking platforms, travel itinerary planners, and tourism marketing solutions.',
      icon: <FaPlane size={36} />,
      bgClass: 'from-teal-500 to-teal-700',
    },
    {
      id: 9,
      name: 'Education & eLearning',
      description: 'Learning management systems, online course platforms, and educational tools.',
      icon: <FaGraduationCap size={36} />,
      bgClass: 'from-indigo-500 to-indigo-700',
    },
  ];

  return (
    <section id="industries" className="section bg-dark text-white py-0">
      <div className="container">
        
          <div className="max-w-5xl mx-auto pb-10">
          <div
            className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-400   dark:bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
          >
           Industries We Serve
          </div>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className={`rounded-lg p-8 bg-gradient-to-br ${industry.bgClass} hover:scale-105 transition-transform`}
            >
              <div className="text-white mb-4">{industry.icon}</div>
              <h3 className="text-xl font-bold mb-3">{industry.name}</h3>
              <p className="text-gray-100">{industry.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button  className="btn   ">
            Discuss Your Industry Needs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;