const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-8">
      <h2 className="text-yellow-600 mb-2 text-base">{title}</h2>
      <h4 className="text-3xl uppercase border-y-4 py-4">{subtitle}</h4>
    </div>
  );
};

export default SectionTitle;
