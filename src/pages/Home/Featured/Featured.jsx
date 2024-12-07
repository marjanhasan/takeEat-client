import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  const renderDate = () => {
    const date = new Date();

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  };
  return (
    <section className="my-16 relative z-10">
      <div className="featuredImage"></div>
      <div>
        <SectionTitle title={"check it out"} subtitle={"from our menu"} />
        <div className="md:flex justify-center items-center pb-16 px-16 text-gray-200">
          <div>
            <img src={featuredImg} alt="featuredImg" />
          </div>
          <div className="md:ml-10">
            <p>{renderDate()}</p>
            <p className="uppercase py-2">where can i get some?</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
              ullam, earum officia sit non officiis repellendus atque. Earum
              dolores repellat repellendus adipisci, veritatis quae autem
              doloremque qui dolorem nesciunt nam, debitis pariatur assumenda!
              Minus, earum.
            </p>
            <button className="btn mt-2">Order now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
