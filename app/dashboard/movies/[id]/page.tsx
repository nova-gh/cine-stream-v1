import ReactCountryFlag from "react-country-flag";
import Image from "next/image";
import { notFound } from "next/navigation";
import { imgDomain } from "@/lib/constants";
import { dateConverter, rgbDataURL } from "@/lib/utils";
import { getMovieDetails, getMovieTrailer } from "@/lib/moviesFetches";
import BackButton from "@/components/buttons/BackButton";
import BookmarkButton from "@/components/buttons/BookmarkButton";
import MediaWebsiteButton from "@/components/buttons/MediaWebsiteButton";
import VideoButton from "@/components/buttons/VideoButton";
type Props = {
  params: { id: string };
};

const DynamicMoviePage = async ({ params }: Props) => {
  const movieData = getMovieDetails(params.id);
  const movieTrailerData = getMovieTrailer(params.id);
  const [movie, movTrailer] = await Promise.all([movieData, movieTrailerData]);
  if (!movie) {
    notFound();
  }
  return (
    <main className="relative details-main">
      <BackButton />
      <section className="">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="flex flex-col j md:col-span-5 xl:col-span-3">
            <div className="relative h-full min-h-[300px]  md:min-h-[475px] ">
              <Image
                title={movie.title}
                src={imgDomain + movie.poster_path}
                fill
                alt={`${movie.title} Poster`}
                sizes="(max-width: 768px) 50vw,
                (max-width: 1200px) 100vw,33vw"
                placeholder="blur"
                blurDataURL={rgbDataURL(227, 109, 104)}
                className="object-cover max-w-max rounded-xl"
              />
            </div>
            <div className="flex items-center w-full mt-5 ml-1 space-x-5 text-3xl">
              <BookmarkButton />
              <MediaWebsiteButton href={movie.homepage} name={movie.title} />
              {movTrailer?.site.toLocaleLowerCase() == "youtube" ? (
                <VideoButton
                  trailer={movTrailer}
                  name={movie.title + " " + movTrailer.name}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <article className="space-y-5 md:col-span-7 xl:col-span-9">
            <div className="mb-2">
              <h1 className="mb-2 section-title">
                {movie.title}
                {movie.original_language !== "en" && (
                  <span> ({movie.title}) </span>
                )}
              </h1>
              {movie.tagline && (
                <q className="italic font-medium text-brand-light">
                  {movie.tagline}
                </q>
              )}
            </div>
            <div className="space-x-5 text-sm font-medium lg:text-base ">
              {movie.production_countries?.at(0) ? (
                <ReactCountryFlag
                  countryCode={movie.production_countries?.at(0)?.iso_3166_1!}
                  svg
                />
              ) : (
                ""
              )}
              <time>{`${movie.runtime} mins`}</time>
              <time dateTime={movie.release_date}>
                Relase Date:
                <strong>{dateConverter(movie.release_date)}</strong>
              </time>
            </div>

            <p className="sm:text-lg">{movie.overview}</p>
            <div className="flex flex-wrap gap-5">
              {movie.genres?.map((gen) => (
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

export default DynamicMoviePage;
