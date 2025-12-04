import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className=" min-h-screen ">
      {/* Main Content */}

      <section
        id="home"
        className="  flex flex-col gap-8 p-6 sm:p-10 lg:p-20 lg:px-32 bg-wayneBlack min-h-screen "
      >
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
              href="/"
              className="hover:text-gray-300 hover:underline text-sm hover:text-SunsetOrange"
            >
              Projects
            </Link>
            <Link
              href="/"
              className="hover:text-gray-300 hover:underline text-sm hover:text-SunsetOrange"
            >
              About
            </Link>
            <Link
              href="/"
              className="hover:text-gray-300 hover:underline text-sm hover:text-SunsetOrange"
            >
              Contact
            </Link>
          </div>
        </nav>
        <Separator className=" bg-modernGray "></Separator>
        <div className=" flex flex-col gap-8 p-6 sm:p-10 lg:p-20 min-h-screen ">
          <h3 className=" text-2xl text-white">
            Hi, I&apos;m David. I&apos;m a finance & data analytics student.
          </h3>
        </div>
      </section>
      <section
        id="projects"
        className=" min-h-screen flex bg-quartzWhite sm:px-10 lg:px-32s lg:p-20
              gap-10"
      >
        <div className=" w-64 flex flex-col ">
          <p className="text-wayneBlack text-2xl">projects</p>
        </div>

        <div className="flex-1 flex gap-6">
          <div
            id="card"
            className="p-4 flex flex-col bg-wayneBlack text-white "
          >
            {/* replace with next/image */}
            <div className="h-40 mb-3 bg-neutral-700 rounded" />

            <div className="flex flex-col gap-1 text-sm">
              <p className=" uppercase tracking-wide text-neutral-400">
                Projects
              </p>
              <p className="font-medium">Portfolio Risk Engine</p>
              <p className="text-neutral-300">
                Advising corporations and institutions of all sizes on mergers
                and acquisitions, meeting the most complex strategic needs in
                local markets as well as on a global scale.
              </p>
              <p className="mt-2 underline cursor-pointer">View More</p>
            </div>
          </div>
          <div
            id="card"
            className="p-4 flex flex-col bg-wayneBlack text-white "
          >
            {/* replace with next/image */}
            <div className="h-40 mb-3 bg-neutral-700 rounded" />
            <div className="flex flex-col gap-1 text-sm">
              <p className=" uppercase tracking-wide text-neutral-400">
                Projects
              </p>
              <p className="font-medium">Portfolio Risk Engine</p>
              <p className="text-neutral-300">
                Advising corporations and institutions of all sizes on mergers
                and acquisitions, meeting the most complex strategic needs in
                local markets as well as on a global scale.
              </p>
              <p className="mt-2 underline cursor-pointer">View More</p>
            </div>
          </div>
        </div>
      </section>
      <Separator className=" bg-modernGray"></Separator>
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
              href="/resume"
            >
              Resume
            </Link>
          </nav>
          <div>
            <p className="text-white text-sm">&copy; 2025 David Salazar</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
