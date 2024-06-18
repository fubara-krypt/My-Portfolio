import Shell from "../../common/Shell";
import me from "../.././../assets/images/stage.jpeg";
import CustomContainer from "../../common/CustomContainer";
import Section from "./Section";
import education from "./education.json";
import experience from "./experience.json";

const About = () => {
  return (
    <Shell>
      <CustomContainer className="py-[40px]">
        <div>
          <div className="lg:h-[650px] mb-[32px] lg:mb-[40px]">
            <img
              src={me}
              alt="fubara singing on staging"
              className="w-full h-full object-cover rounded-[8px]"
            />
          </div>
          <div>
            <p className="text-[24px] lg:text-[48px] mb-[8px] lg:mb-[12px]">
              Hello world
            </p>
            <div className="text-[16px] lg:text-[20px] text-[#1D2939]">
              <p style={{ fontFamily: "Satoshi-Regular" }}>
                I am passionate about creating innovative, user-friendly
                products that enable seamless community and cohort management. I
                have spearheaded the development of various product that
                achieved a 29% increase in user engagement through strategic
                planning and execution.
              </p>
              <br />
              <p style={{ fontFamily: "Satoshi-Regular" }}>
                With a BSc in Counseling Psychology from the University of Port
                Harcourt, I apply design thinking principles and human behavior
                knowledge to craft intuitive interfaces that enhance the overall
                user experience. I iterate designs based on user feedback,
                ensuring a user-friendly journey. I also lead cross-functional
                teams, fostering collaboration among developers, marketers, and
                customer support, and advocate for innovation, integrating
                cutting-edge features that set the product apart.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[56px] grid grid-cols-1 lg:grid-cols-2 gap-[64px] lg:gap-[105px]">
          <Section title="Education & Certifications" list={education} />
          <Section title="Work Experience" list={experience} />
        </div>
      </CustomContainer>
    </Shell>
  );
};

export default About;
