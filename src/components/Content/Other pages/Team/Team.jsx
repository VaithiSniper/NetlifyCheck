import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useMediaPredicate } from "react-media-hook";
import "./Team.css";
import Accordion from "./Accordions";

function Component() {
  const smallerThan1000 = useMediaPredicate("(max-width: 1000px)"); //hook for media-query

  function ComponentPC() {
    return (
      <Grid
        container
        className='page-container'>
        <Grid
          container
          spacing={1}
          align='center'
          className='scroll-container'>
          <Grid
            container
            spacing={1}
            align='center'
            className='teamSections'>
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}>
              <Typography
                variant='h3'
                style={{ color: "white" }}>
                Administrative Team
              </Typography>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              sm={12}
              xs={12}>
              <Card
                className='cards'
                sx={{ maxWidth: 345 }}>
                <CardMedia
                  component='img'
                  x
                  height='200'
                  image='img/somya.jpg'
                  alt='Somya Gupta'
                  sx={{ objectFit: "cover", objectPosition: "100% 0;" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h6'
                    component='div'>
                    Somya Gupta
                  </Typography>
                  <Typography
                    variant='sub'
                    color='text.secondary'>
                    President of SDI
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              sm={12}
              xs={12}
              center>
              <Card
                className='cards'
                sx={{ maxWidth: 345 }}>
                <CardMedia
                  component='img'
                  height='200'
                  image='img/satyam.jpg'
                  alt='Satyam Kumar'
                  sx={{ objectFit: "cover", objectPosition: "0 75%;" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h6'
                    component='div'>
                    Satyam Kumar
                  </Typography>
                  <Typography
                    variant='sub'
                    color='text.secondary'>
                    VP of events
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              sm={12}
              xs={12}
              center>
              <Card
                className='cards'
                sx={{ maxWidth: 345 }}>
                <CardMedia
                  component='img'
                  height='200'
                  image='img/sunayana.jpg'
                  alt='Sunayana Rao'
                  sx={{ objectFit: "cover", objectPosition: "0 57%;" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h6'
                    component='div'>
                    Sunayana Rao
                  </Typography>
                  <Typography
                    variant='sub'
                    color='text.secondary'>
                    VP of projects
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              sm={12}
              xs={12}
              center>
              <Card
                className='cards'
                sx={{ maxWidth: 345 }}>
                <CardMedia
                  component='img'
                  height='200'
                  image='img/harshita.jpg'
                  alt='Harshita Sinha'
                  sx={{ objectFit: "cover", objectPosition: "0 27%;" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h6'
                    component='div'>
                    Harshita Sinha
                  </Typography>
                  <Typography
                    variant='sub'
                    color='text.secondary'>
                    Secretary
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          {/*admin team*/}
          <Grid
            container
            spacing={1}
            align='center'
            className='teamSections'>
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}>
              <Typography
                variant='h3'
                style={{ color: "white" }}>
                Competitive Programming Team
              </Typography>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              sm={12}
              xs={12}>
              <Card
                className='cards'
                sx={{ maxWidth: 345 }}>
                <CardMedia
                  component='img'
                  height='200'
                  image='img/jayanth.png'
                  alt='Jayanth H.S'
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h6'
                    component='div'>
                    Jayanth H.S
                  </Typography>
                  <Typography
                    variant='sub'
                    color='text.secondary'>
                    Domain head of CP
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              sm={12}
              xs={12}
              center>
              <Card
                className='cards'
                sx={{ maxWidth: 345 }}>
                <CardMedia
                  component='img'
                  height='200'
                  image='img/gurudatta.png'
                  alt='Bhuvan S Gowda'
                  sx={{ objectFit: "cover", objectPosition: "100% 5%" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h6'
                    component='div'>
                    Gurudatta B S
                  </Typography>
                  <Typography
                    variant='sub'
                    color='text.secondary'>
                    Domain head of CP
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              sm={12}
              xs={12}
              center>
              <Card
                className='cards'
                sx={{ maxWidth: 345 }}>
                <CardMedia
                  component='img'
                  height='200'
                  image='img/sahas.png'
                  alt='Sahas Saxena'
                  sx={{ objectFit: "cover", objectPosition: "100% 5%" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h6'
                    component='div'>
                    Sahas Saxena
                  </Typography>
                  <Typography
                    variant='sub'
                    color='text.secondary'>
                    Domain head of CP
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              sm={12}
              xs={12}
              center>
              <Card
                className='cards'
                sx={{ maxWidth: 345 }}>
                <CardMedia
                  component='img'
                  height='200'
                  image='img/abhijit.png'
                  alt='Abhijit Laxman Sirwal'
                  sx={{ objectFit: "cover", objectPosition: "100% 10%" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h6'
                    component='div'>
                    Abhijit Sirwal
                  </Typography>
                  <Typography
                    variant='sub'
                    color='text.secondary'>
                    Domain head of CP
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          {/*cp team*/}
          <Grid
            container
            spacing={1}
            align='center'
            className='teamSections'>
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}>
              <Typography
                variant='h3'
                style={{ color: "white" }}>
                Projects Team
              </Typography>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              sm={12}
              xs={12}>
              <Card
                className='cards'
                sx={{ maxWidth: 345 }}>
                <CardMedia
                  component='img'
                  height='200'
                  image='img/sourabh.jpg'
                  alt='Sourabh Verma'
                  sx={{ objectFit: "cover", objectPosition: "0 10%;" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h6'
                    component='div'>
                    Sourabh Verma
                  </Typography>
                  <Typography
                    variant='sub'
                    color='text.secondary'>
                    Domain head of Data Science
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              sm={12}
              xs={12}
              center>
              <Card
                className='cards'
                sx={{ maxWidth: 345 }}>
                <CardMedia
                  component='img'
                  height='200'
                  image='img/aditya.jpeg'
                  alt='Aditya Shah'
                  sx={{ objectFit: "cover", objectPosition: "0 20%;" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h6'
                    component='div'>
                    Aditya Shah
                  </Typography>
                  <Typography
                    variant='sub'
                    color='text.secondary'>
                    Domain head of Web Development
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              sm={12}
              xs={12}
              center>
              <Card
                className='cards'
                sx={{ maxWidth: 345 }}>
                <CardMedia
                  component='img'
                  height='200'
                  image='img/ullas.jpg'
                  alt='Ullas Rajesh'
                  sx={{ objectFit: "cover", objectPosition: "0 27%;" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h6'
                    component='div'>
                    Ullas Rajesh
                  </Typography>
                  <Typography
                    variant='sub'
                    color='text.secondary'>
                    Domain head of Web Development
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              sm={12}
              xs={12}
              center>
              <Card
                className='cards'
                sx={{ maxWidth: 345 }}>
                <CardMedia
                  component='img'
                  height='200'
                  image='img/gaurav.jpg'
                  alt='Harshita Sinha'
                  sx={{ objectFit: "cover", objectPosition: "0 20%;" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h6'
                    component='div'>
                    Gaurav Saraiwala
                  </Typography>
                  <Typography
                    variant='sub'
                    color='text.secondary'>
                    Domain head of App Development
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          {/*projects team*/}
          <Grid
            container
            spacing={1}
            className='teamSections'
            align='center'>
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}>
              <Typography
                variant='h3'
                style={{ color: "white" }}>
                Editorial Team
              </Typography>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              sm={12}
              xs={12}
              center>
              <Card
                className='cards'
                sx={{ maxWidth: 345 }}>
                <CardMedia
                  component='img'
                  height='200'
                  image='img/amruth.jpg'
                  alt='Amruth Srinivas'
                  sx={{ objectFit: "cover", objectPosition: "0 20%" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h6'
                    component='div'>
                    Amruth Srinivas
                  </Typography>
                  <Typography
                    variant='sub'
                    color='text.secondary'>
                    Editorial Head
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              sm={12}
              xs={12}
              center>
              <Card
                className='cards'
                sx={{ maxWidth: 345 }}>
                <CardMedia
                  component='img'
                  height='200'
                  image='img/priyam.jpeg'
                  alt='Priyam'
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h6'
                    component='div'>
                    Priyam
                  </Typography>
                  <Typography
                    variant='sub'
                    color='text.secondary'>
                    Designer
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              sm={12}
              xs={12}
              center>
              <Card
                className='cards'
                sx={{ maxWidth: 345 }}>
                <CardMedia
                  component='img'
                  height='200'
                  image='img/narendra.jpeg'
                  alt='K Narendra'
                  sx={{ objectFit: "cover", objectPosition: "0 2%" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h6'
                    component='div'>
                    K Narendra
                  </Typography>
                  <Typography
                    variant='sub'
                    color='text.secondary'>
                    Designer
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              sm={12}
              xs={12}
              center>
              <Card
                className='cards'
                sx={{ maxWidth: 345 }}>
                <CardMedia
                  component='img'
                  height='200'
                  image='img/aum.jpg'
                  alt='Aum Jadhav'
                  sx={{ objectFit: "cover", objectPosition: "0 2%" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h6'
                    component='div'>
                    Aum Jadhav
                  </Typography>
                  <Typography
                    variant='sub'
                    color='text.secondary'>
                    Content and Video Editor
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          {/*editorial team*/}
          <Grid
            container
            spacing={1}
            align='center'
            className='teamSections'>
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}>
              <Typography
                variant='h3'
                style={{ color: "white" }}>
                Event Co-ordinator Team
              </Typography>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              center>
              <Card
                className='cards'
                sx={{ maxWidth: 345 }}>
                <CardMedia
                  component='img'
                  height='200'
                  image='img/ramannya.jpeg'
                  alt='Ramannya Srinivas'
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h6'
                    component='div'>
                    Ramannya Srinivas
                  </Typography>
                  <Typography
                    variant='sub'
                    color='text.secondary'>
                    Event Co-ordinator
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              center>
              <Card
                className='cards'
                sx={{ maxWidth: 345 }}>
                <CardMedia
                  component='img'
                  height='200'
                  image='img/chowdam.png'
                  alt='Chowdam Jaganath'
                  sx={{ objectPosition: "0 10%" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h6'
                    component='div'>
                    Chowdam Jaganath
                  </Typography>
                  <Typography
                    variant='sub'
                    color='text.secondary'>
                    Event Co-ordinator
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          {/*Event Co-ordinator Team*/}
          <Grid
            container
            spacing={1}
            align='center'
            className='teamSections'>
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}>
              <Typography
                variant='h3'
                style={{ color: "white" }}>
                PR & Marketing Team
              </Typography>
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              center>
              <Card
                className='cards'
                sx={{ maxWidth: 345 }}>
                <CardMedia
                  component='img'
                  height='200'
                  image='img/apeksha.jpeg'
                  alt='Apeksha'
                  sx={{ objectPosition: "0 10%" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h6'
                    component='div'>
                    Apeksha
                  </Typography>
                  <Typography
                    variant='sub'
                    color='text.secondary'>
                    Public Relations
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              center>
              <Card
                className='cards'
                sx={{ maxWidth: 345 }}>
                <CardMedia
                  component='img'
                  height='200'
                  image='img/surya.jpg'
                  alt='Surya'
                  sx={{ objectPosition: "0 10%" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h6'
                    component='div'>
                    Surya Bharadwaj B S
                  </Typography>
                  <Typography
                    variant='sub'
                    color='text.secondary'>
                    Marketing
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              center>
              <Card
                className='cards'
                sx={{ maxWidth: 345 }}>
                <CardMedia
                  component='img'
                  height='200'
                  image='img/manoj.png'
                  alt='Apeksha'
                  sx = {{ objectPosition: "0 10%"}}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h6'
                    component='div'>
                    Manoj
                  </Typography>
                  <Typography
                    variant='sub'
                    color='text.secondary'>
                    Marketing 
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/*PR & Marketing Team*/}
          </Grid>
        </Grid>
      </Grid>
    );
  }
  //component for pc
  function ComponentMobile() {
    return (
      <Grid
        container
        spacing={1}
        align='center'
        className='teamSections'>
        <Accordion />
      </Grid>
    );
  }

  return smallerThan1000 ? ComponentMobile() : ComponentPC();
}
export default Component;
