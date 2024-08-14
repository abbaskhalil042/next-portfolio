import ContactMe from "./components/ContactMe";
import GetInTouch from "./components/GetInTouch";
import Hero from "./components/Hero";
import HowIWorked from "./components/HowIWorked";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";


const page = () => {
  return (
    <main className=" w-full h-screen m-auto  ">
      {/* <div className="w-1/6 text-white h-screen ">
        <Sidebar />
      </div> */}
      {/* <div className=" w-5/6  h-screen"> */}
      <div>
        <Hero />
        <Projects /> 
        <Skills />
        <HowIWorked/>
        <GetInTouch/>
        <ContactMe/>
      </div>
      {/* </div> */}
    </main>
  );
};
export default page;
