import { data, categoryNames } from "../assets/data";
import Category from "../Components/Category";
import Card from "../Components/Card";

export default function MainPage() {
  return (
    <>
      <section className="category">
        {categoryNames.map((category, index) => (
          <Category key={index}>{category}</Category>
        ))}
      </section>

      <section className="cards">
        {data.map((card, index) => (
          <Card key={index}>{card.price}</Card>
        ))}
      </section>
    </>
  );
}
