import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppBar from "@mui/material/AppBar";
import { NAV_ITEMS } from "../../constant/Navigation/navigation.js";
import DrawerCom from "../Drawer/DrawerCom.jsx";
import { useState } from "react";
import { useContext } from "react";
import { counterContext } from "../../context/CreateContext/CreateContext.js";
function Navbar() {
<<<<<<< HEAD
  const [value, setValue] = useState(1);
  const { drawer, setDrawer, toggle, setToggle } = useContext(counterContext);
  const theme = useTheme();
  const isMatchLg = useMediaQuery(theme.breakpoints.down("lg"));
  const isMatchMd = useMediaQuery(theme.breakpoints.down("md"));
  const isMatchSm = useMediaQuery(theme.breakpoints.down("sm"));

  const handelTab = (e, value) => {
    setValue(value);
  };

=======
    const [value,setValue] = useState(1)
    const {drawer,setDrawer} = useContext(counterContext)
    
    const theme = useTheme();
    const isMatchLg = useMediaQuery(theme.breakpoints.down("lg"));
    const isMatchMd = useMediaQuery(theme.breakpoints.down("md"));
    const isMatchSm = useMediaQuery(theme.breakpoints.down('sm'))    
  const handelTab = (e,value)=>{
    setValue(value)
}
>>>>>>> 5f1ac0b536688e8d6c63f9a4478d58cb1ef99961
  return (
    <AppBar
    position="static"
      sx={{
        marginTop: "69px",
        backgroundColor: toggle ? "black" : "white",
        boxShadow: "0px 0px 0px white",
        border:'2px solid red',

      }}
    >
      <Box
        sx={{
          height: "100px",
          display: "flex",
          backgroundColor: toggle ? "black" : "white",
        }}
      >
        <Box
          sx={{
            width: isMatchSm
              ? "110px"
              : isMatchMd
              ? "110px"
              : isMatchLg
              ? "160px"
              : "247px",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Box sx={{ height: "100%", width: "100px" }}>
            <img
              src="./logo/logo.jpg"
              alt="Logo"
              className=" h-full w-full  "
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "247px",
            flexGrow: 1,
            gap: isMatchLg ? "15px" : "",
            alignItems: "center",
            fontSize: "16px",
            color: "black",
          }}
        >
<<<<<<< HEAD
          {isMatchSm ? (
            <DrawerCom />
          ) : (
            <>
              <Tabs
                textColor="inherit"
                indicatorColor="secondary"
                value={value}
                onChange={(e, value) => handelTab(e, value)}
=======
          {
            isMatchSm?<DrawerCom/>:
            <>
            <Tabs
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e,value)=>handelTab(e,value)}
            sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink:1
            }}
            >
            {NAV_ITEMS.map((item) => (
                <Tab value={item.id}
>>>>>>> 5f1ac0b536688e8d6c63f9a4478d58cb1ef99961
                sx={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 1,
                }}
              >
                {NAV_ITEMS.map((item) => (
                  <Tab
                    value={item.id}
                    sx={{
                      margin: "0px auto",
                      width: "50px",
                      maxWidth: "100px",
                      // minWidth:'60px'
                      minWidth: isMatchMd
                        ? "58px"
                        : isMatchLg
                        ? "90px"
                        : "115px",
                    }}
                    key={item.id}
                    label={item.name}
                  ></Tab>
                ))}
              </Tabs>
            </>
<<<<<<< HEAD
          )}
=======
          }
>>>>>>> 5f1ac0b536688e8d6c63f9a4478d58cb1ef99961
        </Box>
        <Box
          sx={{
            width: isMatchSm
              ? "200px"
              : isMatchMd
              ? "130px"
              : isMatchLg
              ? "140px"
              : "247px",
            display: "flex",
            justifyContent: isMatchLg ? "space-evenly" : "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              height: "33px",
              width: isMatchLg ? "110px" : "159px",
              borderRadius: "10px",
              backgroundColor: "#9024B6",
            }}
          >
            <button
              className={`w-full h-full ${
                isMatchMd ? "text-[11px]" : "text-[13px]"
              } `}
            >
              {" "}
              DOWNLOAD CV
            </button>
          </Box>
          <Box
            sx={{
              color: "black",
              fontSize: isMatchLg ? "22px" : "30px",
            }}
          >
            <i
              className="fa-solid fa-moon"
              onClick={() => setToggle(!toggle)}
            ></i>{" "}
          </Box>
          {isMatchSm ? (
            <Box
              sx={{
                color: "black",
                fontSize: "20px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              <i
                className={`fa-regular fa-chart-bar ${
                  isMatchSm ? " text-[30px] " : ""
                } `}
                onClick={() => setDrawer(!drawer)}
              ></i>
            </Box>
          ) : (
            ""
          )}
        </Box>
      </Box>
    </AppBar>
  );
}

export default Navbar;
