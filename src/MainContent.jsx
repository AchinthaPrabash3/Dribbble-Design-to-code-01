const MainContent = ({ cards }) => {
  const card = ({ title, tags, date, img }, index) => {
    let item;
    let cardContent = (title, tags, date) => {
      return (
        <div className="p-4 bg-gradient-to-t from-slate-900/40 to-transparent backdrop-blur-sm w-full flex-none rounded-lg">
          <div className="flex mb-2 space-x-3">
            <p className="px-5 py-1  border border-white rounded-full text-white capitalize">
              {tags}
            </p>
            <p className="px-5 py-1  border border-white rounded-full text-white capitalize">
              {date}
            </p>
          </div>
          <p className="text-3xl w-3/4 leading-none font-light text-white first-letter:uppercase">
            {title}
          </p>
        </div>
      );
    };
    index == 0
      ? (item = (
          <div
            className="col-span-4 row-span-2 w-full p-2 bg-no-repeat bg-cover  flex items-end rounded-md  "
            style={{ backgroundImage: `url(${img})` }}
          >
            {cardContent(title, tags, date)}
          </div>
        ))
      : index == 1
      ? (item = (
          <div
            className={`col-span-5 w-full flex items-end rounded-md p-2 bg-no-repeat bg-cover bg-red-300`}
            style={{ backgroundImage: `url(${img})` }}
          >
            {cardContent(title, tags, date)}
          </div>
        ))
      : (item = (
          <div
            className={`col-span-5 w-full flex items-end rounded-md p-2 bg-no-repeat bg-cover bg-red-300`}
            style={{ backgroundImage: `url(${img})` }}
          >
            {cardContent(title, tags, date)}
          </div>
        ));
    return item;
  };

  return (
    <div className="h-[800px] grid grid-cols-9 grid-rows-2 gap-3 mt-10">
      {cards.map((data, index) => (index < 3 ? card(data, index) : ""))}
    </div>
  );
};

export default MainContent;
