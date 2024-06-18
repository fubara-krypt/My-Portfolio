import CustomButton from "../../common/CustomButton";
import CustomContainer from "../../common/CustomContainer";

const Hero = () => {
  const actions = [
    {
      title: "Let’s Talk",
      type: "solid",
      onClick: () =>
        window.open(
          "https://calendar.app.google/3FBsrhDA7XXjcM4Y7",
          "_blank"
        ),
    },
    {
      title: "My Resume",
      type: "outline",
      onClick: () =>
        window.open(
          "https://drive.google.com/file/d/1SMRJkBbDsq4EInERu7cxBo6kRNUrkKNQ/view?usp=sharing",
          "_blank"
        ),
    },
  ];
  return (
    <CustomContainer className="py-[32px] lg:py-[80px]">
      <div className="max-w-[563.7px] flex flex-col gap-[20px]">
        <p className="text-[32px] lg:text-[48px]">
          Hi, I’m Fubara. I’m a Product Designer and Frontend Developer.
        </p>
        <p
          className="lg:text-[20px] text-brand-gray"
          style={{ fontFamily: "Satoshi-Regular" }}
        >
          From conceptualization to execution, I approach each project with
          meticulous attention to detail, striving to craft solutions that not
          only meet the needs of users but also exceed expectations.
        </p>
        <div className="flex gap-[16px]">
          {actions.map((item) => (
            <CustomButton
              key={item.title}
              type={item.type}
              title={item.title}
              onClick={item.onClick}
              className="py-[12px] md:py-[16px] px-[20px] md:px-[28px]"
            />
          ))}
        </div>
      </div>
    </CustomContainer>
  );
};

export default Hero;
