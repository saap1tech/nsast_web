import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Mock database (replace with a real DB in production)
let users = [
  { id: 1, email: "test@example.com", password: "$2b$10$7uXZvVgtOjL4brPZx6mNKeh.IffOjq9oYyb2x59UJKZ3k3OgK0K.C" }, // Hashed password for "password123"
];

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Find user by email
    const user = users.find((u) => u.email === email);
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Validate password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate token
    const token = jwt.sign({ id: user.id, email: user.email }, "your_secret_key", { expiresIn: "1h" });

    res.status(200).json({ token });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
