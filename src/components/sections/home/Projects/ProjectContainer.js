import cover from "../../../../assets/images/project-cover.png";
import CustomButton from "../../../common/CustomButton";

const ProjectContainer = ({ img, title, desc, live }) => {
  return (
    <div className="border-[2px] rounded-[8px] border-black">
      <div className="w-full h-[400px] border-b-[2px] border-black">
        <img
          src={img ?? cover}
          style={{ objectFit: "scale-down" }}
          className="w-full h-full rounded-t-[8px] transition duration-300 ease-in-out"
          alt={`${title} project cover`}
        />
      </div>
      <div className="px-[32px] py-[24px] flex justify-between items-center flex-wrap gap-[12px] md:gap-[20px]">
        <div className="max-w-[602.19px]">
          <p className="text-[24px] mb-2">{title}</p>
          <p style={{ fontFamily: "Satoshi-Regular" }}>{desc}</p>
        </div>
        <div className="w-full lg:w-fit">
          <CustomButton
            title="Visit Live"
            onClick={() => window.open(live, "_blank")}
            type="solid"
            className="w-full lg:px-[49px] py-[12px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
