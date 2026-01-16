import Link from "next/link";

const MyNavigation = () => {
  return (
    <nav className=" flex items-center justify-between">
      <Link href="/"></Link>
      <div className="text-white hidden sm:flex gap-6">
        <Link
          href="/"
          className="hover:text-gray-300 hover:underline text-sm hover:text-SunsetOrange"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="hover:text-gray-300 hover:underline text-sm hover:text-SunsetOrange"
        >
          Projects
        </Link>
        <Link
          href="/about"
          className="hover:text-gray-300 hover:underline text-sm hover:text-SunsetOrange"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="hover:text-gray-300 hover:underline text-sm hover:text-SunsetOrange"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default MyNavigation;
