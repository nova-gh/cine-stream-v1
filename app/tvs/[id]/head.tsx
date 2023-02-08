type Props = {
  params: { id: string };
};

export default async function Head({ params }: Props) {
  return (
    <>
      <title>{`Cine stream - Tv #${params.id} `}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={`Tv #${params.id}`} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
