import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Grid";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel12')} style={{backgroundColor:"transparent",color:"white"}}>
      <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0,fontSize: 40,fontFamily: 'Aileron'}}>
           Meet the team
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{margin:"5% auto"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            Administrative Team
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        
        <Grid item lg={3} md={3} sm={12} xs={12}>
      <Card className="cards" sx={{ maxWidth: 340}}>
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
      <Card className="cards" sx={{ maxWidth: 340}}>
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
      <Card className="cards" sx={{ maxWidth: 340}}>
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

      <Grid item sm={12} xs={12} center>
      <Card className="cards" sx={{ maxWidth: 340}}>
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
        </AccordionDetails>
      </Accordion>
{/* administrative team */}
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}  style={{margin:"5% auto"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>Competitive Programming Team</Typography>
        </AccordionSummary>
        <AccordionDetails>

        <Grid item lg={3} md={3} sm={12} xs={12}>
      <Card className="cards" sx={{ maxWidth: 340}}>
      <CardMedia
        component="img"
        height="200"
        image="img/vishal.png"
        alt="Vishal Gupta"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Vishal Gupta
        </Typography>
        <Typography variant="sub" color="text.secondary">
         Domain head of CP
        </Typography>
      </CardContent>
    </Card>
      </Grid>

      <Grid item lg={3} md={3} sm={12} xs={12} center>
      <Card className="cards" sx={{ maxWidth: 340}}>
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
      <Card className="cards" sx={{ maxWidth: 340}}>
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
      <Card className="cards" sx={{ maxWidth: 340}}>
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

        </AccordionDetails>
      </Accordion>
{/* competitive programming */}
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}  style={{margin:"5% auto"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            Projects Team
          </Typography>
        </AccordionSummary>
        <AccordionDetails>

        <Grid item lg={4} md={4} sm={12} xs={12}>
      <Card className="cards" sx={{ maxWidth: 340}}>
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
      <Card className="cards" sx={{ maxWidth: 340}}>
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
      <Card className="cards" sx={{ maxWidth: 340}}>
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
    
        </AccordionDetails>
      </Accordion>
      {/*projects team*/}
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}  style={{margin:"5% auto"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            Editorial Team
          </Typography>
        </AccordionSummary>
        <AccordionDetails>

        <Grid item lg={6} md={6} sm={12} xs={12} center>
      <Card className="cards" sx={{ maxWidth: 340}}>
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
      <Card className="cards" sx={{ maxWidth: 340}}>
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
    
        </AccordionDetails>
      </Accordion>
      {/* editorial team */}
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}  style={{margin:"5% auto"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
          Event Co-ordinator Team
          </Typography>
        </AccordionSummary>
        <AccordionDetails>

        <Grid item lg={6} md={6} sm={12} xs={12} center>
      <Card className="cards" sx={{ maxWidth: 340}}>
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
      <Card className="cards" sx={{ maxWidth: 340}}>
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
    
        </AccordionDetails>
      </Accordion>
      {/* Event coordinators team */}
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}  style={{margin:"5% auto"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
          PR & Marketing Team
          </Typography>
        </AccordionSummary>
        <AccordionDetails>

        <Grid item lg={6} md={6} sm={12} xs={12} center>
      <Card className="cards" sx={{ maxWidth: 340}}>
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
      <Card className="cards" sx={{ maxWidth: 340}}>
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
    
        </AccordionDetails>
      </Accordion>
      {/*PR & Marketing Team*/}
    </div>
  );
}