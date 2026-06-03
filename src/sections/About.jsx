import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import { useState } from "react";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("seffinemohamed470@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className=" c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full ">
        <div className="col-span-1 xl:row-span-3 ">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-69 h-fit object-contain"
            />
            <div>
              <p className="grid-headtext"> Hi I'm Mohamed</p>
              <p className="grid-subtext">
                {" "}
                with more than 2 years of project based learning, I have honed
                my skills in Software Development and Cybersecurity, with a
                focus on red teaming and penetration testing{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:w-69 h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in offensive security, building my tech stack
                around the MITRE ATT&CK framework to emulate real-world
                adversary behaviors with precision
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-81.5 h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={(0, 5)}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                // labelsData={[{lat:33.573068, lng:-7.677282, text:"I'm here!", color:"white", size:100}]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                {" "}
                i Work remotely Across all timezones
              </p>
              <p className="grid-subtext">
                I'm based in Morocco, with remote work available
              </p>
              <Button
                name="contact me"
                isBeam={true}
                containerClass="w-full mt-10"
              ></Button>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h[266px] h-fit object-contain "
            />
            <div>
              <p className="grid-headtext">My Passion for Cybersecurity</p>
              <p className="grid-subtext">
                {" "}
                I'm driven by the intellectual challenge of staying one step
                ahead—anticipating an attacker's next move, understanding their
                tradecraft, and continuously sharpening my offensive skills.
                Every engagement, lab, or CTF feels like solving a high-stakes
                puzzle where the reward is not just a flag, but a deeper insight
                into how systems fail and how defenders can evolve. Offensive
                security isn't just a discipline for me; it's a mindset of
                curiosity, persistence, and creative problem-solving.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-31.5 sm:h-69 h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white wrap-break-word min-w-0">
                  seffinemohamed470@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
