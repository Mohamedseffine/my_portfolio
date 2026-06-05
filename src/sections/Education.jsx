import { Canvas } from "@react-three/fiber";

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
            
          </div>
        </div>
      </div>
    </section>
  );
};
export default Education;
