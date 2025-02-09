import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from './page.module.css'
import {projects} from './src/data';
import Card from './components/Card';


export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <div className="relative">
          <section className="text-center py-52 px-40">
            <h1 className="text-4xl font-bold text-gray-800">
              Cultivating Technological Leaders Through{' '}
              <span className="text-[#3A91E2]">Advanced Research</span>,
              Collaboration, and{' '}
              <span className="text-[#3A91E2]">Education</span> Excellence
            </h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s...
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <button className="hidden md:inline border-[#20212A] border-[1.5px] px-6 py-2 rounded-2xl font-semibold transition-shadow duration-300 hover:shadow-[0_0_15px_#20212A]">
                Log in to Your Account
              </button>
              <button className="hidden md:inline border-[#20212A] border-[1.5px] px-6 py-2 rounded-2xl font-semibold transition-shadow duration-300 hover:shadow-[0_0_15px_#20212A]">
                Discover More
              </button>
            </div>
            <BlurryBlob
              firstBlobColor="bg-[#07BEB8]"
              secondBlobColor="bg-[#07BEB8]"
              className="absolute top-0 right-0 w-[200px] h-[300px]"
            />
          </section>
        </div>

        {/* About Section */}
        <section className="py-52 px-40">
          <h1 className="text-4xl font-bold text-gray-800">
            About the School
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            The National Higher School of Autonomous Systems is an institution
            of excellence dedicated to the education and training of engineers
            specializing in robotics and autonomous systems.
          </p>
        </section>

        {/* Image + Description Section */}
        <section className="flex flex-col md:flex-row py-16 shadow-md px-8 md:px-16">
          <div className="md:w-1/2 p-4">
            <img
              src="/school.jpg"
              alt="School Image"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-bold text-[#7AB3E1]">Description</h2>
            <p className="text-gray-600 text-2xl mt-4">
              Explore the cutting-edge world of innovation at The national
              school of autonomous systems in our introductory video! Get an
              inside look at our state-of-the-art campus, advanced labs, and the
              diverse subjects we offer, from engineering and computer science
              to autonomous systems and technology leadership. Discover how we
              equip students with the skills and knowledge to thrive in the
              rapidly evolving fields of technology
            </p>
            <a href="#" className="text-[#3A91E2] mt-4 inline-block">
              Learn More About Us &rarr;
            </a>
          </div>
        </section>

        {/* News Section */}
        <section className="px-8 py-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 relative pl-[6px] after:content-[''] after:block after:h-1 after:bg-[#3A91E2] after:rounded-full after:w-16 after:mt-2">
            News
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Where we share the latest updates, breakthroughs, and achievements.
          </p>
          <div className="flex justify-center mb-8 space-x-4">
            {['Announcement', 'Clubs', 'Recruitments', 'Administration', 'Professors', 'Students'].map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 hover:shadow-[0_0_10px_#3A91E2] transition-shadow duration-300"
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Welcome to Our New Batch of Students!',
                content:
                  'We are excited to welcome our newest group of students for the 2024 academic year...',
                linkText: 'Read More →',
              },
              {
                title: 'Students Organize Robotics Hackathon',
                content:
                  'Our students are hosting a 48-hour robotics hackathon this weekend...',
                linkText: 'Read More →',
              },
              {
                title: 'Professor Random Publishes New Paper on Advanced Robotics Control Systems',
                content:
                  'Congratulations to Professor Hamid for his latest publication...',
                linkText: 'Read More →',
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-[#F5F5F5] py-8 px-6 rounded-[44px] shadow-md flex flex-col justify-center transition-all duration-500 hover:scale-105 hover:shadow-[0_0_15px_#3A91E2] hover:translate-y-[-5px]"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.content}</p>
                <a
                  href="#"
                  className="text-[#3A91E2] font-semibold hover:underline transition-colors duration-300"
                >
                  {card.linkText}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Campus Life Section */}
        <section className="py-16 px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800">Campus Life</h2>
          <p className="text-gray-600 mt-4">
            Experience vibrant campus life where innovation meets community!
          </p>
          
          <main className={styles.main}>

      {

        projects.map( (project, i) => {

          return <Card key={`p_${i}`} {...project} i={i}/>

        })

      }

    </main>
        </section>
      </main>
      <Footer />
    </>
  );
}