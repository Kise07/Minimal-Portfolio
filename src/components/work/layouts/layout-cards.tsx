"use client";
import { useEffect, useRef, useState } from "react";

import Link from "next/link";

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
    <div className="relative min-h-screen bg-gray-100 py-10">
      {current && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="fixed inset-0 z-10 h-full w-full bg-black/50 backdrop-blur-sm"
        ></motion.div>
      )}
      {current && (
        <motion.div
          layoutId={`card-${current.title}`}
          ref={ref}
          className="fixed inset-0 z-20 m-auto h-[500px] w-72 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-4"
        >
          <motion.img
            layoutId={`card-image-${current.title}`}
            src={current.src}
            alt={current.title}
            className="aspect-square w-full rounded-2xl"
          />

          <div className="flex flex-col items-start justify-between">
            <div className="flex w-full items-start justify-between gap-2 py-4">
              <div className="flex flex-col items-start gap-2">
                <motion.h2
                  layoutId={`card-title-${current.title}`}
                  className="text-xs font-bold tracking-tight text-black"
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
                  className="rounded-full bg-green-500 px-2 py-1 text-xs text-white"
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
              className="h-50 overflow-auto [mask-image:linear-gradient(to_top,transparent_20%,black_80%)] pb-20"
            >
              {current.content()}
            </motion.div>
          </div>
        </motion.div>
      )}
      {/* main layout --> clicking the rendered items open a card model */}
      <div className="mx-auto flex max-w-lg flex-col gap-10">
        {cards.map((card) => (
          <motion.button
            layoutId={`card-${card.title}`}
            onClick={() => setCurrent(card)}
            key={card.title}
            className="flex cursor-pointer items-center justify-between rounded-lg border border-neutral-200 bg-white p-4"
          >
            <div className="flex items-center gap-4">
              <motion.img
                layoutId={`card-image-${card.title}`}
                src={card.src}
                alt={card.title}
                className="aspect-square h-14 rounded-lg"
              />
              <div className="flex flex-col items-start gap-2">
                <motion.h2
                  layoutId={`card-title-${card.title}`}
                  className="text-xs font-bold tracking-tight text-black"
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
              className="rounded-full bg-green-500 px-2 py-1 text-xs text-white"
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
          Rising to fame in 2011 with &quot;Video Games,&quot; she has crafted a
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
          Nashville&apos;s country darling before conquering every genre she
          touches. Known for her deeply personal songwriting that turns diary
          entries into anthems, she has won a record-breaking 14 Grammy Awards
          and become the highest-grossing female touring artist ever. From
          Fearless to Midnights, her evolution from country sweetheart to pop
          superstar to indie-folk experimenter demonstrates an unparalleled
          ability to reinvent herself while maintaining authentic connection
          with millions of fans worldwide.
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
          charts for over a decade. Emerging from Toronto&apos;s underground R&B
          scene in 2011, his mysterious persona and dark, atmospheric production
          style created a new template for modern pop. With hits like
          &quot;Blinding Lights&quot; becoming the longest-running top 10 hit in
          Billboard history, he has amassed 7 Diamond-certified singles,
          multiple Grammy Awards, and a Super Bowl halftime show performance,
          cementing his status as one of music&apos;s biggest global stars.
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
          Billie Eilish Pirate Baird O&apos;Connell is an American
          singer-songwriter who dismantled every rule of pop music before
          turning 20. Raised in Los Angeles by actor parents, she recorded her
          debut single &quot;Ocean Eyes&quot; in a bedroom with her brother
          Finneas, launching a career that would earn her 9 Grammy Awards and
          make her the youngest artist ever to win all four major categories in
          one night. Her whispery vocals, genre-defying production, and candid
          exploration of mental health, body image, and climate anxiety have
          resonated with Generation Z while influencing mainstream music&apos;s
          direction.
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
          produced billions of streams and record-breaking singles like
          &quot;Shape of You.&quot; With 12 Brit Awards, 4 Grammy Awards, and an
          MBE from the British Crown, he continues to shape pop music through
          his prolific output and collaborations with artists across every
          genre.
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
