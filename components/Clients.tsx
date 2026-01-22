
import React from "react";
import { cn } from "../lib/utils";
import { LogoCloud } from "./ui/logo-cloud-4";
import { motion } from "framer-motion";

const logos = [
  {
    src: "https://imgur.com/bnyKsvt",
    alt: "Nvidia Logo",
  },
  {
    src: "https://svgl.app/library/supabase_wordmark_light.svg",
    alt: "Supabase Logo",
  },
  {
    src: "https://svgl.app/library/openai_wordmark_light.svg",
    alt: "OpenAI Logo",
  },
  {
    src: "https://svgl.app/library/turso-wordmark-light.svg",
    alt: "Turso Logo",
  },
  {
    src: "https://svgl.app/library/vercel_wordmark.svg",
    alt: "Vercel Logo",
  },
  {
    src: "https://svgl.app/library/github_wordmark_light.svg",
    alt: "GitHub Logo",
  },
  {
    src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
    alt: "Claude AI Logo",
  },
  {
    src: "https://svgl.app/library/clerk-wordmark-light.svg",
    alt: "Clerk Logo",
  },
];

export const Clients: React.FC = () => {
  return (
    <section className="py-24 w-full relative overflow-hidden">
     <div
        aria-hidden="true"
        className={cn(
          "-top-1/2 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[100vmin] w-[100vmin] rounded-b-full",
          "bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_70%)]",
          "blur-[60px]"
        )}
      />
      <div className="w-full relative z-10">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-12 text-center"
        >
          <h2 className="mb-4">
            <span className="block font-medium text-xs text-white/40 uppercase tracking-[0.5em] mb-4">
              Collaborations
            </span>
            <span className="font-black text-3xl text-white tracking-tight md:text-5xl uppercase">
              Trusted by the Industry's Elite
            </span>
          </h2>
        </motion.div>

        <LogoCloud logos={logos} />
      </div>
    </section>
  );
};
