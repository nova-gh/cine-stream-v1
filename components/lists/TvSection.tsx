import { MediaItem } from "types/typing";
import Card from "../common/Card";

type Props = {
  list: MediaItem[];
  title: string;
};
const TvSection = ({ list, title }: Props) => {
  return (
    <section className="">
      <h2 className="section-title">{title}</h2>
      <div className="grid grid-cols-2 gap-4 px-1 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
        {list.map((tv) => (
          <Card item={tv} key={tv.id} type="tv" />
        ))}
      </div>
    </section>
  );
};

export default TvSection;
