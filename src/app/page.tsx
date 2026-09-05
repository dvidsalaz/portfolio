import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import ScrollObserver from "@/components/ui/scrollObserver";
import MyNavigation from "@/components/custom/customNavigation";
import { MyFooter } from "@/components/custom/customFooter";
import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <main className=" min-h-screen ">
      {/* Main Content */}
      <ScrollObserver>
        <section
          id="home"
          className=" flex flex-col gap-8 p-6 sm:p-10 lg:p-20 lg:px-32 bg-wayneBlack text-base sm:text-lg min-h-screen "
        >
          <MyNavigation></MyNavigation>
          <Separator className=" bg-modernGray "></Separator>
          <div className=" flex flex-col gap-6 p-6 sm:p-10 lg:p-20 min-h-screen ">
            <h1 className=" text-3xl motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md text-white">
              Hi, I&apos;m David.
            </h1>
            <p className=" text-neutral-300">
              I&apos;m a junior finance student focused on
              <span className=" text-red-300"> market risk</span> and
              <span className=" text-red-300"> risk analysis </span>, blending
              institutional data with applied statistics. Get to know me more{" "}
              {""}
              <Link
                className="mt-2 underline hover:text-orange-300 cursor-pointer"
                href="/about"
              >
                here.
              </Link>
            </p>
            <div className="absolute bottom-10 inset-x-0 flex justify-center">
              <a
                href="#projects"
                className=" absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-400 hover:text-white transition-colors animate-bounce"
                aria-label="Scroll to projects"
              >
                <ChevronDown size={28} />
              </a>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className=" flex flex-col md:flex-row p-6 min-h-screen sm:p-10 lg:p-20 bg-quartzWhite lg:px-32
              gap-10"
        >
          <div className=" flex">
            <p className="text-wayneBlack text-2xl intersect:motion-preset-fade-lg">
              projects
            </p>
          </div>

          <div className="flex-1 flex flex-col md:flex-row gap-6 items-stretch ">
            <div
              id="card"
              className=" rounded-t-3xl p-3 sm:p-4 lg:p-8 flex flex-col bg-wayneBlack text-white intersect-once intersect:motion-preset-slide-up motion-delay-100 flex-1  "
            >
              <div className=" flex flex-col gap-5 h-full">
                <div className=" relative w-full h-96 overflow-hidden shrink-0">
                  <Image
                    src="/images/egypt3.jpg"
                    alt="Placeholder for upcoming project"
                    fill
                    className=" object-cover opacity-60"
                  />
                </div>

                <div id="text-space" className="  flex flex-col  gap-1 text-sm">
                  <p className=" uppercase tracking-wide text-neutral-400">
                    Projects
                  </p>
                  <p className="font-medium">Fixed Income & Credit Analysis</p>
                  <p className="text-neutral-300">
                    Duration, key rate duration, and credit spread modeling —
                    coming soon.
                  </p>
                  <p className="mt-2 text-neutral-500 italic cursor-default">
                    In progress
                  </p>
                </div>
              </div>
            </div>
            <div
              id="card"
              className=" rounded-t-3xl p-3 sm:p-4 lg:p-8 flex flex-col bg-wayneBlack text-white intersect-once intersect:motion-preset-slide-up motion-delay-150 flex-1  "
            >
              <div className=" flex flex-col gap-5 h-full">
                <div className=" relative w-full h-96 overflow-hidden shrink-0">
                  <Image
                    src="/images/egypt2.jpg"
                    alt="A flexible image"
                    fill
                    className=" object-cover"
                  />
                </div>

                <div id="text-space" className="  flex flex-col  gap-1 text-sm">
                  <p className=" uppercase tracking-wide text-neutral-400">
                    Projects
                  </p>
                  <p className="font-medium">Portfolio Risk Engine</p>
                  <p className="text-neutral-300">
                    A Python-based risk engine computing VaR, CVaR, Sharpe
                    ratio, beta, and stress-tested portfolio risk using
                    institutional-grade LSEG data.
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
        <MyFooter></MyFooter>
      </ScrollObserver>
    </main>
  );
}
