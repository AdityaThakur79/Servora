import { SetStateAction, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Button } from './ui/button';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What services does Servora offer?',
      answer: 'Servora offers custom web development, WordPress/Shopify development, mobile apps, UI/UX design, e-commerce solutions, SEO, and maintenance support.',
    },
    {
      question: 'How long does it take to complete a website or app project?',
      answer: 'Simple websites take 2-4 weeks, while complex applications take 2-6 months. We provide detailed timelines during consultation.',
    },
    {
      question: 'How much does it cost to develop a website or app?',
      answer: 'Costs vary based on requirements and complexity. We offer flexible packages for different budgets. Contact us for a tailored quote.',
    },
    {
      question: 'Do you provide ongoing support after the project is completed?',
      answer: 'Yes, we offer maintenance packages including updates, security monitoring, optimization, and technical support.',
    },
    {
      question: 'What is your development process?',
      answer: 'Our process includes Discovery, Strategy & Design, Development, Testing & Launch, Support & Maintenance, and Growth & Optimization.',
    },
    {
      question: 'Do you work with clients internationally?',
      answer: 'Yes, we work with clients globally using our digital delivery model to collaborate across different countries and time zones.',
    },
  ];

  const toggleFAQ = (index: SetStateAction<number>) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section bg-white py-0">
      <div className="container">
         
         {/* <div className="container"> */}
        
          <div className="max-w-5xl mx-auto pb-10">
          <div
            className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-400   dark:bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
          >
         Frequently Asked Questions
          </div>
          </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button 
                  className={`w-full p-5 text-left flex justify-between items-center ${
                    openIndex === index ? 'bg-primary text-white' : 'bg-white text-dark hover:bg-gray-50'
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <span className="text-xl">
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>
                
                {openIndex === index && (
                  <div className="p-5 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              If you couldn't find the answer to your question, feel free to contact us directly.
            </p>
            <Button className="btn btn-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;