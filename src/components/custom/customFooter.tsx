import Link from "next/link";

export const MyFooter = () => {
  return (
    <footer className=" lg:px-32 flex flex-col md:flex-row gap-8 bg-bronzeOrange p-6 sm:p-10 lg:p-20 items-center text-center ">
      <div className=" flex flex-col md:flex-row items-center gap-8 justify-between w-full text-sm">
        <nav className="text-white flex gap-4 items-center ">
          <Link
            className=" hover:text-gray-300 hover:underline"
            href="mailto:das240008@utdallas.edu"
          >
            Email
          </Link>
          <Link
            className=" hover:text-gray-300 hover:underline"
            href="https://www.linkedin.com/in/dvidsalaz/"
          >
            LinkedIn
          </Link>
          <Link
            className=" hover:text-gray-300 hover:underline"
            href="https://github.com/dvidsalaz"
          >
            Github
          </Link>
          <Link
            className=" hover:text-gray-300 hover:underline"
            href="/DSALAZAR_RESUME_Q3.pdf"
            target="_blank"
          >
            Resume
          </Link>
        </nav>
        <div>
          <p className="text-white text-sm">&copy; 2025 David Salazar</p>
        </div>
      </div>
    </footer>
  );
};
