import CustomContainer from "../../common/CustomContainer";
import Shell from "../../common/Shell";
import ProjectContainer from "../home/Projects/ProjectContainer";
import { projectList } from "../home/Projects/projectList";
const AllProjects = () => {
  return (
    <Shell>
      <CustomContainer className="py-[56px]">
        <div className="max-w-[519.78px]">
          <p className="text-[24px] mb-2">All Projects</p>
          <p
            style={{ fontFamily: "Satoshi-Regular" }}
            className="text-brand-gray"
          >
            This showcase isn't just about what I've created; it's about how
            I've crafted intuitive interfaces and captivating projects that
            elevate user engagement.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] mt-[32px]">
          {projectList.map((item) => (
            <ProjectContainer
              key={item.title}
              img={item.cover}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </CustomContainer>
    </Shell>
  );
};

export default AllProjects;
