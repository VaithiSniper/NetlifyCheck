import * as React from "react";
//react
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
//material ui imports


export default function ScrollableTabsButtonVisible(props) {
  const [value, setValue] = React.useState(0);
  var i=0;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
//Tab state
//callback
  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: 300,
        bgcolor: "transparent",
        mx: "auto",
        paddingBottom: "3%"
      }}
    >
    
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 }
          },
          color:"white"
        }}
      >
        {["event1","event2","event3","event4","event5"].map((item)=><Tab label={item} key={i++} style={{color: "white"}}/>)}
      </Tabs>

    </Box>
  );
}
