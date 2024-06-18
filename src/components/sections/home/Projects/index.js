import { useNavigate } from "react-router";
import CustomButton from "../../../common/CustomButton";
import CustomContainer from "../../../common/CustomContainer";
import ProjectContainer from "./ProjectContainer";
import { projectList } from "./projectList";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <CustomContainer className="py-[32px] lg:py-[56px]">
      <div className="flex justify-between items-center mb-[32px]">
        <div className="max-w-[548.52px]">
          <p className="text-[20px] md:text-[24px] mb-2">Featured Projects</p>
          <p
            style={{ fontFamily: "Satoshi-Regular" }}
            className="text-brand-gray"
          >
            This showcase isn't just about what I've created; it's about how
            I've crafted intuitive interfaces and captivating projects that
            elevate user engagement.
          </p>
        </div>
        <CustomButton
          type="solid"
          title="View all"
          onClick={() => navigate("/all-projects")}
          className="py-[12px] px-[20px] hidden md:block"
        />
      </div>
      <div className="flex flex-col gap-[32px]">
        {projectList.map((item) => (
          <ProjectContainer
            key={item.title}
            img={item.cover}
            title={item.title}
            desc={item.desc}
            live={item.live}
          />
        ))}
      </div>
      <div className="w-fit mx-auto md:hidden mt-[20px]">
        <CustomButton
          type="solid"
          title="View all"
          onClick={() => navigate("/all-projects")}
          className="py-[12px] px-[20px]"
        />
      </div>
    </CustomContainer>
  );
};

export default Projects;
