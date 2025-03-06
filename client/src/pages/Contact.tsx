const Contact = () => {
  return (
    <>
      <div>
        <div className="bg-gradient-to-r from-[#262626] from-0% md:px-8 py-4 md:py-10 border-[#262626] border-b">
          <div className="mx-4 mt-6 mb-3 md:w-[85%]">
            <h3 className="font-semibold text-3xl md:text-4xl xl:text-5xl">
              Get in Touch with Estatein
            </h3>
            <p className="my-6 font-medium text-gray-400 text-sm md:text-base xl:text-lg">
              Welcome to MyProperty's Contact Us page. We're here to assist you
              with any inquiries, requests, or feedback you may have. Whether
              you're looking to buy or sell a property, explore investment
              opportunities, or simply want to connect, we're just a message
              away. Reach out to us, and let's start a conversation.
            </p>
          </div>
        </div>
        <div className="my-6 px-4 md:px-2 py-5">
          <div className="gap-4 grid grid-cols-2 md:grid-cols-4 shadow-[0_0_25px_10px_#262626] px-2 py-3 border border-[#262626] rounded-2xl md:rounded-none w-full">
            {[
              { text: 'info@myproperty.com', icon: 'ri-mail-line' },
              { text: '+1(123) 456-7890', icon: 'ri-phone-line' },
              { text: 'Main Headquareters', icon: 'ri-map-pin-line' },
              { text: 'LinkedIn', icon: 'ri-links-line' },
            ].map((item, index) => (
              <div key={index} className="h-full">
                <div className="flex flex-col justify-between items-center bg-[#1A1A1A] px-2 py-4 border border-[#262626] rounded-lg h-full">
                  <i className={`text-purple-500 text-3xl ${item.icon}`}></i>
                  <div>
                    <p className="py-3 font-semibold text-sm md:text-base xl:text-xl text-center">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
