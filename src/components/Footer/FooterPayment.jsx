import React from 'react';
import { useMediaPredicate } from "react-media-hook";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles} from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
//npm imports

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
//box styling

let today = new Date();
// //Date function related
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      textAlign: "center",
      justifyContentEnd: "center",
      padding:"4%"
    }
  })
);
//paper styling related

function FooterMobile(){
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const classes = useStyles(); //styles for Paper component
    return(
        <Grid container spacing={1}>
        <Grid item sm={4} xs={4} align="center">
        <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent",color:"white"}}>  
        <Button onClick={handleOpen}>Terms and conditions</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Terms and conditions
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh magna, elementum efficitur elementum nec, porttitor vel nunc. Sed tristique leo elit, a tempor neque varius et. Fusce sit amet libero non leo consectetur luctus vitae sed magna. Nulla enim felis, rhoncus at urna at, vehicula aliquam sapien. Nulla facilisi. Ut maximus quam ac felis laoreet semper. Nulla est nulla, consequat quis tempus a, ornare et dolor. Vestibulum a risus vel turpis porttitor lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus purus nec tellus ultricies facilisis. Ut vel lorem purus. Maecenas sollicitudin enim vel finibus condimentum. Nulla vitae arcu sodales, iaculis elit at, blandit nisi. 
    </Typography>
  </Box>
</Modal>
        </Paper>
        </Grid>
        <Grid item sm={4} xs={4}>
        <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent",color:"white"}}>  
        <Button onClick={handleOpen}>Privacy policy</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Privacy policy
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh magna, elementum efficitur elementum nec, porttitor vel nunc. Sed tristique leo elit, a tempor neque varius et. Fusce sit amet libero non leo consectetur luctus vitae sed magna. Nulla enim felis, rhoncus at urna at, vehicula aliquam sapien. Nulla facilisi. Ut maximus quam ac felis laoreet semper. Nulla est nulla, consequat quis tempus a, ornare et dolor. Vestibulum a risus vel turpis porttitor lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus purus nec tellus ultricies facilisis. Ut vel lorem purus. Maecenas sollicitudin enim vel finibus condimentum. Nulla vitae arcu sodales, iaculis elit at, blandit nisi. 
    </Typography>
  </Box>
</Modal>
        </Paper>
        </Grid>
        <Grid item sm={4} xs={4} align="center">
        <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent",color:"white"}}> 
        <Button onClick={handleOpen}>Refund policy</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Refund policy
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh magna, elementum efficitur elementum nec, porttitor vel nunc. Sed tristique leo elit, a tempor neque varius et. Fusce sit amet libero non leo consectetur luctus vitae sed magna. Nulla enim felis, rhoncus at urna at, vehicula aliquam sapien. Nulla facilisi. Ut maximus quam ac felis laoreet semper. Nulla est nulla, consequat quis tempus a, ornare et dolor. Vestibulum a risus vel turpis porttitor lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus purus nec tellus ultricies facilisis. Ut vel lorem purus. Maecenas sollicitudin enim vel finibus condimentum. Nulla vitae arcu sodales, iaculis elit at, blandit nisi. 
    </Typography>
  </Box>
</Modal>
        </Paper>
        </Grid>
        </Grid>
        )
}
//Component for footer on mobile devices

function FooterPC(){
    
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const classes = useStyles(); //styles for Paper component
    return(
        <Grid container spacing={1}>
    <Grid item md={4} lg={4}>
    <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent",color:"white"}}>  
    <Button onClick={handleOpen}>Terms and Conditions</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Terms and conditions
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh magna, elementum efficitur elementum nec, porttitor vel nunc. Sed tristique leo elit, a tempor neque varius et. Fusce sit amet libero non leo consectetur luctus vitae sed magna. Nulla enim felis, rhoncus at urna at, vehicula aliquam sapien. Nulla facilisi. Ut maximus quam ac felis laoreet semper. Nulla est nulla, consequat quis tempus a, ornare et dolor. Vestibulum a risus vel turpis porttitor lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus purus nec tellus ultricies facilisis. Ut vel lorem purus. Maecenas sollicitudin enim vel finibus condimentum. Nulla vitae arcu sodales, iaculis elit at, blandit nisi. 
    </Typography>
  </Box>
</Modal>
    </Paper>
    </Grid>
    {/* Terms and conditions */}
    <Grid item md={4} lg={4}>
    <Paper className={classes.paper} elevation={1} style={{backgroundColor:"transparent",color:"white"}}>
    <Button onClick={handleOpen}>Privacy policy</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Privacy policy
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh magna, elementum efficitur elementum nec, porttitor vel nunc. Sed tristique leo elit, a tempor neque varius et. Fusce sit amet libero non leo consectetur luctus vitae sed magna. Nulla enim felis, rhoncus at urna at, vehicula aliquam sapien. Nulla facilisi. Ut maximus quam ac felis laoreet semper. Nulla est nulla, consequat quis tempus a, ornare et dolor. Vestibulum a risus vel turpis porttitor lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus purus nec tellus ultricies facilisis. Ut vel lorem purus. Maecenas sollicitudin enim vel finibus condimentum. Nulla vitae arcu sodales, iaculis elit at, blandit nisi. 
    </Typography>
  </Box>
</Modal>
    </Paper>
    </Grid>
    {/* Privacy policy */}
    <Grid item md={4} lg={4}>
    <Paper className={classes.paper} elevation={1} style={{backgroundColor:"transparent",color:"white"}}>   
    <Button onClick={handleOpen}>Refund policy</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Refund policy
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh magna, elementum efficitur elementum nec, porttitor vel nunc. Sed tristique leo elit, a tempor neque varius et. Fusce sit amet libero non leo consectetur luctus vitae sed magna. Nulla enim felis, rhoncus at urna at, vehicula aliquam sapien. Nulla facilisi. Ut maximus quam ac felis laoreet semper. Nulla est nulla, consequat quis tempus a, ornare et dolor. Vestibulum a risus vel turpis porttitor lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus purus nec tellus ultricies facilisis. Ut vel lorem purus. Maecenas sollicitudin enim vel finibus condimentum. Nulla vitae arcu sodales, iaculis elit at, blandit nisi. 
    </Typography>
  </Box>
</Modal>
    </Paper>
    </Grid>
    {/* Refund policy */}
    </Grid>
        )
}
//Component for footer on larger devices

function FootPayment(props){

    const smallerThan560 = useMediaPredicate("(max-width: 560px)");//media-query hook  

    return(<footer className="footer bg-transparent"> <span id="date-section">
           {smallerThan560?FooterMobile():FooterPC()}
           </span></footer>)
}
//function 
export default FootPayment;
//exports
