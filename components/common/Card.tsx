import Image from "next/image";
import { MediaItem } from "types/typing";
import { imgDomain, moviesBaseUrl, tvsBaseUrl } from "@/lib/constants";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { rgbDataURL } from "@/lib/utils";
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
      <div className="group relative h-full min-h-[300px] w-full sm:min-h-[325px]">
        <Image
          title={item.title}
          src={imgDomain + item.poster_path}
          fill
          alt={`${item.title} Poster`}
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          placeholder="blur"
          blurDataURL={rgbDataURL(227, 109, 104)}
          className="  max-w-[250px] object-fill transition-all  duration-75 ease-linear  group-hover:brightness-50"
        />
        <div className="absolute inset-0 hidden group-hover:inline">
          <Link
            href={
              item.media_type == "movie" || type == "movie"
                ? moviesBaseUrl + item.id
                : item.media_type == "tv" || type == "tv"
                ? tvsBaseUrl + item.id
                : "/dashboard"
            }
            className="flex items-center justify-center w-full h-full "
          >
            <FaEye className="w-10 h-10 text-brand" />
            <span className="sr-only">Details</span>
          </Link>
        </div>
      </div>
      <div className="p-2 space-y-2">
        <h2
          className="card-title line-clamp-1 "
          title={item.title ?? item.name ?? item.original_title}
        >
          {item.title ?? item.name ?? item.original_title}
        </h2>
        <div className="flex items-center justify-between card-details">
          <p className="">
            {item.release_date?.slice(0, 4) ?? item.first_air_date?.slice(0, 4)}
          </p>
          <p className="w-min rounded-sm border border-gray-500 p-1 px-3 py-1 text-[10px] uppercase md:text-sm">
            {item.media_type ?? type}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Card;
// <Link
//       href={
//         item.media_type == "movie"
//           ? moviesBaseUrl
//           : item.media_type == "tv"
//           ? tvsBaseUrl
//           : "/dashboard"
//       }
//     >
