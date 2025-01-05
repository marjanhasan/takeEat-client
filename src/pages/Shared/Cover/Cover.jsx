const Cover = ({ img, title, description, margin = "" }) => {
  return (
    <section
      className={`relative h-[600px] w-full ${margin} z-10 flex justify-center items-center`}
    >
      <div
        className={`absolute h-full w-full bg-cover bg-center bg-no-repeat -z-10`}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="uppercase w-[75%] h-[40%] flex flex-col justify-center mx-auto my-auto bg-[#151515] text-center opacity-70">
        <h2 className="text-4xl z-10 text-white">{title}</h2>
        <p className="text-sm mt-2 px-10 text-white font-semibold">
          {description}
        </p>
      </div>
    </section>
  );
};

export default Cover;
