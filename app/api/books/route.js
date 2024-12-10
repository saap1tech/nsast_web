import { NextResponse } from "next/server";

const books = [
  { id: 1, title: "INVISIBLE", author: "Philip Ball", image: "David Drummond _ covers.jpeg" },
  { id: 2, title: "VISIBLE", author: "John Doe", image: "David Drummond _ covers.jpeg" },
];

export async function GET() {
  return NextResponse.json(books);
}

export async function POST(request) {
  const body = await request.json();
  const newBook = { id: books.length + 1, ...body };
  books.push(newBook); // Simulate adding to a database
  return NextResponse.json(newBook, { status: 201 });
}
