import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppBar from "@mui/material/AppBar";
import { NAV_ITEMS } from "../../constant/Navigation/navigation.js";
import DrawerCom from "../Drawer/DrawerCom.jsx";
import { useState, useContext } from "react";
import { counterContext } from "../../context/CreateContext/CreateContext.js";

function Navbar() {
  const [value, setValue] = useState(1);
  const { drawer, setDrawer, toggle, setToggle } = useContext(counterContext);

  const theme = useTheme();
  const isMatchLg = useMediaQuery(theme.breakpoints.down("lg"));
  const isMatchMd = useMediaQuery(theme.breakpoints.down("md"));
  const isMatchSm = useMediaQuery(theme.breakpoints.down("sm"));

  const handleTab = (e, value) => {
    setValue(value);
  };

  return (
    <AppBar
      position="static"
      sx={{
        marginTop: "69px",
        backgroundColor: toggle ? "black" : "white",
        boxShadow: "0px 0px 0px white",
        border: "2px solid red",
      }}
    >
      <Box
        sx={{
          height: "100px",
          display: "flex",
          backgroundColor: toggle ? "black" : "white",
        }}
      >
        {/* Logo Section */}
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
            <img src="./logo/logo.jpg" alt="Logo" className="h-full w-full" />
          </Box>
        </Box>

        {/* Tabs or Drawer Section */}
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
          {isMatchSm ? (
            <DrawerCom />
          ) : (
            <Box sx={{ width:'100%', display:'flex ',justifyContent:'center' }} >
            <Box>
              <Tabs
                textColor="inherit"
                indicatorColor="secondary"
                value={value}
                onChange={handleTab}
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
                  key={item.id}
                  value={item.id}
                  label={item.name}
                  sx={{
                    margin: "0px auto",
                    width: "50px",
                    maxWidth: "120px",
                    minWidth: isMatchMd
                    ? "58px"
                    : isMatchLg
                    ? "90px"
                    : "165px",
                  }}
                  />
                ))}
              </Tabs>
                </Box>
            </Box>
          )}
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
          {/* Download CV Button */}
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
              }`}
            >
              DOWNLOAD CV
            </button>
          </Box>

          {/* Dark Mode Toggle */}
          <Box
            sx={{
              color: "black",
              fontSize: isMatchLg ? "22px" : "30px",
            }}
          >
            <i
              className="fa-solid fa-moon"
              onClick={() => setToggle(!toggle)}
            ></i>
          </Box>

          {/* Drawer Icon (Small screens) */}
          {isMatchSm && (
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
                }`}
                onClick={() => setDrawer(!drawer)}
              ></i>
            </Box>
          )}
        </Box>
      </Box>
    </AppBar>
  );
}

export default Navbar;
