import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Library() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="p-5">
          <section className="bg-[#ECEFF5] rounded-3xl mx-10 p-4">
            <div className="flex items-center justify-between">
              <div className="text-xl font-extrabold text-black">Recommended</div>
              <a href="#" className="text-blue-500 hover:underline">
                See All
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="bg-white rounded-lg shadow">
                <img
                  src="https://example.com/book1.jpg"
                  alt="Book 1"
                  className="rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">
                    Mathématiques: Exercices incontournables
                  </h3>
                  <p className="text-gray-600">julien freison</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow">
                <img
                  src="https://example.com/book2.jpg"
                  alt="Book 2"
                  className="rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">
                    Mathématiques: Exercices incontournables
                  </h3>
                  <p className="text-gray-600">julien freison</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow">
                <img
                  src="https://example.com/book3.jpg"
                  alt="Book 3"
                  className="rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">
                    Mathématiques: Exercices incontournables
                  </h3>
                  <p className="text-gray-600">julien freison</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow">
                <img
                  src="https://example.com/book4.jpg"
                  alt="Book 4"
                  className="rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">
                    Mathématiques: Exercices incontournables
                  </h3>
                  <p className="text-gray-600">julien freison</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}
