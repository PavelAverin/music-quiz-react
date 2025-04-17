import ArrowButton from "./ArrowButton";
import Question from "./Question";

export default function QuestionPage() {
  return (
    <>
      <ArrowButton>{"<"}</ArrowButton>

      <section className="question">
        <Question>кому мы даём взятку, когда хотим попасть в общагу?</Question>
      </section>

      <ArrowButton>{">"}</ArrowButton>
    </>
  );
}
