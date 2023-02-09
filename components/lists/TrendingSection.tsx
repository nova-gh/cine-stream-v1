"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { MediaItem } from "types/typing";
import Card from "../common/Card";

type Props = {
  list: MediaItem[];
};
const TrendingSection = ({ list }: Props) => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      containScroll: "trimSnaps",
      startIndex: 0,
      align: 1,
    },
    [Autoplay({ stopOnMouseEnter: true, stopOnInteraction: false })]
  );
  return (
    <section className="">
      <h1 className="section-title">Trending Movies & Shows</h1>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {list.map((item, i) => (
            <Card
              key={item.id}
              item={item}
              index={i}
              slider={true}
              type={item.media_type}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
