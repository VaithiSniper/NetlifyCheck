import React from 'react';
import { useMediaPredicate } from "react-media-hook";
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import './About.css';
function About() {
   

const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
//modal related   
const smallerThan1000 = useMediaPredicate("(max-width: 1000px)");//hook for media-query

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#757575',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
//modal box styling

function pcContent (){ 
return(<div>
    <h1 className="about_title">About Us </h1>
    <h3 className='sub' style={{textAlign:"center"}}>&lt;GRIT, PASSION, CODE, TEAM, POWER, ENDURANCE, UNITY: WE ARE SDI&gt;</h3>
    <div className="scroll_left p1" style={{textAlign:"center"}}><p className="left_about_us">We're a community of motivated computer scientists, coders and tech-geeks of BIT. We operate under the guidance of the CSE dept. of Bangalore Institute of Technology, Bangalore.
Founded by numerous notable alumni and reformed by the glorious students of the current batches of BIT, SDI is THE ELITE coding/tech club of BIT.
The contributions of the club to the College and the CSE dept. speaks for itself. 
</p></div>
    <div className="scroll_right p2" style={{textAlign:"center"}}><p className="right_about_us">Resnal, attendance-management-system, timetable-generation and many more projects our members have contributed is a testimony to our superior quality among our BIT counterparts.
We’re more than just a club, we’re more than just developing codes, we instil life into them with every stroke of our keyboard keys! 
If you’re looking for an ideal platform that can help you in your overall development as a complete coding professional and can provide a conducive system of learning under the guidance of the BEST of our college, to establish a strong foundation for your coding career, then your search stops here!
</p></div>
    </div>)
    }
function mobileContent ()
{
    return( <div>
        <h1 className="about_title">About Us </h1>
        <h3 className='sub' style={{textAlign:"center",fontSize:"80%"}}>&lt;GRIT, PASSION, CODE, TEAM, POWER, ENDURANCE, UNITY: WE ARE SDI&gt;</h3>
        <div className="scroll_left p1" style={{textAlign:"center"}}><p className="left_about_us">We're a community of motivated computer scientists, coders and tech-geeks of BIT. We operate under the guidance of the CSE dept. of Bangalore Institute of Technology, Bangalore.
Founded by numerous notable alumni and reformed by the glorious students of the current batches of BIT, SDI is THE ELITE coding/tech club of BIT.
The contributions of the club to the College and the CSE dept. speaks for itself. 
</p>
<h3 className='sub' style={{textAlign:"center",fontSize:"200%"}}>SDI projects<Button onClick={handleOpen}><OpenInFullIcon fontSize='large' sx={{color: 'white'}} /></Button></h3>
</div>

<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
<Box sx={style}>
<div className="scroll_right p2" style={{textAlign:"center"}}><p className="right_about_us">Resnal, attendance-management-system, timetable-generation and many more projects our members have contributed is a testimony to our superior quality among our BIT counterparts.
We’re more than just a club, we’re more than just developing codes, we instil life into them with every stroke of our keyboard keys! 
If you’re looking for an ideal platform that can help you in your overall development as a complete coding professional and can provide a conducive system of learning under the guidance of the BEST of our college, to establish a strong foundation for your coding career, then your search stops here!
</p>
<Button onClick={handleClose}><ExitToAppIcon sx={{color: 'white'}}  fontSize='large'/></Button>  
</div>  
</Box>
</Modal>
</div>)
}   

    return(smallerThan1000?mobileContent():pcContent());
}
export default About;