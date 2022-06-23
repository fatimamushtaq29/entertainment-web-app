export default function Heading({ headingText }) {
  return (
    <h2
      className="text-white text-[clamp(1.25rem,0.5344rem+3.0534vw,2rem)]
                        px-[clamp(1rem,0.5229rem+2.0356vw,1.5rem)]
                        leading-tight tracking-[-0.015em] font-light md:px-[clamp(1.5rem,0.6429rem+1.7857vw,2.25rem)]"
    >
      {headingText}
    </h2>
  );
}
