"use client";

import Image from "next/image";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  description?: string;
}

export default function PageHeader({
  title,
  subtitle,
  backgroundImage,
  description,
}: PageHeaderProps) {
  return (
    <div className="relative bg-foreground -mt-[104px] md:-mt-[112px]">
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover object-center opacity-50 grayscale"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
        </div>
      )}
      <div className="relative min-h-[65vh] flex items-center">
        <div className="container mx-auto px-4 pb-20 pt-[180px] md:pt-[196px]">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold tracking-tight text-white">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-white/80 font-medium tracking-tight">
                {subtitle}
              </p>
            )}
            {description && (
              <p className="mt-4 text-lg text-white/80">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
