type Props = {
  params: { query: string };
  searchParams?: { option: string | string[] | undefined };
};

export default async function Head({ params, searchParams }: Props) {
  return (
    <>
      <title>{`Cine stream - Searching for ${params.query}`}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={`Searching for ${params.query}`} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
