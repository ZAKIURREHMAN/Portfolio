import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Home() {
  const theme = useTheme();
  const isMatchSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMatchMd = useMediaQuery(theme.breakpoints.down("md"));

  const [text] = useTypewriter({
    words: ["Zaki Ur ", "  Rehman"],
    loop: {},
  });

  return (
    <div>
      <div
        className={`border-2 border-green-800 h-[850px] flex ${
          isMatchSm ? "w-[100%] flex-col-reverse" : "flex-row"
        } `}
      >
        <div className="border-2 border-green-800 h-full w-[100%] flex items-center">
          <div className="border-2 border-green-800 h-[550px] w-full flex justify-end">
            <div
              className={`border-2 border-yellow-400 ${
                isMatchSm ? "w-[94%]" : "w-[90%]"
              } `}
            >
              <div className="font-great font-normal not-italic text-[35px]">
                Hello, I am
              </div>
              <div
                className={`h-[51px] ${
                  isMatchSm ? "w-[60%]" : isMatchMd ? "w-[70%]" : "w-[45%]"
                } border-2 mt-3 bg-[#9024B6] rounded-[12px] flex justify-center items-center font-oswald text-[21px] text-white`}
              >
                <span>{text}</span>
                <Cursor />
              </div>
              <div
                className={` border-2 border-green-700 font-antonCs ${
                  isMatchSm
                    ? "text-[42px]"
                    : isMatchMd
                    ? "text-[50px]"
                    : "text-[70px]"
                } text-[#9024B6] mt-4 `}
              >
                <strong>MERN STACK</strong>
              </div>
              <div
                className={`${
                  isMatchSm
                    ? "text-[42px]"
                    : isMatchMd
                    ? "text-[50px]"
                    : "text-[70px]"
                } font-archivo `}
              >
                <p>Developer</p>
              </div>
              <div>
                <p>
                  Crafting seamless web experiences with the <br /> power of the
                  MERN stack: MongoDB, <br /> Express.js, React, and Node.js.
                </p>
              </div>
              <div className=" border-2 mt-7 h-[33px] w-[159px] flex justify-center items-center bg-[#9024b6] cursor-pointer rounded-[10px] font-archivo hover:bg-[#7a3b90] text-white">
                <button>
                  {" "}
                  <strong>Hire me</strong>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 border-yellow-300 h-full w-[100%] flex justify-center items-center ">
          <div
            className={`border-2 border-pink-700  ${
              isMatchSm ? " h-[100%] w-[70%] " : " h-[550px] w-full "
            } `}
          >
            
            <div
              className={`h-full w-full bg-[url('/homeImages/first.png'),url(/homeImages/second.png),url(/homeImages/manui1.png)] bg-contain bg-center bg-no-repeat  `}
            >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
