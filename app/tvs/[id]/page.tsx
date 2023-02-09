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
import { Suspense } from "react";
import { getCurrentUser } from "@/lib/session";

type Props = {
  params: { id: string };
};

const DynamicTvPage = async ({ params }: Props) => {
  const tvData = getTvDetails(params.id);
  const tvTrailerData = getTvTrailer(params.id);
  const [tv, tvTrailer] = await Promise.all([tvData, tvTrailerData]);
  const user = await getCurrentUser();
  const flag = tv?.origin_country?.at(0);
  if (!tv) {
    notFound();
  }
  return (
    <main className="details-main">
      <BackButton />
      <section className="">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="j col-span-5 flex flex-col xl:col-span-3">
            <div className="relative  h-[300px]  md:h-[475px] ">
              <Image
                title={tv.name}
                src={imgDomain + tv.poster_path}
                fill
                alt={`${tv.name} Poster`}
                sizes="(max-width: 768px) 50vw,
                (max-width: 1200px) 100vw,33vw"
                blurDataURL={rgbDataURL(44, 55, 85)}
                priority
                className="max-w-max rounded-xl "
              />
            </div>
            <div className="mt-5 ml-1 flex w-full items-center space-x-5 text-3xl">
              <BookmarkButton user={user} />
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
              <h1 className="section-title mb-2">
                {tv.name}
                {tv.original_language !== "en" && (
                  <span> ({tv.original_name}) </span>
                )}
              </h1>
            </div>
            <div className="flex items-center space-x-5 text-sm font-medium lg:text-base ">
              {tv.production_countries?.at(0) ? (
                <ReactCountryFlag
                  aria-label={`${flag} Flag`}
                  countryCode={flag!}
                  title={`${flag} Flag`}
                  svg
                  alt={`${flag} Flag`}
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
                  className="flex-initial rounded-lg border border-white p-2 text-sm"
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
