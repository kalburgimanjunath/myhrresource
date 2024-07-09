import { Link } from "react-router-dom";
export default function Navbar() {
  const menuitems = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About Us", link: "/aboutus" },
    { id: 3, title: "Careers", link: "/careers" },
    { id: 4, title: "Contact Us", link: "/contactus" },
  ];
  return (
    <div className="flex fixed top-0 bg-white shadow-lg w-full left-0">
      {menuitems &&
        menuitems.map((item) => {
          return (
            <div className="p-2">
              <Link to={item.link}>{item.title}</Link>
            </div>
          );
        })}
    </div>
  );
}
