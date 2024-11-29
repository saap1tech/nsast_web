'use client'
import { redirect } from 'next/navigation'
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from './page.module.css'
import {projects} from './src/data';
import Card from './components/Card';
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter();
  
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="text-center py-52 px-40">
          <h1 className="text-4xl font-bold text-gray-800">
            Cultivating Technological Leaders Through{" "}
            <span className="text-[#3A91E2]">Advanced Research</span>,
            Collaboration, and{" "}
            <span className="text-[#3A91E2]">Education </span>Excellence
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Join a dynamic program that leads the future of autonomous systems
            engineering. Our hands-on approach combines cutting-edge research,
            state-of-the-art labs, and real-world projects to equip you with the
            skills to design, build, and innovate autonomous technologies
          </p>
          <div className="flex justify-center space-x-4 mt-8">
            <button className="text-[#20212A] text-sm font-bold px-4 py-2 rounded-xl border-[1.42px] border-[#20212A] hover:bg-white-100">
              Log in to Your account
            </button>
            <button className="text-[#20212A] text-sm font-bold px-4 py-2 rounded-xl border-[1.42px] border-[#20212A] hover:bg-white-100">
              Discover More
            </button>
          </div>
        </section>

        <section className="flex flex-col md:flex-row py-16 shadow-md px-8 md:px-16">
          <div className="md:w-1/2 p-4">
            <img
              src="/school.jpg"
              alt="School Image"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-4xl font-bold text-[#7AB3E1]">Description</h2>
            <p className="text-gray-600 text-2xl mt-4">
              Explore the cutting-edge world of innovation at The national
              school of autonomous systems in our introductory video! Get an
              inside look at our state-of-the-art campus, advanced labs, and the
              diverse subjects we offer, from engineering and computer science
              to autonomous systems and technology leadership. Discover how we
              equip students with the skills and knowledge to thrive in the
              rapidly evolving fields of technology
            </p>
            <a href="e-hub" className="text-[#3A91E2] mt-4 inline-block">
              Learn More About Us &rarr;
            </a>
          </div>
        </section>

        <section className="bg-gray-900 text-white py-16 px-8">
          <h2 className="text-3xl text-center font-bold">About The School</h2>
          <p className="mt-4 text-center max-w-2xl mx-auto">
              The National Higher School of Autonomous Systems is an institution
              of excellence dedicated to the education and training of engineers
              specializing in robotics and Autonomous systems. Our mission is to
              equip future professionals with the skills to design, develop, and
              implement intelligent autonomous solutions across a range of
              sectors, including manufacturing, transportation, healthcare, and
              energy. By fostering a deep understanding of autonomous systems,
              control algorithms, and hardware integration, our graduates will
              contribute to the scientific  advancement and technological
              innovation driving Algeria's s socio-economic development.
            </p>

        </section>

        <section className="px-8 py-16">
  <h2 className="text-4xl font-bold text-gray-800 mb-6">News</h2>
  <p className="text-gray-600 mb-12">
    Where we share the latest updates, breakthroughs, and achievements
  </p>

  <div className="flex justify-center mb-8 space-x-4">
    {[
      "Announcement",
      "Clubs",
      "Recruitments",
      "Administration",
      "Professors",
      "Students",
    ].map((category) => (
      <button
        key={category}
        className="px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 hover:shadow-[0_0_10px_#3A91E2] transition-shadow duration-300"
      >
        {category}
      </button>
    ))}
  </div>

  <div className="flex flex-wrap justify-center gap-8">
    {[
      {
        title: "Welcome to Our New Batch of Students!",
        content:
          "We are excited to welcome our newest group of students for the 2024 academic year! Get ready for an exciting journey into the world of robotics and embedded systems.",
        linkText: "Read More →",
        width: "w-[33%]",
      },
      {
        title: "Students Organize Robotics Hackathon",
        content:
          "Our students are hosting a 48-hour robotics hackathon this weekend! Teams will compete to create the most innovative autonomous systems—don't miss it!",
        linkText: "Read More →",
        width: "w-[62%]",
      },
      {
        title:
          "Professor Random Publishes New Paper on Advanced Robotics Control Systems",
        content:
          "Congratulations to Professor Hamid for his latest publication in the Journal of Autonomous Systems. His research on advanced control algorithms is set to make waves in the field of robotics!",
        linkText: "Read More →",
        width: "w-[62%]",
      },
      {
        title: "New Administrative Office Hours Announced",
        content:
          "The school administration has updated its office hours to better serve students and faculty. The office will now be open from 8 AM to 6 PM, Monday through Friday, to assist with all administrative needs, including enrollment and academic advising.",
        linkText: "Read More →",
        width: "w-[33%]",
      },
    ].map((card, index) => (
      <div
        key={index}
        className={`bg-[#F5F5F5] py-8 px-6 rounded-[44px] shadow-md ${card.width} flex flex-col justify-center transition-all duration-500 hover:scale-105 hover:shadow-[0_0_15px_#3A91E2] hover:translate-y-[-5px]`}
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



        <section className="py-16 px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800">Campus Life</h2>
          <p className="text-gray-600 mt-4">
            Experience vibrant campus life where innovation meets community!
            Beyond academics, our campus offers a rich environment for personal
            growth and collaboration. With state-of-the-art facilities, student
            clubs
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
