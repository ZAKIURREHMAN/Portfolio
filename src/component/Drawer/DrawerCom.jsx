import { Box } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { NAV_ITEMS } from '../../constant/Navigation/navigation';
import { useContext } from 'react';
import { counterContext } from '../../context/CreateContext/CreateContext';

function DrawerCom() {
  const {drawer,setDrawer} = useContext(counterContext)
  return (
    <Drawer open={drawer} onClose={()=>setDrawer(!drawer)}  >


      <Box sx={{width:'180px',fontSize:'20px',backgroundColor:'#2C2C2C', height:'100%',   }} >

        <Box sx={{marginTop:'20px',marginLeft:'15px'}} >
          {
            NAV_ITEMS.map((item)=>(
              <Box key={item.id} sx={{display:'flex', gap:"20px", marginTop:'20px', cursor:'pointer' }} >
                <Box sx={{color:"#C9C9C9"}} >
                  <i className={item.icon} ></i>
                </Box>
                <Box sx={{color:'#969596'}} >
                  {item.name}
                </Box>
              </Box>
            ))
          }
        </Box>

      </Box>


    </Drawer>
  )
}

export default DrawerCom