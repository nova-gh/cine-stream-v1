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
  index?: number;
};
const Card = ({ item, slider, type, index }: Props) => {
  return (
    <article
      className={`flex w-full flex-col ${slider ? `embla__slide` : ""}`}
      key={item.id}
    >
      <div className=" group relative h-full min-h-[300px] w-full max-w-[250px] sm:min-h-[325px]">
        <Image
          title={item.title}
          src={imgDomain + item.poster_path}
          fill
          alt={`${item.title} Poster`}
          sizes="(max-width: 768px) 50vw,
          (max-width: 1200px) 100vw,33vw"
          placeholder="blur"
          priority={slider && index! < 2 ? true : false}
          blurDataURL={rgbDataURL(44, 55, 85)}
          className="aspect-square rounded-lg object-fill transition-all duration-75 ease-linear group-hover:brightness-50"
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
            className="flex h-full w-full items-center justify-center "
          >
            <FaEye className="h-10 w-10 text-brand" />
            <span className="sr-only">Details</span>
          </Link>
        </div>
      </div>
      <div className="max-w-[250px] space-y-2  p-2 lg:max-w-full">
        <h2
          className="card-title line-clamp-1 "
          title={item.title ?? item.name ?? item.original_title}
        >
          {item.title ?? item.name ?? item.original_title}
        </h2>
        <div className="card-details flex items-center justify-between">
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
