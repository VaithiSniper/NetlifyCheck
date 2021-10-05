import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function ScrollableTabsButtonVisible(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const funct = props.tabParentCallbackName;
  const fn = (event) => {
    const tabName = event.target.classList[4];
    funct(tabName);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: 720,
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
        <Tab label="Chess" style={{color:"white"}} onClick={fn} />
        <Tab label="Hackathon" style={{color:"white"}} onClick={fn} />
        <Tab label="ChessA" style={{color:"white"}} onClick={fn} />
        <Tab label="ChessB" style={{color:"white"}} onClick={fn} />
        <Tab label="ChessC" style={{color:"white"}} onClick={fn} />
        <Tab label="HackathonB" style={{color:"white"}} onClick={fn} />
        <Tab label="HackathonC" style={{color:"white"}} onClick={fn} />
      </Tabs>
    </Box>
  );
}
