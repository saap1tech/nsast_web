import Image from 'next/image';
import Link from 'next/link';
<<<<<<< HEAD

=======
>>>>>>> parent of 847cc4f (added card in campus life)

export default function Header() {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        <Link href="/">
          <Image src="/nsast-logo.png" alt="NSAST" height={85} width={110} />
        </Link>
        <nav className="hidden md:flex space-x-6 text-[#20212A]">
        <Link href="/" className="group relative">
        <span className="text-gray-700 hover:text-blue-600">News</span>
        <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
      </Link>
      <Link href="/" className="group relative">
        <span className="text-gray-700 hover:text-blue-600">The School</span>
        <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
      </Link>
      <div className="relative group overflow-hidden">
      <Link href="/" className="relative">
        <span className="text-gray-700 hover:text-blue-600">
          Autonomechs-area
        </span>
        <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
      </Link>

      {/* Star container */}
      <div
        className="absolute inset-0 pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity duration-300"
        aria-hidden="true"
      >
        {[...Array(10)].map((_, index) => (
          <div color='blue'
            key={index}
            className={`star absolute bg-gradient-to-r from-blue-400 to-[#B6EBFF]-600 rounded-full`}
          ></div>
        ))}
      </div>
    </div>
      
      <Link href="library" className="group relative">
        <span className="text-gray-700 hover:text-blue-600">Library</span>
        <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
      </Link>
      <Link href="/" className="group relative">
        <span className="text-gray-700 hover:text-blue-600">Club</span>
        <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
      </Link>
      <Link href="/" className="group relative">
        <span className="text-gray-700 hover:text-blue-600">Something</span>
        <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
      </Link>
      <Link href="/" className="group relative">
        <span className="text-gray-700 hover:text-blue-600">Contact Us</span>
        <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
      </Link>
        </nav>
        <div className="flex space-x-4">
<<<<<<< HEAD
        <button className="hidden md:inline border-[#3A91E2] border-[1.5px] text-[#3A91E2] font-semibold px-6 py-2 rounded-2xl transition-shadow duration-300 hover:shadow-[0_0_15px_#3A91E2]">
          Sign-up
        </button>
        <Link href="auth">
        <button className="hidden md:inline bg-[#3A91E2] text-white font-semibold px-6 py-2 rounded-2xl transition-shadow duration-300 hover:shadow-[0_0_15px_#3A91E2]">
           Log-in
        </button>
        </Link>


=======
        <button className="hidden md:inline border-[#3A91E2] border-[1.5px] text-[#3A91E2] font-semibold px-6 py-2 rounded-2xl">English</button>
        <button className="hidden md:inline bg-[#3A91E2] text-white font-semibold px-6 py-2 rounded-2xl">Platform</button>
>>>>>>> parent of 847cc4f (added card in campus life)
        </div>
      </div>
    </header>
  );
}
