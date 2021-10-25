import React, {useContext} from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useMediaPredicate } from "react-media-hook";
import './Team.css';
import Accordion from './Accordions';

function Component() {
  const smallerThan1000 = useMediaPredicate("(max-width: 1000px)");//hook for media-query

function ComponentPC(){
    return(
    <Grid container className="page-container">
    <Grid container spacing={1} align="center" className="scroll-container">
      <Grid container spacing={1} align="center" className="teamSections">
      <Grid item lg={12} md={12} sm={12} xs={12} ><Typography variant="h3" style={{color: 'white'}}>Administrative Team</Typography></Grid>
      <Grid item lg={3} md={3} sm={12} xs={12}>
      <Card className="cards" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="img/asp.png"
        alt="Akhouri Soumya Prakash"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Akhouri Soumya Prakash
        </Typography>
        <Typography variant="sub" color="text.secondary">
         VP of projects
        </Typography>
      </CardContent>
    </Card>
      </Grid>
      <Grid item lg={3} md={3} sm={12} xs={12} center>
      <Card className="cards" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="img/nandeesha.png"
        alt="Nandeesha K"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Nandeesha K
        </Typography>
        <Typography variant="sub" color="text.secondary">
         President of SDI
        </Typography>
      </CardContent>
    </Card>
      </Grid>
      <Grid item lg={3} md={3} sm={12} xs={12} center>
      <Card className="cards" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="img/sowmya.png"
        alt="Sowmya Gupta"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Sowmya Gupta
        </Typography>
        <Typography variant="sub" color="text.secondary">
         VP of events
        </Typography>
      </CardContent>
    </Card>
      </Grid>
      <Grid item lg={3} md={3} sm={12} xs={12} center>
      <Card className="cards" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="img/devika.png"
        alt="Devika UH"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Devika U.H.
        </Typography>
        <Typography variant="sub" color="text.secondary">
         Designer
        </Typography>
      </CardContent>
    </Card>
      </Grid>
      </Grid>
      {/*admin team*/}
      <Grid container spacing={1} align="center"  className="teamSections">
      <Grid item lg={12} md={12} sm={12} xs={12} ><Typography variant="h3" style={{color: 'white'}}>Competitive Programming Team</Typography></Grid>
      <Grid item lg={3} md={3} sm={12} xs={12}>
      <Card className="cards" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="img/vishal.png"
        alt="Vishal Gupta"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Vishal Sachan
        </Typography>
        <Typography variant="sub" color="text.secondary">
         Domain head of CP
        </Typography>
      </CardContent>
    </Card>
      </Grid>
      <Grid item lg={3} md={3} sm={12} xs={12} center>
      <Card className="cards" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="img/pranjal.png"
        alt="Pranjal Surana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Pranjal Surana
        </Typography>
        <Typography variant="sub" color="text.secondary">
        Domain head of CP
        </Typography>
      </CardContent>
    </Card>
      </Grid>
      <Grid item lg={3} md={3} sm={12} xs={12} center>
      <Card className="cards" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="img/sunayana.png"
        alt="Sunayana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Sunayana P. Rao
        </Typography>
        <Typography variant="sub" color="text.secondary">
        Domain head of CP
        </Typography>
      </CardContent>
    </Card>
      </Grid>
      <Grid item lg={3} md={3} sm={12} xs={12} center>
      <Card className="cards" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="img/harshi.png"
        alt="Harshita Sinha"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Harshita Sinha
        </Typography>
        <Typography variant="sub" color="text.secondary">
        Domain head of CP
        </Typography>
      </CardContent>
    </Card>
      </Grid>
      </Grid>
      {/*cp team*/}
      <Grid container spacing={1} align="center" className="teamSections" >
      <Grid item lg={12} md={12} sm={12} xs={12} ><Typography variant="h3" style={{color: 'white'}}>Projects Team</Typography></Grid>
      <Grid item lg={4} md={4} sm={12} xs={12}>
      <Card className="cards" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="img/akshay.png"
        alt="Akshay K.H."
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Akshay K.H.
        </Typography>
        <Typography variant="sub" color="text.secondary">
         Domain head of App development
        </Typography>
      </CardContent>
    </Card>
      </Grid>
      <Grid item lg={4} md={4} sm={12} xs={12} center>
      <Card className="cards" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="img/bhuvan.png"
        alt="Bhuvan S Gowda"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Bhuvan S Gowda
        </Typography>
        <Typography variant="sub" color="text.secondary">
        Domain head of Data Science
        </Typography>
      </CardContent>
    </Card>
      </Grid>
      <Grid item lg={4} md={4} sm={12} xs={12} center>
      <Card className="cards" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="img/vaithee.png"
        alt="Vaitheeswaran J"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Vaitheeswaran J
        </Typography>
        <Typography variant="sub" color="text.secondary">
        Domain head of Web development
        </Typography>
      </CardContent>
    </Card>
      </Grid>
      </Grid>
      {/*projects team*/}
      <Grid container spacing={1} className="teamSections" align="center">
      <Grid item lg={12} md={12} sm={12} xs={12} ><Typography variant="h3" style={{color: 'white'}}>Editorial Team</Typography></Grid>
      <Grid item lg={6} md={6} sm={12} xs={12} center>
      <Card className="cards" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="img/vishnu.png"
        alt="G. Vishnu Priya"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        G. Vishnu Priya
        </Typography>
        <Typography variant="sub" color="text.secondary">
        Editor
        </Typography>
      </CardContent>
    </Card>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12} center>
      <Card className="cards" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="img/kriti.png"
        alt="Kriti Srivatsava"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Kriti Srivatsava
        </Typography>
        <Typography variant="sub" color="text.secondary">
        Editor
        </Typography>
      </CardContent>
    </Card>
      </Grid>
      </Grid>
      {/*editorial team*/}
      <Grid container spacing={1} align="center" className="teamSections" >
      <Grid item lg={12} md={12} sm={12} xs={12} ><Typography variant="h3" style={{color: 'white'}}>Event Co-ordinator Team</Typography></Grid>
      <Grid item lg={6} md={6} sm={12} xs={12} center>
      <Card className="cards" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="img/sapate.png"
        alt="Priya P. Sapate"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Priya P. Sapate
        </Typography>
        <Typography variant="sub" color="text.secondary">
        Event Co-ordinator
        </Typography>
      </CardContent>
    </Card>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12} center>
      <Card className="cards" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="img/jeeshita.png"
        alt="K.V Jeeshitha"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        K.V Jeeshitha
        </Typography>
        <Typography variant="sub" color="text.secondary">
        Event Co-ordinator
        </Typography>
      </CardContent>
    </Card>
      </Grid>
      </Grid>
      {/*Event Co-ordinator Team*/}
      <Grid container spacing={1} align="center" className="teamSections" >
      <Grid item lg={12} md={12} sm={12} xs={12}  ><Typography variant="h3" style={{color: 'white'}}>PR & Marketing Team</Typography></Grid>
      <Grid item lg={6} md={6} sm={12} xs={12} center>
      <Card className="cards" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="img/siri.png"
        alt="Siri Prakash"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Siri Prakash
        </Typography>
        <Typography variant="sub" color="text.secondary">
        Social media incharge
        </Typography>
      </CardContent>
    </Card>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12} center>
      <Card className="cards" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="img/shah.png"
        alt="Aditya Shah"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Aditya Shah
        </Typography>
        <Typography variant="sub" color="text.secondary">
        Treasurer
        </Typography>
      </CardContent>
    </Card>
      </Grid>
      {/*PR & Marketing Team*/}
      </Grid>
      </Grid>
      </Grid>

    )
    }
    //component for pc
    function ComponentMobile(){
      return(
        <Grid container spacing={1} align="center" className="teamSections">
        <Accordion/>
        </Grid>
      )
    }

    return(smallerThan1000?ComponentMobile():ComponentPC());
}
export default Component;
