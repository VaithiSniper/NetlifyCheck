import React from "react";
//react
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import { styled } from '@mui/styles';
import Button from '@mui/material/Button';
//material-ui

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    boxShadow: '0 3% 5% 2% rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    display: "flex",
    margin:"5% auto"
  });
//material-ui button styling

function PaymentSuccess(){

    return(
        <Container>
        <Card variant="outline" style={{background:"transparent",textAlign:"center",padding:"10%"}}>
        <h3 className="titlePayment" style={{textAlign:"center",color:"white",fontSize:"200%",textDecoration:"underline"}}>Payment Successful!</h3>
        <CardContent className="sub" style={{color:"white",fontSize:"200%"}}>
        Looking forward to your growth here at SDI!
        <h6><br/>Send a screenshot of your mail to +918320279863<br/>&lt;For any queries related to payment, you can contact +918320279863 or +919902097631&gt;<br/></h6>    
        <MyButton
        variant="contained"
        size="large"
        href='/home'
        >
        Return to home
        </MyButton>
        </CardContent>
        </Card>
        </Container>
    )
}
export default PaymentSuccess;