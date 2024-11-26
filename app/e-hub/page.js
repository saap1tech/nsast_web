import Header from "../components/Header";
import Footer from "../components/Footer";

export default function EHub() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Welcome to the Online Learning Hub
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Explore the cutting-edge courses designed to advance your knowledge
            and skills
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Human Engineering Course",
                icon: "HUMAN ENGINEERING",
                duration: "2h 30min",
                date: "20-10-2024",
                files: "10 Files",
                students: "1st Year",
              },
              {
                title: "Economy Course",
                icon: "ECONOMY COURSE",
                duration: "2h 30min",
                date: "20-10-2024",
                files: "10 Files",
                students: "1st Year",
              },
              {
                title: "English Course",
                icon: "ENGLISH COURSE",
                duration: "2h 30min",
                date: "20-10-2024",
                files: "10 Files",
                students: "1st Year",
              },
              {
                title: "French Course",
                icon: "FRENCH COURSE",
                duration: "2h 30min",
                date: "20-10-2024",
                files: "10 Files",
                students: "1st Year",
              },
            ].map((course, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center gap-6"
              >
                <div className="w-32 h-32 bg-[#20212A] flex items-center justify-center rounded-2xl">
                  <span className="text-sm font-bold text-white text-center">
                    {course.icon.split(" ")[0]}
                    <br />
                    {course.icon.split(" ")[1]}
                  </span>
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {course.title}
                  </h3>
                  <ul className="text-sm text-gray-600 mb-6">
                    <li className="flex items-center mb-1">
                      <span className="mr-2">⏱</span>
                      Duration: {course.duration}
                    </li>
                    <li className="flex items-center mb-1">
                      <span className="mr-2">📅</span>
                      Date: {course.date}
                    </li>
                    <li className="flex items-center mb-1">
                      <span className="mr-2">📂</span>
                      Attached files: {course.files}
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">👥</span>
                      Students: {course.students}
                    </li>
                  </ul>
                  <div className="w-full flex justify-end">
                  <button className="flex items-center justify-center gap-2 w-[55%] p-2 text-center text-white bg-[#20212A] rounded-[0.65rem] font-medium text-sm hover:bg-[#20212A]/80">
                    Watch Course
                  </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
