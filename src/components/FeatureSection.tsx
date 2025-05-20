import { FaCode, FaPaintBrush, FaRocket, FaMobile, FaChartLine, FaLock } from 'react-icons/fa';

const FeatureSection = () => {
  const features = [
    {
      title: 'Expert Development',
      description: 'Our developers use the latest technologies and best practices to deliver high-performance, scalable solutions.',
      icon: <FaCode size={30} />,
      color: 'blue',
    },
    {
      title: 'Creative Design',
      description: 'We create visually stunning, user-centered designs that enhance brand identity and user experience.',
      icon: <FaPaintBrush size={30} />,
      color: 'purple',
    },
    {
      title: 'Rapid Deployment',
      description: 'Our efficient workflow ensures your projects are delivered on time without compromising quality.',
      icon: <FaRocket size={30} />,
      color: 'orange',
    },
    {
      title: 'Mobile-First Approach',
      description: 'All our solutions are fully responsive and optimized for all devices and screen sizes.',
      icon: <FaMobile size={30} />,
      color: 'green',
    },
    {
      title: 'Results-Driven Strategy',
      description: 'We focus on creating solutions that drive measurable business growth and ROI.',
      icon: <FaChartLine size={30} />,
      color: 'red',
    },
    {
      title: 'Secure & Reliable',
      description: 'Security is built into everything we do, ensuring your digital assets are protected.',
      icon: <FaLock size={30} />,
      color: 'teal',
    },
  ];

  const getGradient = (color) => {
    const gradients = {
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
      green: 'from-green-500 to-green-600',
      red: 'from-red-500 to-red-600',
      teal: 'from-teal-500 to-teal-600',
    };
    return gradients[color] || 'from-primary to-primary-dark';
  };

  return (
    <section className="section bg-gray-50 py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Servora</h2>
          <p className="section-subtitle">
            We combine technical expertise with creative talent to deliver exceptional digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className={`h-2 bg-gradient-to-r ${getGradient(feature.color)}`}></div>
              <div className="p-8">
                <div className={`w-14 h-14 mb-5 rounded-lg bg-gradient-to-r ${getGradient(feature.color)} text-white flex items-center justify-center`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">The Servora Advantage</h3>
              <p className="text-gray-600 mb-6">
                Our unique approach combines technical excellence, creative design, and strategic thinking to deliver digital solutions that not only look great but also drive real business results.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary rounded-full mr-3"></div>
                  <span>Dedicated Project Manager</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary rounded-full mr-3"></div>
                  <span>Transparent Communication</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary rounded-full mr-3"></div>
                  <span>Quality Assurance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary rounded-full mr-3"></div>
                  <span>Post-Launch Support</span>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <a href="#contact" className="btn btn-primary">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;