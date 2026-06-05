import { Canvas } from "@react-three/fiber";
import { EducationAndCerts } from "../constants";

const Education = () => {
  return (
    <section className="c-space my-20">
      <div className="w-full text-white">
        <h3 className="head-text">My Education</h3>
      </div>
      <div className="education-container">
        <div className="education-canvas">
          <Canvas></Canvas>
        </div>
        <div className="education-content">
          <div className="sm:py-10 py-5 sm:px-5 px-2.5">
            {EducationAndCerts.map(
              ({ id, name, pos, duration, title, icon, animation }) => (
                <div key={id} className="education-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2 ">
                    <div className="education-content_logo">
                      <img src={icon} alt="logo" className="w-full h-full" />
                    </div>
                    <div className="education-content_bar" />
                  </div>
                  <div className="sm:p-5 px-2.5 py-5">
                    <p className=" font-bold text-white">{name}</p>
                    <p className="text-sm text-neutral-400 mb-5 ">{pos} -- {duration}</p>
                    <p className="group-hover:text-white transition ease-in-out duration-500">{title}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Education;
