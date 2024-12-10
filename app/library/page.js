"use client"
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddBookForm from "../components/AddBookForm";

export default function Library() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch books from the API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("/api/books");
        if (!res.ok) {
          throw new Error("Failed to fetch books");
        }
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Handler to add a new book to the state
  const handleBookAdded = (newBook) => {
    setBooks((prevBooks) => [newBook, ...prevBooks]);
  };

  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="p-5">
          <section className="bg-[#ECEFF5] rounded-3xl mx-10 p-4">
            
            <div className="flex items-center justify-between">
              <div className="text-2xl font-extrabold text-black">Recommended</div>
              <a
                href="#"
                className="text-blue-500 relative hover:underline hover:no-underline"
              >
                <span className="after:block after:h-[2px] after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                  See All
                </span>
              </a>
            </div>
            {loading ? (
              <p className="text-center mt-4 text-gray-500">Loading...</p>
            ) : books.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {books.map((book) => (
                  <div key={book.id} className="bg-white rounded-lg shadow">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="rounded-t-lg"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-black">
                        {book.title}
                      </h3>
                      <p className="text-gray-600">{book.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center mt-4 text-gray-500">
                No books available.
              </p>
            )}
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}
