"use client";

import { clsx } from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import { getBasePath } from "@/utils/basePath";

type BentoCardProps = {
  dark?: boolean;
  className?: string;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  graphic?: React.ReactNode;
  fade?: ("top" | "bottom")[];
};

export function BentoCard({
  dark = false,
  className = "",
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
}: BentoCardProps) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      data-dark={dark ? "true" : undefined}
      className={clsx(
        className,
        "group relative flex flex-col overflow-hidden rounded-2xl",
        "bg-black dark:bg-transparent transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] bg-black shadow-sm ring-1 ring-white/10",
        "data-[dark]:bg-gray-800 data-[dark]:ring-white/15"
      )}
    >
      <div className="relative h-[29rem] shrink-0">
        {graphic}
        {fade.includes("top") && (
          <div className="absolute inset-0 bg-gradient-to-b from-white/25 to-transparent opacity-25" />
        )}
        {fade.includes("bottom") && (
          <div className="absolute inset-0 bg-gradient-to-t from-white/25 to-transparent opacity-25" />
        )}
      </div>
      <div className="relative p-10 z-20 isolate mt-[-110px] h-[14rem] backdrop-blur-xl text-[#2f3238]">
        <h1 className="text-xs uppercase tracking-wider opacity-70 text-[#2f3238] font-semibold">{eyebrow}</h1>
        <p className="mt-1 text-2xl font-medium tracking-tight text-[#2f3238] leading-tight drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)]">
          {title}
        </p>
        <p className="mt-2 max-w-[600px] text-sm text-[#2f3238] leading-relaxed drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

type BentoGridProps = {
  title: string;
  description: string;
  items: Array<{
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    className?: string;
    fade?: ("top" | "bottom")[];
  }>;
  content?: {
    title: string;
    description: string;
  };
};

export default function BentoGrid({ title, description, items, content }: BentoGridProps) {
  const basePath = getBasePath();

  return (
    <div className="pt-20 w-full mx-auto bg-[#f0ece8] flex flex-col p-10">
      <div className="max-w-7xl mx-auto w-full">
        {title && (
          <h1 className="text-[clamp(36px,5vw,56px)] leading-[1.1] font-black text-[#1b0f0f] tracking-[-0.03em] mb-4">
            {title}
          </h1>
        )}
        {description && (
          <p className="text-lg leading-[1.8] text-[#3c2f2f] max-w-[540px]">
            {description}
          </p>
        )}

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {items.map((item, index) => (
            <BentoCard
              key={index}
              eyebrow={item.eyebrow}
              title={item.title}
              description={item.description}
              graphic={
                <div className="absolute inset-0">
                  <Image
                    src={`${basePath}${item.image}`}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              }
              className={item.className || ""}
              fade={item.fade || []}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

