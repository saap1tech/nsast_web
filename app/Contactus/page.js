import Card from "../components/Card";
import Header from "/app/components/Header";
import Footer from "/app/components/Footer";
import BlurryBlob from "/app/components/animata/background/blurry-blob";

export default function Home() {
  const cards = [
    {
      image: "/abdellah.jpg",
      title: "SEBTI Abdellah",
      description: "Project Owner",
      buttonText: "Follow",
      link="https://example.com",
    },
    {
      image: "/abdellah.jpg",
      title: "MAZIGHI Ayoub",
      description: "BACKEND developer",
      buttonText: "Follow",
      link:"https://example.com",
    },
    {
      image: "/abdellah.jpg",
      title: "SARAH",
      description: "AUTONOMECH AREA",
      buttonText: "Follow",
      link: "https://example.com",
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="text-center py-16 px-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Meet ECLYPSA TEAM With <span className="text-blue-500">AUTONOMECH AREA!</span>
          </h1>

          <BlurryBlob
            firstBlobColor="bg-blue-200"
            secondBlobColor="bg-blue-400"
            className="absolute top-10 right-0 w-[200px] h-[300px]"
          />

<div className="ml-10 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
              <Card
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

