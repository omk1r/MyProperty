import ClientCarousel from '../component/ClientCarousel';
import Footer from '../component/Footer';

interface Schema {
  title: string;
  description: string;
}
interface Team {
  img: string;
  name: string;
  designation: string;
}

const values: Schema[] = [
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

const achievements: Schema[] = [
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

const steps: Schema[] = [
  {
    title: 'Discover a World of Possibilities',
    description:
      'Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location,',
  },
  {
    title: 'Narrowing Down Your Choices',
    description:
      "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
  },
  {
    title: 'Personalized Guidance',
    description:
      'Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.',
  },
];

const teams: Team[] = [
  {
    img: './user-card.png',
    name: 'Max Mitchell',
    designation: 'Founder',
  },
  {
    img: './Image-1.png',
    name: 'Sarah Johnson',
    designation: 'Chief Real Estate Officer',
  },
  {
    img: './Image.png',
    name: 'David Brown',
    designation: 'Head of Property Management',
  },
  {
    img: './Image-2.png',
    name: 'Michael Turner',
    designation: 'Legal Counsel',
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
      <div className="flex md:flex-row flex-col md:px-8 py-4 md:py-10 w-full">
        <div className="flex items-center md:w-1/3">
          <div className="mx-4 mt-6 mb-3">
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

        <div className="px-4 py-3 w-full md:w-2/3">
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
      <div className="flex flex-col md:px-8 py-4 md:py-10 w-full">
        <div className="flex items-center">
          <div className="mx-4 mt-6 mb-3 md:w-[85%]">
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

        <div className="md:flex px-4 py-3 w-full">
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

      {/* MyProperty experience */}
      <div className="flex flex-col md:px-8 py-4 md:py-10 w-full">
        <div className="mx-4 mt-6 mb-3 md:w-[85%]">
          <h3 className="font-semibold text-3xl md:text-5xl xl:text-6xl">
            Navigating the MyProperty Experience
          </h3>
          <p className="my-6 font-medium text-gray-400 text-sm md:text-base xl:text-lg">
            At MyProperty, we've designed a straightforward process to help you
            find and purchase your dream property with ease. Here's a
            step-by-step guide to how it all works.
          </p>
        </div>

        <div className="md:flex px-4 py-3 w-full">
          {steps.map((step, index) => {
            return (
              <div
                key={index}
                className="inset-shadow-[2px_2px_5px_2px_#703BF7] mx-2 my-2 px-6 md:px-8 py-8 border-[#262626] border-2 rounded-e-3xl rounded-bl-3xl md:w-1/3"
              >
                <span className="font-medium text-base xl:text-xl">
                  Step 0{index + 1}
                </span>
                <h3 className="py-4 font-semibold text-lg md:text-xl xl:text-2xl">
                  {step.title}
                </h3>
                <p className="font-medium text-[#999999] text-sm md:text-base lg:text-lg">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* MyProperty team */}
      <div className="flex flex-col md:px-8 py-4 md:py-10 w-full">
        <div className="mx-4 mt-6 mb-3 md:w-[85%]">
          <h3 className="font-semibold text-3xl md:text-5xl xl:text-6xl">
            Meet the MyProperty Team
          </h3>
          <p className="my-6 font-medium text-gray-400 text-sm md:text-base xl:text-lg">
            At MyProperty, our success is driven by the dedication and expertise
            of our team. Get to know the people behind our mission to make your
            real estate dreams a reality.
          </p>
        </div>

        <div className="md:flex px-4 py-3 w-full">
          {teams.map((team, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center mx-2 my-2 px-6 md:px-8 py-4 border-[#262626] border-2 rounded-2xl md:w-1/3"
              >
                <img src={team.img} alt={team.name} className="rounded-2xl" />
                <h3 className="py-3 font-semibold text-lg md:text-xl xl:text-2xl text-center">
                  {team.name}
                </h3>
                <p className="font-medium text-[#999999] text-sm md:text-base lg:text-lg text-center">
                  {team.designation}
                </p>
                <div className="flex justify-between items-center bg-[#1A1A1A] mt-4 px-2 py-3 ps-6 border border-[#262626] rounded-full w-full">
                  <span className="text-sm"> Say Hello 👋</span>
                  <div>
                    <img
                      src="./message-button.png"
                      alt=""
                      className="w-12 md:w-8 h-12 md:h-8"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Our Clients */}
      <div className="flex flex-col md:px-8 py-4 md:py-10 w-full">
        <div className="mx-4 mt-6 mb-3 md:w-[85%]">
          <h3 className="font-semibold text-3xl md:text-5xl xl:text-6xl">
            Our Valued Clients
          </h3>
          <p className="my-6 font-medium text-gray-400 text-sm md:text-base xl:text-lg">
            At MyPoperty, we have had the privilege of working with a diverse
            range of clients across various industries. Here are some of the
            clients we've had the pleasure of serving
          </p>
        </div>

        <div className="md:flex px-4 py-3 w-full">
          <ClientCarousel />
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};

export default About;
