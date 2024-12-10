let books = []; // Simulate a database

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(books);
  } else if (req.method === "POST") {
    const { title, author, image } = req.body;

    if (!title || !author || !image) {
      res.status(400).json({ error: "All fields are required" });
      return;
    }

    const newBook = {
      id: books.length + 1,
      title,
      author,
      image,
    };

    books.push(newBook);
    res.status(201).json(newBook);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
