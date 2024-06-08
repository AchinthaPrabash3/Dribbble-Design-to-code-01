const OtherContent = (props) => {
  const cardData = props.cards;
  const card = ({ title, tags, date, img }) => {
    return (
      <div className="w-full hover:scale-[0.98] duration-200 transition-all">
        <img
          src={img}
          alt=""
          className="w-full h-[381.344px] object-cover rounded-lg"
        />
        <div className="px-4 pb-3">
          <div className="flex *:px-5 *:py-1 *:border *:border-black *:rounded-full my-4 space-x-2 *:cursor-pointer">
            <p className="hover:scale-95 capitalize transition-all duration-300 ">
              {tags}
            </p>
            <p className="hover:scale-95 capitalize transition-all duration-300 ">
              {date}
            </p>
          </div>
          <h3 className="text-3xl first-letter:uppercase leading-none font-light">
            {title}
          </h3>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-3 gap-5 mt-12">
      {cardData.map((data, i) => (i >= 3 ? card(data) : ""))}
    </div>
  );
};
export default OtherContent;
