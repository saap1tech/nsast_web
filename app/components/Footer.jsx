"use client"
import Link from 'next/link';
import Image from "next/image";

import { Fragment, useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the year when the component mounts
    setYear(new Date().getFullYear());}, []);
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0">
            <div className="flex flex-col">
            <Image src="/nsast-white.png" alt="NSAST" height={220} width={260} />
            </div>
            <div>
              <h2 className="text-lg font-bold">Follow Us</h2>
              <div className="flex flex-col space-y-4">
  <ul>
    <a href="#" className="text-sm relative group">
      Facebook
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
    </a>
  </ul>
  <ul>
    <a href="#" className="text-sm relative group">
      Twitter
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
    </a>
  </ul>
  <ul>
    <a href="#" className="text-sm relative group">
      LinkedIn
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
    </a>
  </ul>
</div>

            </div>
            <div>
  <h2 className="text-lg font-bold">Helpful Links</h2>
  <ul className="space-y-1 text-sm">
    <ul>
      <a href="#" className="relative group">
        News
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
      </a>
    </ul>
    <li>
      <a href="#" className="relative group">
        Scholarships
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
      </a>
    </li>
    <li>
      <Link href= "#" className="relative group">
        Conferences
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
      </Link>
    </li>
  </ul>
</div>

<div>
  <h2 className="text-lg font-bold">Contacts</h2>
  <address className="text-sm not-italic">
    Email: <a href="mailto:contact@nsast.edu" className="text-blue-500 hover:underline">contact@nsast.edu</a><br />
    Phone: +123 456 789
  </address>
</div>

          </div>
          
          <Fragment>
          <div className="pt-lg-10 pt-5 footer text-center">
       
          <p>{`© ${year} NSAST. All Rights Reserved.`}</p>
        
        </div>
    </Fragment>
        </div>
      </footer>
    );
  }