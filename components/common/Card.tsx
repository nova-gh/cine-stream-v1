import Image from "next/image";
import { MediaItem } from "types/typing";
import { imgDomain, rgbDataURL } from "@/lib/constants";
type Props = {
  item: MediaItem;
  slider?: boolean;
  type: string;
};
const Card = ({ item, slider, type }: Props) => {
  return (
    <article
      className={`flex flex-col rounded-lg ${slider ? `embla__slide` : ""}`}
      key={item.id}
    >
      <div className="relative h-full min-h-[325px] w-full">
        <Image
          src={imgDomain + item.poster_path}
          fill
          alt={`${item.title} Poster`}
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          placeholder="blur"
          blurDataURL={rgbDataURL(227, 109, 104)}
          className="max-w-[250px] object-fill"
        />
      </div>
      <div className="p-2 space-y-2">
        <h2
          className="card-title line-clamp-1 "
          title={item.original_title ?? item.name}
        >
          {item.original_title ?? item.name}
        </h2>
        <div className="flex items-center justify-between card-details">
          <p className="">
            {item.release_date?.slice(0, 4) ?? item.first_air_date?.slice(0, 4)}
          </p>
          <p className="p-1 px-3 py-1 uppercase border border-gray-500 rounded-sm w-min">
            {item.media_type ?? type}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Card;
