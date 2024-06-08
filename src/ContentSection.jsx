import CategorySelect from "./CategorySelect";
import MainContent from "./MainContent";
import OtherContent from "./OtherContent";

const Content = () => {
  const cards = [
    {
      img: "https://images.pexels.com/photos/3767442/pexels-photo-3767442.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "how a visual artist redefines success in graphic design",
      tags: "event",
      date: "April 13, 2024",
    },
    {
      img: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "how to write content about your photographs",
      tags: "event",
      date: "April 13, 2024",
    },
    {
      img: "https://images.pexels.com/photos/1181719/pexels-photo-1181719.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "travelling as a way of self-discovery and progress",
      tags: "event",
      date: "April 13, 2024",
    },
    {
      img: "https://images.pexels.com/photos/3255245/pexels-photo-3255245.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "designing for well-being-promotion acoustic and visual comfort",
      tags: "design",
      date: "April 13, 2024",
    },
    {
      img: "https://images.pexels.com/photos/18056912/pexels-photo-18056912/free-photo-of-drink-in-glass-and-houseplant-in-pot-on-table.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "autex acoustic offers new Revit library on BMIContent.com",
      tags: "design",
      date: "April 13, 2024",
    },
    {
      img: "https://images.pexels.com/photos/1701747/pexels-photo-1701747.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "the unseen of spending three years at Pixelgrade",
      tags: "design",
      date: "April 13, 2024",
    },
    {
      img: "https://images.pexels.com/photos/4566718/pexels-photo-4566718.jpeg?auto=compress&cs=tinysrgb&w=400",
      title:
        "crafting Connections, Designing Spaces, and Cultivating Community",
      tags: "design",
      date: "April 13, 2024",
    },
    {
      img: "https://images.pexels.com/photos/4255717/pexels-photo-4255717.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "how a caravan awning insired an innovative acoustic system",
      tags: "design",
      date: "April 13, 2024",
    },
    {
      img: "https://images.pexels.com/photos/7784602/pexels-photo-7784602.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "how a visual artist redefines success in graphicdesgn",
      tags: "design",
      date: "April 13, 2024",
    },
    {
      img: "https://images.pexels.com/photos/7590350/pexels-photo-7590350.jpeg?auto=compress&cs=tinysrgb&w=400",
      title:
        "a meal for the senses: the value of acoustic treatment in restaurants",
      tags: "design",
      date: "April 13, 2024",
    },
    {
      img: "https://images.pexels.com/photos/12401710/pexels-photo-12401710.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "lessons and insights from 8 years of Pexelgrade",
      tags: "design",
      date: "April 13, 2024",
    },
    {
      img: "https://images.pexels.com/photos/2479946/pexels-photo-2479946.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "how to write content about your photographs",
      tags: "design",
      date: "April 13, 2024",
    },
  ];

  return (
    <section className="pb-20">
      <CategorySelect />
      <div className="px-12">
        <MainContent cards={cards} />
        <OtherContent cards={cards} />
      </div>
      <p className="first-letter:uppercase mx-auto w-fit my-5 text-2xl relative font-thin">
        and that's not all,{" "}
        <a
          href="#"
          className="capitalize relative after:absolute after:w-full after:h-0.5 after:bottom-0 after:bg-amber-400 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-300 text-amber-400 font-normal"
        >
          view more
        </a>
      </p>
    </section>
  );
};

export default Content;
