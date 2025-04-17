import ArrowButton from "./ArrowButton";
import Song from "./Song";
import { data } from "../assets/data";

export default function SongPage() {
  return (
    <>
      <ArrowButton>{"<"}</ArrowButton>

      <section className="question">
        <Song video={data[0].video} />
      </section>
    </>
  );
}
