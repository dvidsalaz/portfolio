import fs from "node:fs/promises";
import path from "node:path";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { Math } from "@/components/math";

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
                href="/about"
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
            <h1 className=" motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md text-xl text-white">
              Hi, I&apos;m David. I&apos;m a finance & data analytics student.
            </h1>
            <CodeBlock
              lang="tsx"
              title="HTML"
              code={`<div className="bg-background text-foreground" />`}
            />
            <p className="">
              The Sharpe Ratio is defined as{" "}
              <Math latex="\frac{\mathbb{E}[R_p - R_f]}{\sigma(R_p - R_f)}" />{" "}
              and measures excess return per unit of risk.
            </p>
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
