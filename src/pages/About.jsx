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
        className={` h-[500px] border-2 border-green-600 flex gap-10 mt-5 ${
          isMatchSm ? " flex-col-reverse " : " flex-row "
        }  `}
      >
        <div
          className={` border-2 border-yellow-600   ${
            isMatchSm ? " w-full h-[50%] " : "w-[50%]  "
          } `}
        >
          <div
            className={`h-full w-full bg-[url('/homeImages/first.png'),url(/homeImages/second.png),url(/homeImages/manui21.png)] bg-contain bg-center bg-no-repeat  `}
          ></div>
        </div>

        <div
          className={` border-2 border-yellow-600    ${
            isMatchSm ? " w-full  h-[50%]  " : "w-[50%]"
          }  `}
        >
          <h3>Why you hire me</h3>
          <p>
            You should hire me as a UI/UX designer because I have a strong eye
            for design, a deep understanding of user psychology, and a track
            record of creating intuitive and visually appealing interfaces.
          </p>
          <div>
            < SkillBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
