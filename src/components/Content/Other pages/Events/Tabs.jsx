import React, { useEffect } from "react";
//react
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
//material ui imports
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
//firestore imports
const firebaseApp = initializeApp({
  apiKey: "AIzaSyAZrvXqspVdjVgWWtSmjp7UKpjHotxvJD0",
  authDomain: "sdic-22b69.firebaseapp.com",
  projectId: "sdic-22b69",
});
//firebase and firestore setup
const db = getFirestore();
//firebase events retrival
//collection ref

// async function retrival() {
//   const querySnapshot = await getDocs(collection(db, "events_test"));
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     const data = doc.data();
//     arrayOfEventsTab.push(data);
//     console.log(arrayOfEventsTab);
//   });
// }

export default function ScrollableTabsButtonVisible(props) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.selectedTab(props.data[newValue]);
  };
  //Tab state
  //callback
  if (props.data) {
    return (
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: 300,
          bgcolor: "transparent",
          mx: "auto",
          paddingBottom: "3%",
        }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='scrollable'
          scrollButtons
          aria-label='visible arrows tabs example'
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
            color: "white",
          }}>
          {props.data.map((array) => (
            <Tab
              label={array.name}
              key={array.date}
              style={{ color: "white" }}
            />
          ))}
        </Tabs>
      </Box>
    );
  }
  return null;
}
