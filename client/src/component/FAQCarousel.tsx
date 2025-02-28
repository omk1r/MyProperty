import { useState, useEffect } from 'react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'How do I list my property on Estatein?',
    answer:
      "To list your property, create an account, go to the 'List Property' section, and fill in the required details, including images, pricing, and description.",
  },
  {
    id: 2,
    question: 'What documents are required to buy a property?',
    answer:
      'You typically need proof of identity, proof of income, bank statements, and any required legal documents related to the property.',
  },
  {
    id: 3,
    question: 'Does Estatein charge a commission for property transactions?',
    answer:
      'Yes, Estatein charges a small commission fee for successful transactions. The exact percentage depends on the type of property and location.',
  },
  {
    id: 4,
    question: 'Can I schedule a virtual tour of a property?',
    answer:
      'Yes! Estatein offers virtual tours for select properties. You can request a tour through the property listing page.',
  },
  {
    id: 5,
    question: 'How can I contact customer support?',
    answer:
      'You can contact our support team via email at support@estatein.com or call our helpline, available 24/7.',
  },
];

export default function FAQCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [itemsPerView, setItemsPerView] = useState<number>(1);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 768) {
        setItemsPerView(3); // Show 3 items on md: and larger
      } else {
        setItemsPerView(1); // Show 1 item on smaller screens
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const next = () => {
    if (currentIndex + itemsPerView < faqs.length) {
      setCurrentIndex(currentIndex + itemsPerView);
    }
  };

  const prev = () => {
    if (currentIndex - itemsPerView >= 0) {
      setCurrentIndex(currentIndex - itemsPerView);
    }
  };

  return (
    <div className="relative mx-auto pt-4 w-full">
      <div className="px-4 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(100 / itemsPerView) * currentIndex}%)`,
          }}
        >
          {faqs.map((faq) => (
            <div key={faq.id} className="flex-shrink-0 px-2 w-full md:w-1/3">
              <div className="flex flex-col items-start px-4 md:px-6 xl:px-8 py-6 md:py-8 xl:py-10 border border-[#262626] rounded-xl h-full">
                <h5 className="mt-5 font-semibold text-lg md:text-xl xl:text-2xl">
                  {faq.question}
                </h5>
                <p className="my-3 font-medium text-[#999999] text-sm md:text-base xl:text-lg">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 flex justify-between items-center">
        <button onClick={prev} className="shadow rounded-full text-gray-800">
          <i className="ri-arrow-left-line bg-gray-400 px-1 md:px-2 py-1 md:py-2 rounded-2xl md:text-lg"></i>
        </button>
        <button onClick={next} className="shadow rounded-full text-gray-800">
          <i className="ri-arrow-right-line bg-gray-400 px-1 md:px-2 py-1 md:py-2 rounded-2xl md:text-lg"></i>
        </button>
      </div>
    </div>
  );
}
