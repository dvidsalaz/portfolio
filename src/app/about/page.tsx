import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import ScrollObserver from "@/components/ui/scrollObserver";
import { CarouselPlugin } from "@/components/custom/CarouselPlugin";
import { CarouselContent } from "@/components/ui/carousel";

export default function Home() {
  return (
    <main className=" min-h-screen ">
      {/* Main Content */}
      <ScrollObserver>
        <section
          id="home"
          className="  flex flex-col gap-8 p-6 sm:p-10 lg:p-20 lg:px-52 bg-wayneBlack min-h-screen text-neutral-200 text-base sm:text-lg leading-relaxed antialiased "
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
          <div className=" flex flex-col gap-6 p-6 sm:p-10 lg:p-20 min-h-screen ">
            <div className=" flex flex-col gap-3">
              <h1 className=" motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md text-4xl text-white">
                Hi.
              </h1>
            </div>
            <div className=" flex flex-col gap-3">
              <p className=" text-neutral-300">
                I am{" "}
                <span className="text-orange-300 font-medium">
                  David Salazar
                </span>
                &mdash; or, as my parents would like me to introduce myself,
                David Agustin Salazar. I am a Finance student at{" "}
                <span className=" text-white font-medium">
                  The University of Texas at Dallas
                </span>{" "}
                with an expected graduation date of{" "}
                <span className=" text-white font-medium">May 2028</span>.
              </p>
              <p>
                My academic focus is{" "}
                <span className=" text-white font-medium">
                  financial analysis and risk modeling
                </span>{" "}
                with a particular emphasis on applying{" "}
                <span className=" text-white font-medium">
                  statistics, Python, and SQL
                </span>{" "}
                to understand returns, volatility, and decision-making under
                uncertainty.
              </p>
              <p>
                I primarily work with{" "}
                <span className=" text-white font-medium">
                  Python (Pandas, Matplotlib)
                </span>{" "}
                to analyze and visualize data in ways that clearly communicate
                trends and risks. When appropriate, I use{" "}
                <span className=" font-medium text-white">Tableau</span> for
                rapid prototyping of interactive dashboards.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-medium text-orange-300">
                Five Random Facts About Me:
              </p>

              <ol className="list-decimal list-outside pl-5 space-y-2">
                <li>
                  My favorite band is{" "}
                  <span className=" text-white font-medium">
                    Empire of the Sun
                  </span>{" "}
                  &mdash; seeing them live was my first concert experience. My
                  favorite song is{" "}
                  <span className=" italic ">
                    &quot;We Are The People.&quot;
                  </span>
                </li>
                <li>
                  I went{" "}
                  <span className=" text-white font-medium">skydiving</span> on
                  Galveston Island &mdash; an experience that reshaped my
                  perspective on risk beyond theory.
                </li>
                <li>
                  <span className=" text-white font-medium">Aviation</span>{" "}
                  &mdash; I plan to earn my pilot&apos;s license after I
                  graduate from college. In Spring 2025, I took my first
                  discovery flight.
                </li>
                <li>
                  I tend to perform best in uncomfortable scenarios, where deep
                  focus, adaptation, and decision-making are most crucial.
                </li>
                <li>
                  <span className=" text-white font-medium">Rock Climbing</span>{" "}
                  &mdash; I climb regularly with friends. Rock climbing keeps me
                  engaged in my free time through problem-solving, repeated
                  failure, and the drive to improve one attempt at a time.
                </li>
              </ol>
            </div>
            <div>
              <CarouselPlugin></CarouselPlugin>
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
