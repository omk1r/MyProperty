interface Value {
  title: string;
  description: string;
}

interface Achievement {
  title: string;
  description: string;
}

const values: Value[] = [
  {
    title: 'Trust',
    description:
      'Trust is the cornerstone of every successful real estate transaction.',
  },
  {
    title: 'Excellence',
    description:
      'We set the bar high for ourselves. From the properties we list to the services we provide.',
  },
  {
    title: 'Client-Centric',
    description:
      'Your dreams and needs are at the center of our universe. We listen, understand.',
  },
  {
    title: 'Our Commitment',
    description:
      'We are dedicated to providing you with the highest level of service, professionalism',
  },
];

const achievements: Achievement[] = [
  {
    title: '3+ Years Of Excellence',
    description:
      " With over 3 years in the industry, we've amassed a wealth of knowledge and experience.",
  },
  {
    title: 'Happy Clients',
    description:
      'Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.',
  },
  {
    title: 'Industry Recognition',
    description:
      "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
  },
];

const About = () => {
  return (
    <>
      {/* our journey */}
      <div className="flex md:flex-row-reverse flex-col w-full">
        <div className="mx-3 md:mx-0 my-10 md:my-0 rounded-2xl md:rounded-none md:w-1/2 overflow-hidden">
          <img
            src="./about-banner-image.png"
            alt=""
            className="w-full h-full max-h-[548px] object-cover"
          />
        </div>

        <div className="md:px-8 md:py-10 md:w-1/2">
          <div className="mx-4 my-6">
            <h3 className="font-semibold text-3xl md:text-5xl xl:text-6xl">
              Our Journey
            </h3>
            <p className="my-6 font-medium text-gray-400 text-sm md:text-base xl:text-lg">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary. Over the years, we've
              expanded our reach, forged valuable partnerships, and gained the
              trust of countless clients.
            </p>
          </div>

          <div className="flex flex-wrap md:flex-nowrap px-2 py-3 w-full">
            <div className="my-2 px-2 w-1/2 md:w-1/3">
              <div className="flex flex-col justify-center md:items-start bg-[#1A1A1A] px-4 py-8 md:py-4 border border-[#262626] rounded-lg h-full md:text-left text-center">
                <h4 className="font-bold text-2xl md:text-3xl xl:text-4xl">
                  200+
                </h4>
                <p className="pt-2 font-medium text-gray-400 text-sm md:text-base xl:text-lg">
                  Happy Customers
                </p>
              </div>
            </div>
            <div className="my-2 px-2 w-1/2 md:w-1/3">
              <div className="flex flex-col justify-center md:items-start bg-[#1A1A1A] px-4 py-8 md:py-4 border border-[#262626] rounded-lg h-full md:text-left text-center">
                <h4 className="font-bold text-2xl md:text-3xl xl:text-4xl">
                  10k+
                </h4>
                <p className="pt-2 font-medium text-gray-400 text-sm md:text-base xl:text-lg">
                  Properties For Clients
                </p>
              </div>
            </div>
            <div className="my-2 px-2 w-full md:w-1/3">
              <div className="flex flex-col justify-center md:items-start bg-[#1A1A1A] px-4 py-8 md:py-4 border border-[#262626] rounded-lg h-full md:text-left text-center">
                <h4 className="font-bold text-2xl md:text-3xl xl:text-4xl">
                  16+
                </h4>
                <p className="pt-2 font-medium text-gray-400 text-sm md:text-base xl:text-lg">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our values */}
      <div className="flex md:flex-row flex-col md:px-8 md:py-10 w-full">
        <div className="flex items-center md:w-1/3">
          <div className="mx-4 my-6">
            <h3 className="font-semibold text-3xl md:text-5xl xl:text-6xl">
              Our Values
            </h3>
            <p className="my-6 font-medium text-gray-400 text-sm md:text-base xl:text-lg">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary.
            </p>
          </div>
        </div>

        <div className="px-4 py-6 w-full md:w-2/3">
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 shadow-[0_0_25px_10px_#262626] px-2 md:px-8 py-3 md:py-10 border-[#262626] border-2 rounded-2xl md:rounded-xl">
            {values.map((value, index) => (
              <div
                key={index}
                className={`px-2 py-2 border-[#262626] ${
                  index !== 1 && index !== 3 ? 'md:border-r' : ''
                } ${index < 2 ? 'border-b' : ''}`}
              >
                <div className="flex items-center gap-2">
                  <img src="./trust-star-icon.png" alt={value.title} />
                  <h3 className="font-semibold text-lg md:text-xl xl:text-2xl">
                    {value.title}
                  </h3>
                </div>
                <p className="my-3 font-medium text-[#999999] text-sm md:text-base xl:text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Achievemnets */}
      <div className="flex flex-col md:px-8 md:py-10 w-full">
        <div className="flex items-center">
          <div className="mx-4 my-6 w-[85%]">
            <h3 className="font-semibold text-3xl md:text-5xl xl:text-6xl">
              Our Achievements
            </h3>
            <p className="my-6 font-medium text-gray-400 text-sm md:text-base xl:text-lg">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary.
            </p>
          </div>
        </div>

        <div className="md:flex px-4 py-6 w-full">
          {achievements.map((achievement, index) => {
            return (
              <div
                key={index}
                className="shadow-[0_0_25px_10px_#262626] mx-2 my-2 px-6 md:px-8 py-8 border-[#262626] border-2 rounded-2xl md:rounded-xl md:w-1/3"
              >
                <h3 className="font-semibold text-xl md:text-2xl xl:text-3xl">
                  {achievement.title}
                </h3>
                <p className="mt-4 font-medium text-[#999999] text-sm md:text-base lg:text-lg">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
