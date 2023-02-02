import Image from "next/image";
import { notFound } from "next/navigation";
import { getTvDetails, getTvTrailer } from "@/lib/tvsFetches";
import { imgDomain } from "@/lib/constants";
import BackButton from "@/components/buttons/BackButton";
import BookmarkButton from "@/components/buttons/BookmarkButton";
import MediaWebsiteButton from "@/components/buttons/MediaWebsiteButton";
import { dateConverter, rgbDataURL } from "@/lib/utils";
import ReactCountryFlag from "react-country-flag";
import VideoButton from "@/components/buttons/VideoButton";

type Props = {
  params: { id: string };
};

const DynamicTvPage = async ({ params }: Props) => {
  const tvData = getTvDetails(params.id);
  const tvTrailerData = getTvTrailer(params.id);
  const [tv, tvTrailer] = await Promise.all([tvData, tvTrailerData]);
  if (!tv) {
    notFound();
  }
  return (
    <main className="details-main">
      <BackButton />
      <section className="">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="flex flex-col col-span-5 j xl:col-span-3">
            <div className="relative h-full min-h-[300px]  md:min-h-[475px] ">
              <Image
                title={tv.original_name}
                src={imgDomain + tv.poster_path}
                fill
                alt={`${tv.original_name} Poster`}
                sizes="(max-width: 768px) 50vw,
                (max-width: 1200px) 100vw,33vw"
                blurDataURL={rgbDataURL(227, 109, 104)}
                className="object-cover max-w-max rounded-xl"
              />
            </div>
            <div className="flex items-center w-full mt-5 ml-1 space-x-5 text-3xl">
              <BookmarkButton />
              {tv.homepage ? (
                <MediaWebsiteButton href={tv.homepage} name={tv.name} />
              ) : null}
              {tvTrailer?.site.toLocaleLowerCase() == "youtube" ? (
                <VideoButton
                  trailer={tvTrailer}
                  name={tv.name + " " + tvTrailer.name}
                />
              ) : null}
            </div>
          </div>
          <article className="col-span-7 space-y-5 xl:col-span-9">
            <div className="mb-2">
              <h1 className="mb-2 section-title">
                {tv.name}
                {tv.original_language !== "en" && (
                  <span> ({tv.original_name}) </span>
                )}
              </h1>
            </div>
            <div className="space-x-5 text-sm font-medium lg:text-base ">
              {tv.production_countries?.at(0) ? (
                <ReactCountryFlag
                  countryCode={tv.production_countries?.at(0)?.iso_3166_1!}
                  svg
                />
              ) : null}
              <time dateTime={tv.first_air_date}>
                First Aired: <strong>{dateConverter(tv.first_air_date)}</strong>
              </time>
              {tv.status.toLocaleLowerCase() == "ended" ? (
                <time dateTime={tv.first_air_date}>
                  Last Aired: <strong>{dateConverter(tv.last_air_date)}</strong>
                </time>
              ) : (
                <time dateTime={tv.first_air_date}>Ongoing..</time>
              )}
            </div>
            <p className="sm:text-lg">
              {tv.overview ? tv.overview : "Overview not avaliable.."}
            </p>
            <div className="flex flex-wrap gap-5">
              {tv.genres?.map((gen) => (
                <p
                  className="flex-initial p-2 text-sm border border-white rounded-lg"
                  key={gen.id}
                >
                  {gen.name}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default DynamicTvPage;
