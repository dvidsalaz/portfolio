import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" min-h-screen">
      {/* Main Content */}
      <section
        id="projects"
        className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src="/videos/watch.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className=" text-sm sm:text-base lg:text-lg relative z-10 flex items-center justify-center flex-col">
          <h1 className=" font-light text-white">Finance Student</h1>
          <h1 className=" text-6xl font-light">DAVID A. SALAZAR</h1>
          <h1 className=" font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </h1>
        </div>
      </section>
      <section className=" flex flex-col gap-8 p-6 sm:p-10 lg:p-20 bg-white min-h-screen">
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-sm sm:text-base lg:text-lg text-black">
            Welcome to Next.js
          </h1>
        </div>
      </section>
      <section className=" flex flex-col gap-8 p-6 sm:p-10 lg:p-20 bg-black min-h-screen ">
        <div className="relative flex min-h-screen flex-col ">
          <header>
            <div className="flex-col items-center justify-center h-screen">
              <div className="flex items-center border-2 border-red-500 justify-center padding">
                <span className=" border-2 border-red-500">
                  <Image
                    src="/images/DSLogo.svg"
                    alt="logo"
                    width="36"
                    height="36"
                  />{" "}
                </span>
                <h1 className="text-4xl border-2 border-purple-500 font-light text-white">
                  DAVID A. SALAZAR
                </h1>
              </div>
              <h1 className="text-3xl font-">Welcome to Next.js</h1>
            </div>
          </header>
        </div>
      </section>
      <footer className="flex flex-col gap-8 bg-bronzeOrange p-6 sm:p-10 lg:p-20 items-center text-center">
        <div className=" flex flex-col lg:flex-row items-center gap-8 justify-between w-full ">
          <nav className="text-white flex gap-4 items-center text-sm sm:text-base lg:text-lg">
            <Link className=" hover:text-gray-300 hover:underline" href="/team">
              Our Team
            </Link>
            <Link
              className=" hover:text-gray-300 hover:underline"
              href="/services"
            >
              Our Services
            </Link>
            <Link
              className=" hover:text-gray-300 hover:underline"
              href="/portfolio"
            >
              Our Portfolio
            </Link>
          </nav>
          <div>
            <p className="text-white text-sm sm:text-base lg:text-lg text-center">
              Copyright &copy; 2024 LP Exteriors LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
