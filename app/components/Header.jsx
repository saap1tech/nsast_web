import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        <Link href="/">
          <Image src="/nsast-logo.png" alt="NSAST" height={85} width={110} />
        </Link>
        <nav className="hidden md:flex space-x-6 text-[#20212A]">
          <Link href="/">News</Link>
          <Link href="/">The School</Link>
          <Link href="/">Research</Link>
          <Link href="/">Library</Link>
          <Link href="/">Campus Life</Link>
          <Link href="/">Cooperation</Link>
          <Link href="/">Contact Us</Link>
        </nav>
        <div className="flex space-x-4">
        <button className="hidden md:inline border-[#3A91E2] border-[1.5px] text-[#3A91E2] font-semibold px-6 py-2 rounded-2xl">English</button>
        <button className="hidden md:inline bg-[#3A91E2] text-white font-semibold px-6 py-2 rounded-2xl">Platform</button>
        </div>
      </div>
    </header>
  );
}
