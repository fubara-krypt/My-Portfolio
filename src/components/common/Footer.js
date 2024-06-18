import CustomContainer from "./CustomContainer";

const Footer = () => {
  const socials = [
    {
      title: "EMAIL",
      link: "mailto:fubaraworks@gmail.com",
    },
    {
      title: "RESUME",
      link: "https://drive.google.com/file/d/1SMRJkBbDsq4EInERu7cxBo6kRNUrkKNQ/view?usp=sharing",
    },
    {
      title: "LINKEDIN",
      link: "https://www.linkedin.com/in/fubara-dickson/",
    },
    {
      title: "TWITTER",
      link: "https://x.com/iamfubara",
    },
    {
      title: "GITHUB",
      link: "https://github.com/fubara-krypt",
    },
    {
      title: "DRIBBBLE",
      link: "https://dribbble.com/Fubara_Dickson",
    },
    {
      title: "BEHANCE",
      link: "https://www.behance.net/theophidickson",
    },
  ];
  return (
    <CustomContainer className="py-[32px] lg:py-[72px]">
      <div className="border border-black" />
      <div className="mt-[35px] flex flex-col lg:flex-row justify-between">
        <p className="text-center lg:text-left mb-[32px] lg:mb-0">© 2024 Fubara Dickson.</p>
        <ul className="flex gap-[20px] lg:gap-[32px] flex-wrap justify-center">
          {socials.map((item) => (
            <li>
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </CustomContainer>
  );
};

export default Footer;
