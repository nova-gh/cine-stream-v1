import SearchInput from "@/components/common/SearchInput";

type Props = {
  params: { query: string };
  searchParams?: { option: string | string[] | undefined };
};

const DynamicMoviePage = async ({ params, searchParams }: Props) => {
  console.log("page", params, searchParams);
  return (
    <main className="details-main">
      <h1 className="section-title ">Search Results</h1>
      <SearchInput />
      <div className="">
        <h2 className="">
          q:{params.query},p:{searchParams?.option}
        </h2>
      </div>
    </main>
  );
};

export default DynamicMoviePage;
