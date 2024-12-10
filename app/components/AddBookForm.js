"use client";

import { useState } from "react";

export default function AddBookForm({ onBookAdded }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Input validation (optional)
    if (!title || !author || !image) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, author, image }),
      });

      if (!res.ok) {
        throw new Error("Failed to add book.");
      }

      const newBook = await res.json();
      onBookAdded(newBook); // Notify parent component
      setTitle("");
      setAuthor("");
      setImage("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5 bg-gray-100 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Add a New Book</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter book title"
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter author name"
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Image URL:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter image URL"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`p-2 text-white rounded ${loading ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"}`}
      >
        {loading ? "Adding..." : "Add Book"}
      </button>
    </form>
  );
}
