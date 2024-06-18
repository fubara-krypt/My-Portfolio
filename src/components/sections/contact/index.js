import CustomContainer from "../../common/CustomContainer";
import Shell from "../../common/Shell";
import clock from "../../../assets/icons/clock.svg";
import CustomButton from "../../common/CustomButton";

const Contact = () => {
  const actions = [
    {
      title: "Book a call",
      type: "solid",
      onClick: () =>
        window.open(
          "https://calendar.app.google/3FBsrhDA7XXjcM4Y7",
          "_blank"
        ),
    },
    {
      title: "Send a mail",
      type: "outline",
      onClick: () => window.open('mailto:fubaraworks@gmail.com'),
    },
  ];

  return (
    <Shell>
      <CustomContainer className="py-[89.5px]">
        <div className="mb-[32px] w-fit mx-auto lg:mx-0">
          <img src={clock} alt="clock icon" />
        </div>
        <div className="max-w-[700px] flex flex-col gap-[32px]">
          <p className="text-[32px] lg:text-[64px] leading-[39.67px] lg:leading-[79.33px]">
            Contacting me is easy, Just book a call
          </p>
            <p style={{ fontFamily: "Satoshi-Regular" }} className="text-[16px] lg:text-[20px]">
            Select a preferred day and time you’d like us to talk and a meeting
            will be created automatically, Hoping to hear from you soon cheers.
          </p>
          <div className="flex justify-between lg:justify-start gap-[24px]">
            {actions.map((item) => (
              <CustomButton
                key={item.title}
                type={item.type}
                title={item.title}
                onClick={item.onClick}
                className="py-[16px] px-[20px]"
              />
            ))}
          </div>
        </div>
      </CustomContainer>
    </Shell>
  );
};

export default Contact;
