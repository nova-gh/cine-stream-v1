import { imgDomain } from "@/lib/constants";
import { rgbDataURL } from "@/lib/utils";
import { BookmarkItem } from "@/types/typing";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaTrash } from "react-icons/fa";

type Props = {
  item: Record<string, any> | BookmarkItem;
};

const BookmarkCard = ({ item }: Props) => {
  const mediaLink = `/${item.mediaType}/${item.tmdbId}`;
  return (
    <article className="flex flex-col">
      <div className=" group relative h-full min-h-[300px] w-full max-w-[250px] sm:min-h-[325px]">
        <Image
          title={item.title}
          src={imgDomain + item.poster_path}
          fill
          alt={`${item.title} Poster`}
          sizes="(max-width: 768px) 50vw,
          (max-width: 1200px) 100vw,33vw"
          placeholder="blur"
          blurDataURL={rgbDataURL(44, 55, 85)}
          className="aspect-square rounded-lg object-fill transition-all duration-75 ease-linear group-hover:brightness-50"
        />
        <div className="absolute inset-0 hidden group-hover:inline">
          <Link
            href={mediaLink}
            className="flex h-full w-full items-center justify-center "
          >
            <FaEye className="h-10 w-10 text-brand" />
            <span className="sr-only">Details</span>
          </Link>
        </div>
      </div>
      <div className="">
        <div className="max-w-[250px] space-y-2  p-2 lg:max-w-full">
          <h2 className="card-title line-clamp-1 " title={item.title}>
            {item.title}
          </h2>
          <div className="card-details flex items-center justify-between">
            <p className="">{item.mediaYear}</p>
            <button className="link_hover w-min rounded-lg border bg-bg-light  px-3 py-2 text-[10px] hover:bg-brand  md:text-sm">
              <FaTrash />
              <span className="sr-only">Remove</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
export default BookmarkCard;
