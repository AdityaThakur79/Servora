import { FaLaptopCode, FaWordpress, FaShopify, FaMobileAlt, FaSearch, FaChartLine, FaDatabase, FaShieldAlt, FaDesktop } from 'react-icons/fa';
import { Button } from './ui/button';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Custom Web Development',
      description: 'Bespoke websites tailored to your business needs with modern technologies and responsive design.',
      icon: <FaLaptopCode size={36} />,
    },
    {
      id: 2,
      title: 'WordPress Development',
      description: 'Custom WordPress themes and plugins development for content-rich, manageable websites.',
      icon: <FaWordpress size={36} />,
    },
    {
      id: 3,
      title: 'Shopify Development',
      description: 'Conversion-focused e-commerce stores with custom themes and apps to boost your online sales.',
      icon: <FaShopify size={36} />,
    },
    {
      id: 4,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      icon: <FaMobileAlt size={36} />,
    },
    {
      id: 5,
      title: 'SEO & Digital Marketing',
      description: 'Strategic SEO and digital marketing services to improve visibility and drive quality traffic.',
      icon: <FaSearch size={36} />,
    },
    {
      id: 6,
      title: 'UI/UX Design',
      description: 'User-centered design focused on creating intuitive, engaging and conversion-optimized interfaces.',
      icon: <FaDesktop size={36} />,
    },
    {
      id: 7,
      title: 'E-commerce Solutions',
      description: 'Full-featured online stores with secure payment gateways, inventory management, and marketing tools.',
      icon: <FaChartLine size={36} />,
    },
    {
      id: 8,
      title: 'Web Application Development',
      description: 'Robust web applications with advanced functionalities to streamline your business operations.',
      icon: <FaDatabase size={36} />,
    },
    {
      id: 9,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and technical support to keep your digital assets secure and optimized.',
      icon: <FaShieldAlt size={36} />,
    },
  ];

  return (
    <section id="services" className="section bg-light py-0">
      <div className="container">
            <div className="max-w-5xl mx-auto pb-10">
          <div
            className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-400   dark:bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
          >
            Streamline your business with our services
          </div>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <a 
                href="#contact" 
                className="inline-block mt-4 text-primary font-medium hover:underline"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button  className="btn btn-primary">
            Get a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;