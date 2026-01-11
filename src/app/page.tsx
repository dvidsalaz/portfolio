import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import ScrollObserver from "@/components/ui/scrollObserver";

export default function Home() {
  return (
    <main className=" min-h-screen ">
      {/* Main Content */}
      <ScrollObserver>
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
            <h3 className=" motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md text-xl text-white">
              Hi, I&apos;m David. I&apos;m a finance & data analytics student.
            </h3>
          </div>
        </section>
        <section
          id="projects"
          className=" p-6 min-h-screen sm:p-10 lg:p-20 flex bg-quartzWhite lg:px-32 
              gap-10"
        >
          <div className=" flex flex-col ">
            <p className="text-wayneBlack text-2xl intersect:motion-preset-fade-lg">
              projects
            </p>
          </div>

          <div className="flex-1 flex gap-6 ">
            <div
              id="card"
              className=" rounded-t-3xl p-3 sm:p-4 lg:p-8 flex flex-col bg-wayneBlack text-white intersect-once intersect:motion-preset-slide-up motion-delay-100  "
            >
              <div className=" flex flex-col gap-5">
                <div className=" relative w-full h-96 overflow-hidden">
                  <Image
                    src="/images/egypt3.jpg"
                    alt="A flexible image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <div id="text-space" className="  flex flex-col  gap-1 text-sm">
                  <p className=" uppercase tracking-wide text-neutral-400">
                    Projects
                  </p>
                  <p className="font-medium">Portfolio Risk Engine</p>
                  <p className="text-neutral-300">
                    A Python-based portfolio analytics engine that computes
                    expected return, variance, standard deviation, covariance
                    matrices, and decomposes total risk into systematic vs.
                    idiosyncratic components using CAPM-based logic.
                  </p>
                  <p className="mt-2 underline cursor-pointer">View More</p>
                </div>
              </div>
            </div>
            <div
              id="card"
              className=" rounded-t-3xl p-3 sm:p-4 lg:p-8 flex flex-col bg-wayneBlack text-white intersect-once intersect:motion-preset-slide-up motion-delay-200  "
            >
              <div className=" flex flex-col gap-5">
                <div className=" relative w-full h-96 overflow-hidden">
                  <Image
                    src="/images/egypt2.jpg"
                    alt="A flexible image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <div id="text-space" className="  flex flex-col  gap-1 text-sm">
                  <p className=" uppercase tracking-wide text-neutral-400">
                    Projects
                  </p>
                  <p className="font-medium">Portfolio Risk Engine</p>
                  <p className="text-neutral-300">
                    A Python-based portfolio analytics engine that computes
                    expected return, variance, standard deviation, covariance
                    matrices, and decomposes total risk into systematic vs.
                    idiosyncratic components using CAPM-based logic.
                  </p>
                  <Link
                    className="mt-2 underline cursor-pointer"
                    href="/risk-engine"
                  >
                    View More
                  </Link>
                </div>
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
      </ScrollObserver>
    </main>
  );
}
