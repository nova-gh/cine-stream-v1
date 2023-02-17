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
import { getCurrentUser } from "@/lib/session";
type Props = {
  params: { id: string };
};

const DynamicMoviePage = async ({ params }: Props) => {
  const movieData = getMovieDetails(params.id);
  const movieTrailerData = getMovieTrailer(params.id);
  const [movie, movTrailer] = await Promise.all([movieData, movieTrailerData]);
  const user = await getCurrentUser();
  const flag = movie?.production_countries?.at(0)?.iso_3166_1!;
  if (!movie) {
    notFound();
  }
  const movieItem = {
    year: movie.release_date,
    type: "movies",
    tmdbId: movie.id.toString(),
    poster: movie.poster_path,
    title: movie.title,
  };
  return (
    <main className="details-main relative">
      <BackButton />
      <section className="">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="flex flex-col md:col-span-5 xl:col-span-3">
            <div className="relative h-[300px]  md:h-[475px] ">
              <Image
                title={movie.title}
                src={
                  !movie.poster_path
                    ? "/no-poster-available.jpg"
                    : imgDomain + movie.poster_path
                }
                fill
                alt={`${movie.title} Poster`}
                sizes="(max-width: 768px) 50vw,
                (max-width: 1200px) 100vw,33vw"
                placeholder="blur"
                priority
                blurDataURL={rgbDataURL(44, 55, 85)}
                className="max-w-max rounded-xl "
              />
            </div>
            <div className="mt-5 ml-1 flex w-full items-center space-x-5 text-3xl">
              <BookmarkButton user={user} mediaItem={movieItem} />
              {movie.homepage ? (
                <MediaWebsiteButton href={movie.homepage} name={movie.title} />
              ) : null}
              {movTrailer?.site.toLocaleLowerCase() == "youtube" ? (
                <VideoButton
                  trailer={movTrailer}
                  name={movie.title + " " + movTrailer.name}
                />
              ) : null}
            </div>
          </div>
          <article className="space-y-5 md:col-span-7 xl:col-span-9">
            <div className="mb-2">
              <h1 className="section-title mb-2">
                {movie.title}
                {movie.original_language !== "en" && (
                  <span> ({movie.title}) </span>
                )}
              </h1>
              {movie.tagline && (
                <q className="font-medium italic text-brand-light">
                  {movie.tagline}
                </q>
              )}
            </div>
            <div className="flex items-center space-x-5 text-sm font-medium lg:text-base ">
              {movie.production_countries?.at(0) ? (
                <ReactCountryFlag
                  aria-label={`${flag} Flag`}
                  countryCode={flag}
                  title={`${flag} Flag`}
                  svg
                  alt={`${flag} Flag`}
                />
              ) : null}
              <time>
                {movie.runtime !== 0 ? `${movie.runtime} mins` : null}
              </time>
              <time dateTime={movie.release_date}>
                Relase Date:
                <strong className="ml-1">
                  {dateConverter(movie.release_date)}
                </strong>
              </time>
            </div>

            <p className="sm:text-lg">
              {movie.overview ? movie.overview : "Overview not avaliable.."}
            </p>
            <div className="flex flex-wrap gap-5">
              {movie.genres?.map((gen) => (
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

export default DynamicMoviePage;
