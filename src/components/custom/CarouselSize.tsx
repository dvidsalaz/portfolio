"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import Image from "next/image";
import { Separator } from "../ui/separator";
import Link from "next/link";

export function CarouselSize() {
  return (
    <Carousel className="w-full">
      <CarouselContent className="">
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
          <Card className="flex flex-col bg-cloudyGray flex-1 rounded-none border-none">
            <div className=" relative w-full h-96 overflow-hidden ">
              <Image
                src="/images/quadcopter.jpg"
                alt="A flexible image"
                layout="fill"
                objectFit="cover"
                loading="eager"
              />
            </div>
            <Separator className=" bg-SunsetOrange p-1"></Separator>

            <div
              id="text-space"
              className="flex flex-col items-center justify-center text-center gap-5 p-3 sm:p-5 lg:p-10 h-[350px]"
            >
              <h3 className=" text-2xl lg:text-3xl text-WayneBlack underline">
                Drone Inspection Services
              </h3>
              <p className=" flex-1 text-lg lg:text-xl">
                Missing shingles, hidden leaks—LP offers professional drone
                inspection services to assess roof damage with precision,
                keeping your home protected from the top down.
              </p>
              <Link href="/drone-services">
                <Button className="text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                  LEARN MORE
                  <Image
                    src="/images/arrow-up-right.svg"
                    alt="arrow"
                    width={24}
                    height={24}
                  />
                </Button>
              </Link>
            </div>
          </Card>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
          <Card className="flex flex-col bg-cloudyGray flex-1 rounded-none border-none">
            <div className=" relative w-full h-96 overflow-hidden ">
              <Image
                src="/images/stormDamage.svg"
                alt="A flexible image"
                layout="fill"
                objectFit="cover"
                loading="eager"
              />
            </div>
            <Separator className=" bg-SunsetOrange p-1"></Separator>

            <div
              id="text-space"
              className="flex flex-col items-center justify-center text-center gap-5 p-3 sm:p-5 lg:p-10 h-[350px]"
            >
              <h3 className=" text-2xl lg:text-3xl text-WayneBlack underline">
                Storm Damage Repair
              </h3>
              <p className=" flex-1 text-lg lg:text-xl">
                Wind damage, hail damage, we&apos;ve seen it before. LP offers
                comprehensive storm damage repair services to get your roof back
                in shape.
              </p>
              <Link href="/storm-damage">
                <Button className="text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                  LEARN MORE
                  <Image
                    src="/images/arrow-up-right.svg"
                    alt="arrow"
                    width={24}
                    height={24}
                  />
                </Button>
              </Link>
            </div>
          </Card>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
          <Card className=" flex flex-col bg-cloudyGray flex-1 rounded-none border-none">
            <div className=" relative w-full h-96 overflow-hidden">
              <Image
                src="/images/roofLeak.svg"
                alt="A flexible image"
                layout="fill"
                objectFit="cover"
                loading="eager"
              />
            </div>
            <Separator className=" bg-SunsetOrange p-1"></Separator>

            <div
              id="text-space"
              className="flex flex-col items-center justify-center text-center gap-5 p-3 sm:p-5 lg:p-10 h-[350px]"
            >
              <h3 className=" text-2xl lg:text-3xl text-WayneBlack underline">
                Roof Leak Repair
              </h3>
              <p className=" flex-1 text-lg lg:text-xl">
                Roof leaks can happen. Let us take care of you. LP offers
                reliable roof repair services to fix leaks and ensure lasting
                protection.
              </p>
              <Link href="/services">
                <Button className=" text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                  LEARN MORE
                  <Image
                    src="/images/arrow-up-right.svg"
                    alt="arrow"
                    width={24}
                    height={24}
                  />
                </Button>
              </Link>
            </div>
          </Card>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
          <Card className="flex flex-col bg-cloudyGray flex-1 rounded-none border-none">
            <div className=" relative w-full h-96 overflow-hidden">
              <Image
                src="/images/shingleReplacement.svg"
                alt="A flexible image"
                layout="fill"
                objectFit="cover"
                loading="eager"
              />
            </div>
            <Separator className=" bg-SunsetOrange p-1"></Separator>
            <div
              id="text-space"
              className="flex flex-col items-center justify-center text-center gap-5 p-3 sm:p-5 lg:p-10 h-[350px]"
            >
              <h3 className=" text-2xl lg:text-3xl text-WayneBlack underline">
                Shingle Replacement
              </h3>
              <p className=" flex-1 text-lg lg:text-xl">
                Missing shingles, worn shingles, we&apos;ve seen it all. LP
                offers reliable shingle replacement services to restore your
                roof&apos;s durability and appearance.
              </p>
              <Link href="/services">
                <Button className=" text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                  LEARN MORE
                  <Image
                    src="/images/arrow-up-right.svg"
                    alt="arrow"
                    width={24}
                    height={24}
                  />
                </Button>
              </Link>
            </div>
          </Card>
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
          <Card className="flex flex-col bg-cloudyGray flex-1 rounded-none border-none">
            <div className=" relative w-full h-96 overflow-hidden">
              <Image
                src="/images/roofReplacement.svg"
                alt="A flexible image"
                layout="fill"
                objectFit="cover"
                loading="eager"
              />
            </div>
            <Separator className=" bg-SunsetOrange p-1"></Separator>

            <div
              id="text-space"
              className="flex flex-col items-center justify-center text-center gap-5 p-3 sm:p-5 lg:p-10 h-[350px]"
            >
              <h3 className=" text-2xl lg:text-3xl text-WayneBlack underline">
                Roof Replacement
              </h3>
              <p className=" flex-1 text-lg lg:text-xl">
                If you feel like upgrading your roof, let LP&apos;s high-quality
                craftsmanship complete your roof replacement to protect and
                enhance your home.
              </p>
              <Link href="/services">
                <Button className=" text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                  LEARN MORE
                  <Image
                    src="/images/arrow-up-right.svg"
                    alt="arrow"
                    width={24}
                    height={24}
                  />
                </Button>
              </Link>
            </div>
          </Card>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
          <Card className="flex flex-col bg-cloudyGray flex-1 rounded-none border-none">
            <div className=" relative w-full h-96 overflow-hidden">
              <Image
                src="/images/gutterRepair.svg"
                alt="A flexible image"
                layout="fill"
                objectFit="cover"
                loading="eager"
              />
            </div>
            <Separator className=" bg-SunsetOrange p-1"></Separator>

            <div
              id="text-space"
              className="flex flex-col items-center justify-center text-center gap-5 p-3 sm:p-5 lg:p-10 h-[350px]"
            >
              <h3 className=" text-2xl lg:text-3xl text-WayneBlack underline">
                Gutter Repair & Installation
              </h3>
              <p className=" flex-1 text-lg lg:text-xl">
                Professional gutter repair and installation to protect your home
                from water damage.
              </p>
              <Link href="/services">
                <Button className=" text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                  LEARN MORE
                  <Image
                    src="/images/arrow-up-right.svg"
                    alt="arrow"
                    width={24}
                    height={24}
                  />
                </Button>
              </Link>
            </div>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
}
