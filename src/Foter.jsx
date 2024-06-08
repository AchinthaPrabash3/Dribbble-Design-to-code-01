import { data } from "autoprefixer";
import {
  FaSquareFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

const Fotter = () => {
  let icons = [
    <FaSquareFacebook />,
    <FaTwitter />,
    <FaInstagram />,
    <FaLinkedin />,
  ];

  const bottomNav = (title, data, margin) => {
    return (
      <div style={{ marginLeft: `${margin}` }}>
        <h4 className="font-semibold capitalize">{title}</h4>
        <ul className="space-y-2 mt-2">
          {data.map((elements) => (
            <li className="capitalize font-thin">{elements}</li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <section className="px-24">
      <div className="flex items-center justify-between border-b pb-12">
        <div className="text-7xl font-light -space-y-3 *:capitalize">
          <p>webel</p>
          <p>ferniture</p>
        </div>
        <div className="text-5xl space-y-2 font-light">
          <p>+62833 090 7275</p>
          <p className="tracking-wide">hellweble@gmail.com</p>
        </div>
      </div>
      <div className="py-10 flex justify-between items-start">
        <p className="w-[400px] text-2xl font-extralight first-letter:uppercase">
          join us at weble and descover insparation for your dream home. Let's
          create spaces that meet your needs and celibrate your uniqueness
        </p>
        <div className="flex space-x-12 pr-12">
          {bottomNav("compay", ["product", "brand", "partners", "sitemap"], 0)}
          {bottomNav(
            "compay",
            ["email", " terms and condition", "privacy policy"],
            "70px"
          )}
          <div>
            <h4 className="capitalize font-semibold">location</h4>
            <p className="font-thin">
              4140 Parker Rd. Allentown, <br /> New Mexico 31134
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-5">
        <h5 className="text-xl font-light">CopyRight © Weble 2023</h5>
        <ul className="flex space-x-3">
          {icons.map((icon) => (
            <li className="*:size-7"> {icon}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Fotter;
