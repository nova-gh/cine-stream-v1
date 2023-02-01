import { getMovieDetails } from "@/lib/moviesFetches";

type Props = {
  params: { id: string };
};
export default async function Head({ params }: Props) {
  const movie = await getMovieDetails(params.id);
  return (
    <>
      <title>{`Cine stream - ${movie?.title ?? "Movies, Error"}`}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={movie?.title ?? "Movies, Error"} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
