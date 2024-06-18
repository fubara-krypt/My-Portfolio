import profile from "../../assets/icons/profile.svg";
import CustomButton from "./CustomButton";
import { useLocation, useNavigate } from "react-router-dom";
import CustomContainer from "./CustomContainer";
import { Drawer, DrawerContent } from "@chakra-ui/react";
import { useState } from "react";
import close from "../../assets/icons/close.svg";
import hamburger from "../../assets/icons/hamburger.svg";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const getCurrentTitle = () => {
    switch (location.pathname) {
      case "/":
        return "home";
      case "/all-projects":
        return "PROJECTS";
      case "/about":
        return "ABOUT";
      case "/contact":
        return "CONTACT";
      default:
        return "";
    }
  };

  const pages = [
    {
      title: "home",
      onclick: () => navigate("/"),
    },
    {
      title: "about",
      onclick: () => navigate("/about"),
    },
    {
      title: "projects",
      onclick: () => navigate("/all-projects"),
    },
    {
      title: "contact",
      onclick: () => navigate("/contact"),
    },
  ];

  return (
    <CustomContainer className="flex items-center justify-between py-[24px] sticky top-0 bg-white">
      <div
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          navigate("/");
        }}
        className="cursor-pointer"
      >
        <img src={profile} alt="profile avatar" />
      </div>
      <p className="uppercase text-[18px]">{getCurrentTitle()}</p>
      <>
        <CustomButton
          title="MENU"
          className="py-[16px] px-[28px] hidden lg:block"
          onClick={() => setIsOpen(true)}
        />
        <div className="lg:hidden" onClick={() => setIsOpen(true)}>
          <img src={hamburger} alt="hamburger" />
        </div>
      </>
      <Drawer
        isOpen={isOpen}
        size="full"
        placement="top"
        onClose={() => setIsOpen(false)}
      >
        <DrawerContent
          bgColor="rgba(0, 0, 0, 0.9)"
          justifyContent="center"
          height="100vh"
        >
          <div
            className="flex justify-end w-[80%] cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <img
              src={close}
              alt="close icon"
              className="max-w-[40px] lg:max-w-[56px]"
            />
          </div>
          <ul className="text-center flex flex-col gap-[40px]">
            {pages.map((item, index) => (
              <li
                key={item.title}
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  item.onclick();
                }}
              >
                <p className="text-[20px] text-[#98A2B3] mb-2 line-through">
                  {index + 1}
                </p>
                <p
                  className={`text-[36px] lg:text-[64px] uppercase text-white hover:line-through transition duration-300 ease-in-out cursor-pointer ${
                    getCurrentTitle().toLocaleLowerCase() ===
                    item.title.toLocaleLowerCase()
                      ? "line-through"
                      : ""
                  }`}
                >
                  {item.title}
                </p>
              </li>
            ))}
          </ul>
        </DrawerContent>
      </Drawer>
    </CustomContainer>
  );
};

export default Navbar;
