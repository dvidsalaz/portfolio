import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import ScrollObserver from "@/components/ui/scrollObserver";
import MyNavigation from "@/components/custom/customNavigation";

export default function Home() {
  return (
    <main className=" min-h-screen ">
      {/* Main Content */}
      <ScrollObserver>
        <section
          id="home"
          className="  flex flex-col gap-8 p-6 sm:p-10 lg:p-20 lg:px-32 bg-wayneBlack min-h-screen text-neutral-200 text-base sm:text-lg leading-relaxed antialiased "
        >
          <MyNavigation></MyNavigation>
          <Separator className=" bg-modernGray "></Separator>
          <div className=" flex flex-col gap-6 p-6 sm:p-10 lg:p-20 min-h-screen ">
            <div className=" flex flex-col gap-3">
              <h1 className=" motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md text-4xl text-white">
                Contact Information
              </h1>
            </div>
            <div className=" flex flex-col gap-3">
              <p className=" text-neutral-300">
                Contact me at{" "}
                <span>
                  <Link
                    className=" hover:text-orange-300 hover:underline"
                    href="mailto:das240008@utdallas.edu"
                  >
                    das240008@utdallas.edu
                  </Link>
                </span>{" "}
                {""}
                or connect with me on {""}
                <span>
                  <Link
                    className=" underline text-red-300"
                    href="https://www.linkedin.com/in/dvidsalaz/"
                  >
                    LinkedIn
                  </Link>
                </span>
                .
              </p>
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
