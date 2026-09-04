"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image from "next/image";

const logos = [
  { src: "/images/IMG_0332.jpg", name: "Me", orientation: "portrait" },
  { src: "/images/IMG_9250.jpg", name: "Yo", orientation: "landscape" },
  { src: "/images/IMG_9880.jpg", name: "Ye", orientation: "landscape" },
  { src: "/images/image0.jpg", name: "Atlas", orientation: "landscape" },
];

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  );

  return (
    <Carousel plugins={[plugin.current]} className="w-full">
      <CarouselContent>
        {logos.map((logo) => (
          <CarouselItem key={logo.src} className="basis-1/2">
            <div className="p-1">
              <Dialog>
                {/* Trigger should be the clickable card */}
                <DialogTrigger asChild>
                  <Card className="cursor-pointer border-none">
                    <CardContent className="relative flex aspect-square items-center justify-center p-6">
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 33vw, 50vw"
                        priority={logo.src.includes("Egypt")}
                      />
                    </CardContent>
                  </Card>
                </DialogTrigger>

                {/* Content must be a sibling, not inside trigger */}
                <DialogContent className="sm:max-w-4xl p-0">
                  <DialogTitle>{logo.name}</DialogTitle>
                  <div
                    className={`w-full overflow-hidden ${
                      logo.orientation === "portrait"
                        ? "aspect-[3/4]"
                        : "aspect-[16/9]"
                    }`}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      className="object-cover"
                      sizes="(min-width: 640px) 600px, 90vw"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
