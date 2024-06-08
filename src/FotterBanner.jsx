const FotterBanner = () => {
  return (
    <section className="w-full h-[700px]  mb-10 flex flex-col justify-between p-10 relative">
      <img
        src="https://wallpapers.com/images/hd/rustic-living-room-mansion-interior-design-96l1ffy7lp9uj72z.jpg"
        className="absolute top-0 right-0 object-cover w-full h-full z-0"
      />
      <div className="w-full h-full absolute bg-repeating-gradient top-0 right-0 z-10"></div>
      <h3 className="text-8xl font-light leading-none first-letter:uppercase text-white  p-5 rounded-xl  relative z-20 ">
        elevate your space with a distincetive touch!
      </h3>
      <button className="bg-yellow-600 z-10  place-self-end mr-16 mb-10 w-[300px] flex pl-5 pr-1 h-14 items-center justify-between rounded-full group hover:scale-95 transition-all duration-300">
        <p className="capitalize text-white text-xl">shop now</p>
        <div className="size-12 bg-white rounded-full flex items-center justify-center group-hover:rotate-180 transition-all duration-300 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="size-6 stroke-amber-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </button>
    </section>
  );
};
export default FotterBanner;
