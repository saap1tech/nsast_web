import Image from "next/image";
import Link from "next/link"; // Ensure proper import for Next.js Link

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <Image src="/nsast-white.png" alt="NSAST" height={220} width={260} />
          </div>

          {/* Follow Us Section */}
          <div>
            <h2 className="text-lg font-bold">Follow Us</h2>
            <ul className="flex flex-col space-y-2 mt-2">
              <li>
                <a href="#" className="text-sm relative group">
                  Facebook
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#" className="text-sm relative group">
                  Twitter
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#" className="text-sm relative group">
                  LinkedIn
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Helpful Links Section */}
          <div>
            <h2 className="text-lg font-bold">Helpful Links</h2>
            <ul className="space-y-2 mt-2">
              <li>
                <a href="#" className="text-sm relative group">
                  News
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#" className="text-sm relative group">
                  Scholarships
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <Link href="#" className="text-sm relative group">
                  Conferences
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts Section */}
          <div>
            <h2 className="text-lg font-bold">Contacts</h2>
            <address className="text-sm not-italic mt-2">
              Email:{" "}
              <a href="mailto:contact@nsast.edu" className="text-blue-500 hover:underline">
                contact@nsast.edu
              </a>
              <br />
              Phone: +123 456 789
            </address>
          </div>
        </div>

        {/* Copyright Notice */}
        <p className="text-center text-xs mt-4">
          © 2025 NSAST - All rights reserved.
        </p>
      </div>
    </footer>
  );
}