"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

// Custom Outside Click Hook --> Very important for closing the modal when clicking outside of it
const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback]);
  return ref;
};

export const LayoutCards = () => {
  const [current, setCurrent] = useState<Card | null>(null);

  const ref = useOutsideClick(() => setCurrent(null));
  return (
    // card layout --> click on a card to open the modal with the content of that card
    <div className="py-10 bg-gray-100 min-h-screen relative">
      {current && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="fixed z-10 h-full w-full inset-0 bg-black/50 backdrop-blur-sm"
        ></motion.div>
      )}
      {current && (
        <motion.div
          layoutId={`card-${current.title}`}
          ref={ref}
          className="h-[500px] fixed inset-0 z-20 m-auto bg-white w-72 rounded-2xl border border-neutral-200 p-4 overflow-hidden"
        >
          <motion.img
            layoutId={`card-image-${current.title}`}
            src={current.src}
            alt={current.title}
            className="w-full aspect-square rounded-2xl"
          />

          <div className="flex flex-col justify-between items-start">
            <div className="flex items-start justify-between py-4 w-full gap-2">
              <div className="flex flex-col items-start gap-2">
                <motion.h2
                  layoutId={`card-title-${current.title}`}
                  className="font-bold text-xs tracking-tight text-black"
                >
                  {current.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-description-${current.title}`}
                  className="text-[10px] text-neutral-500"
                >
                  {current.description}
                </motion.p>
              </div>
              <motion.div layoutId={`card-cta-${current.title}`}>
                <Link
                  href={current.ctaLink}
                  className="px-2 py-1 bg-green-500 rounded-full text-white text-xs"
                >
                  {current.ctaText}
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{
                filter: "blur(10px)",
                opacity: 0,
              }}
              animate={{
                filter: "blur(0px)",
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
              }}
              className="h-50 overflow-auto pb-20 [mask-image:linear-gradient(to_top,transparent_20%,black_80%)]"
            >
              {current.content()}
            </motion.div>
          </div>
        </motion.div>
      )}
      {/* main layout --> clicking the rendered items open a card model */}
      <div className="max-w-lg mx-auto flex flex-col gap-10">
        {cards.map((card, idx) => (
          <motion.button
            layoutId={`card-${card.title}`}
            onClick={() => setCurrent(card)}
            key={card.title}
            className="p-4 rounded-lg cursor-pointer flex justify-between items-center bg-white border border-neutral-200"
          >
            <div className="flex gap-4 items-center">
              <motion.img
                layoutId={`card-image-${card.title}`}
                src={card.src}
                alt={card.title}
                className="h-14 aspect-square rounded-lg"
              />
              <div className="flex flex-col items-start gap-2">
                <motion.h2
                  layoutId={`card-title-${card.title}`}
                  className="font-bold text-xs tracking-tight text-black"
                >
                  {card.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-description-${card.title}`}
                  className="text-[10px] text-neutral-500"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.div
              layoutId={`card-cta-${card.title}`}
              className="px-2 py-1 bg-green-500 rounded-full text-white text-xs"
            >
              {card.ctaText}
            </motion.div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

type Card = {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
};

const cards: Card[] = [
  {
    description: "Lana Del Rey",
    title: "Summertime Sadness",
    src: "https://media.gettyimages.com/id/2151792966/photo/the-2024-met-gala-celebrating-sleeping-beauties-reawakening-fashion-arrivals.jpg?s=2048x2048&w=gi&k=20&c=v3uIaQn0ABawcZQ9o_Wj6an76tdSrttbZuFcypRxlh8=",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Elizabeth Woolridge Grant, known professionally as Lana Del Rey, is an
          American singer-songwriter celebrated for her cinematic style and
          melancholic exploration of glamour, depression, and American tragedy.
          Rising to fame in 2011 with "Video Games," she has crafted a
          distinctive sonic universe blending baroque pop, dream pop, and
          Americana. Her extensive catalog includes critically acclaimed albums
          like Born to Die, Ultraviolence, and Norman F*ing Rockwell,
          establishing her as one of the most influential voices of her
          generation.
        </p>
      );
    },
  },
  {
    description: "Taylor Swift",
    title: "Anti-Hero",
    src: "https://media.gettyimages.com/id/2281159351/photo/songwriters-hall-of-fame-55th-annual-induction-and-awards-gala.jpg?s=2048x2048&w=gi&k=20&c=E26SVTyorjHHlitO8OAmbmNNwoF_U7sAJK3Q-WGiC-I=",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Taylor Alison Swift is a global pop phenomenon who began as
          Nashville's country darling before conquering every genre she touches.
          Known for her deeply personal songwriting that turns diary entries
          into anthems, she has won a record-breaking 14 Grammy Awards and
          become the highest-grossing female touring artist ever. From Fearless
          to Midnights, her evolution from country sweetheart to pop superstar
          to indie-folk experimenter demonstrates an unparalleled ability to
          reinvent herself while maintaining authentic connection with millions
          of fans worldwide.
        </p>
      );
    },
  },
  {
    description: "The Weeknd",
    title: "Blinding Lights",
    src: "https://media.gettyimages.com/id/2214973279/photo/lionsgates-hurry-up-tomorrow-world-premiere.jpg?s=2048x2048&w=gi&k=20&c=gYBLeLixaQ3n-B8c6N_0dCPH_iIa-8LwbOD_Jfe6Zt8=",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Abel Makkonen Tesfaye, performing as The Weeknd, is a Canadian singer,
          songwriter, and producer whose genre-blending sound has dominated the
          charts for over a decade. Emerging from Toronto's underground R&B
          scene in 2011, his mysterious persona and dark, atmospheric production
          style created a new template for modern pop. With hits like "Blinding
          Lights" becoming the longest-running top 10 hit in Billboard history,
          he has amassed 7 Diamond-certified singles, multiple Grammy Awards,
          and a Super Bowl halftime show performance, cementing his status as
          one of music's biggest global stars.
        </p>
      );
    },
  },
  {
    description: "Billie Eilish",
    title: "bad guy",
    src: "https://media.gettyimages.com/id/2074893116/photo/96th-annual-academy-awards-arrivals.jpg?s=2048x2048&w=gi&k=20&c=3xq8BpVfwSOlvUCqLNN7bn1nlWmJ7nbZTO04-OLAeFY=",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Billie Eilish Pirate Baird O'Connell is an American singer-songwriter
          who dismantled every rule of pop music before turning 20. Raised in
          Los Angeles by actor parents, she recorded her debut single "Ocean
          Eyes" in a bedroom with her brother Finneas, launching a career that
          would earn her 9 Grammy Awards and make her the youngest artist ever
          to win all four major categories in one night. Her whispery vocals,
          genre-defying production, and candid exploration of mental health,
          body image, and climate anxiety have resonated with Generation Z while
          influencing mainstream music's direction.
        </p>
      );
    },
  },
  {
    description: "Ed Sheeran",
    title: "Shape of You",
    src: "https://media.gettyimages.com/id/2245564776/photo/los40-music-awards-santander-2025-red-carpet.jpg?s=2048x2048&w=gi&k=20&c=KtlpV47jFFzOtn9WyP5sx9ZBgIDgGNad6f9S_oe4lgE=",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Edward Christopher Sheeran is a British singer-songwriter whose loop
          pedal performances and mathematical approach to songwriting have made
          him one of the best-selling music artists in history. From busking on
          London streets to selling out stadiums worldwide, his blend of
          acoustic pop, hip-hop influences, and heartfelt storytelling has
          produced billions of streams and record-breaking singles like "Shape
          of You." With 12 Brit Awards, 4 Grammy Awards, and an MBE from the
          British Crown, he continues to shape pop music through his prolific
          output and collaborations with artists across every genre.
        </p>
      );
    },
  },
  {
    description: "Adele",
    title: "Hello",
    src: "https://media.gettyimages.com/id/1463314687/photo/65th-grammy-awards-deadline-photo-room.jpg?s=2048x2048&w=gi&k=20&c=rrlqsC0xq3SBv8MrSjtYTp-Pn1XCg6qydcV4D3Rpvwg=",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Adele Laurie Blue Adkins is a British singer-songwriter whose
          powerhouse contralto and emotionally devastating ballads have made her
          one of the best-selling musicians of all time. Discovered through
          MySpace demos, her debut album 19 launched a career defined by raw
          vulnerability and vocal virtuosity that has earned her 16 Grammy
          Awards and 12 Brit Awards. Albums 21, 25, and 30 have collectively
          sold over 120 million copies worldwide, with her ability to transform
          personal heartbreak into universal anthems ensuring her place among
          the greatest vocalists in popular music history.
        </p>
      );
    },
  },
];
