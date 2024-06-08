const CategorySelect = () => {
  const btnData = [
    "all categories",
    "community",
    "awards",
    "event",
    "design",
    "design",
    "interviews",
  ];

  const m = (index) => {
    const btnContainer = document.getElementById("btn-container");
    const btns = btnContainer.querySelectorAll("button");
    btns.forEach((btn, i) => {
      if (i == index) {
        btn.classList.add("bg-amber-500", "text-white", "shadow-xl");
        btn.classList.remove("border-black");
      } else {
        btn.classList.remove("bg-amber-500", "text-white", "shadow-xl");
        btn.classList.add("border-black");
      }
    });
  };
  return (
    <div className="mx-auto w-fit space-x-3" id="btn-container">
      {btnData.map((data, index) =>
        index == 0 ? (
          <button
            onClick={() => m(index)}
            key={index}
            className="px-5 py-2  hover:scale-95 capitalize text-xl border rounded-full bg-amber-500 text-white transition-all duration-300 shadow-xl"
          >
            {data}
          </button>
        ) : (
          <button
            onClick={() => m(index)}
            key={index}
            className="px-5 py-2 border-black hover:scale-95 capitalize text-xl border rounded-full transition-all duration-300"
          >
            {data}
          </button>
        )
      )}
    </div>
  );
};
export default CategorySelect;
