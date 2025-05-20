import { FaLightbulb, FaPencilRuler, FaCode, FaRocket, FaHeadset, FaChartLine } from 'react-icons/fa';
import { Button } from './ui/button';

const ProcessSection = () => {
  const processSteps = [
    {
      id: 1,
      title: 'Discovery',
      description: 'We start by understanding your business, goals, target audience, and project requirements.',
      icon: <FaLightbulb />,
    },
    {
      id: 2,
      title: 'Strategy & Design',
      description: 'We develop a comprehensive strategy and create wireframes and designs for your digital solution.',
      icon: <FaPencilRuler />,
    },
    {
      id: 3,
      title: 'Development',
      description: 'Our expert developers bring the designs to life using the latest technologies and best practices.',
      icon: <FaCode />,
    },
    {
      id: 4,
      title: 'Testing & Launch',
      description: 'We rigorously test the solution and prepare for a smooth launch to ensure everything works perfectly.',
      icon: <FaRocket />,
    },
    {
      id: 5,
      title: 'Support & Maintenance',
      description: 'We provide ongoing support and maintenance to keep your digital solution running optimally.',
      icon: <FaHeadset />,
    },
    {
      id: 6,
      title: 'Growth & Optimization',
      description: 'We continuously monitor performance and implement improvements to drive growth and results.',
      icon: <FaChartLine />,
    },
  ];

  return (
    <section id="process" className="section bg-white py-0">
      {/* <div className="container"> */}
        <div className="container">
        
          <div className="max-w-5xl mx-auto pb-10">
          <div
            className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-400   dark:bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
          >
           Our Process
          </div>
          </div>


        <div className="relative">
          {/* Process Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className="relative z-10 bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl">
                    {step.icon}
                  </div>
                </div>
                <div className="text-center mb-2">
                  <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-2">
                    Step {step.id}
                  </span>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-gray-600">
                Our dedicated team is ready to bring your vision to life with our efficient process and expertise.
              </p>
            </div>
            <div className="md:col-span-1 flex items-center">
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary rounded-full mr-3"></div>
                  <span>Clear Communication</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary rounded-full mr-3"></div>
                  <span>Transparent Timeline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary rounded-full mr-3"></div>
                  <span>Fixed Pricing</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-1 flex items-center justify-center md:justify-end">
              <Button className="btn btn-primary">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;