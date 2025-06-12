import { useMediaQuery, useTheme } from "@mui/material";
import SkillBar from "../component/SkillBar";

function About() {
  const theme = useTheme();
  const isMatchSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <h3 className=" text-center text-[30px] mt-5 ">
        <strong>About Me</strong>
      </h3>
      <div
        className={` border-2 border-green-600 flex gap-10 mt-5 ${
          isMatchSm ? " flex-col-reverse " : " flex-row "
        }  `}
      >
        <div
          className={` border-2 border-yellow-600   ${
            isMatchSm ? " w-full h-[50%] " : "w-[50%]  "
          } `}
        >

            <div
            className={` ${isMatchSm?" h-[350px]  w-[clamp(100px, 4vw, 300px )]  ml-[15%] ":"h-full w-full"} border-2  bg-[url('/homeImages/first.png'),url(/homeImages/second.png),url(/homeImages/manui21.png)] bg-contain bg-center bg-no-repeat  `}
            >
          </div>
        </div>

        <div
          className={` border-2 border-yellow-600    ${
            isMatchSm ? " w-full  h-[50%]  " : "w-[50%]"
          }  `}
        >
          <div className=" flex justify-center font-bold text-[24px] ">
            <h3>Why you hire me</h3>
          </div>
          <p className=" font-thin ">
            I bring hands-on experience building scalable, full-stack web
            applications using the MERN stack. My ability to deliver clean,
            efficient code and solve complex problems makes me a valuable asset
            to any development team.
          </p>



          <div className=" flex   " >
            <div className={` border-2 border-yellow-600    ${
            isMatchSm ? " w-full  h-[50%]  " : "w-[60%]"
          }  `} >
              <SkillBar skill="HTML" per={80} />
              <SkillBar skill="Bootstrap" per={80} />
               <SkillBar skill="Tailwind CSS" per={60} />
               <SkillBar skill="React js" per={80} />
               <SkillBar skill="Express js" per={70} />
               <SkillBar skill="GitHub" per={70} />
            </div>
            <div className={` border-2 border-yellow-600    ${
            isMatchSm ? " w-full  h-[50%]  " : "w-[60%]"
          }  `} >
              <SkillBar skill="CSS" per={50} />
               <SkillBar skill="MetriUI" per={80} />
                <SkillBar skill="JavaScript" per={85} />
                <SkillBar skill="Node js" per={70} />
                 <SkillBar skill="MongoDB js" per={60} />
            </div>

          </div>




        </div>
      </div>
    </>
  );
}

export default About;
