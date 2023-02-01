import { getTvDetails } from "@/lib/tvsFetches";

type Props = {
  params: { id: string };
};
export default async function Head({ params }: Props) {
  const tv = await getTvDetails(params.id);
  return (
    <>
      <title>{`Cine stream - ${
        tv?.name ?? tv?.original_name ?? "Tvs, Error"
      }`}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content={tv?.name ?? tv?.original_name ?? "Tvs, Error"}
      />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
