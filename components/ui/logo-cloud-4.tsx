
import { InfiniteSlider } from "./infinite-slider";
import { ProgressiveBlur } from "./progressive-blur";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ logos }: LogoCloudProps) {
  return (
    <div className="relative mx-auto max-w-3xl bg-gradient-to-r from-white/5 via-transparent to-white/5 py-12 md:border-x border-white/5">
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-white/5" />

      <InfiniteSlider gap={64} reverse speed={40} speedOnHover={15}>
        {logos.map((logo) => (
          <img
            alt={logo.alt}
            className="pointer-events-none h-6 select-none md:h-8 opacity-40 hover:opacity-100 transition-opacity brightness-0 invert"
            height="auto"
            key={`logo-${logo.alt}`}
            loading="lazy"
            src={logo.src}
            width="auto"
          />
        ))}
      </InfiniteSlider>

      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 left-0 h-full w-[160px]"
        direction="left"
      />
      < ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 right-0 h-full w-[160px]"
        direction="right"
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-white/5" />
    </div>
  );
}
