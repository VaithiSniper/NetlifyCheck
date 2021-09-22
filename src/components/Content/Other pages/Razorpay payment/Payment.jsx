import React,{useState} from "react";
//react
// eslint-disable-next-line no-unused-vars
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
//firestore
import Button from '@mui/material/Button';
import PaymentIcon from '@mui/icons-material/Payment';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/styles';
import Container from '@mui/material/Container';
import axios from 'axios'
//material-ui
require('dotenv').config();
//dotenv

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();

//firebasesetup

 function handleSucess()
{
  
//send to this backend to confirm push to db 
}

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    boxShadow: '0 3% 5% 2% rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    margin: '0 auto', 
    display: "flex"
  });
//material-ui button styling

async function displayRazorPay(){
 
  const res = await loadRazorPay();
  if(!res)
  alert('Error loading SDK. Are you online?');
  
  // const data = await fetch(`https://sdi-backend.vercel.app/payment`, { method: 'POST', mode: 'cors' }).then((t) =>
	// 		t.json()
	// 	)

    const data = axios.post('https://sdi-backend.vercel.app/payment').then((t) =>
t.json()
)

  var options = {
    key: 'rzp_test_xdled9rhtMMoAG', // Enter the Key ID generated from the Dashboard
    amount: '5000', 
    currency: 'INR',
    name: "SDI Club",
    description: "Registration",
    image: `https://user-images.githubusercontent.com/58522375/134403348-e0b661c2-a75b-4013-a8fc-fa7957e2cb9a.png`,
    order_id: data.id,
    handler: function (response){
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
        handleSucess()
        setTimeout(function(){window.location.replace('/payment/success');},10000)
    },
    prefill: {
        "name": "Example",
        "email": "example@example.com",
        "contact": "9999999999"
    },
    notes: {
        "address": "SDI Bangalore"
    },
    theme: {
        "color": "#3399cc"
    }
};
// eslint-disable-next-line no-undef
var rzp1 = new Razorpay(options);
rzp1.open();
}
//function to show razorpay and open modal

function loadRazorPay()
{
  return new Promise((resolve)=>{
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    document.body.appendChild(script);
    script.onload = ()=>{resolve(true)};
    script.onerror = ()=>{resolve(false)};
  })

}
//function to load razorpay script

function PaymentPortal() {
const [sucess,setSuccess]= useState(false);
  return (
        <Container>
        <Card variant="outline" style={{background:"transparent",textAlign:"center"}}>
        <h1 className="title" style={{textAlign:"center"}}>Join SDI today.</h1>
        <CardContent className="sub" style={{color:"white",fontSize:"200%"}}>
         On succesful payment, you can create an account in the SDI app. You MUST use the same email address as in the registration form and and also supply USN as proof of payment.
        </CardContent>
        <CardContent>
        <MyButton
        variant="contained"
        size="large"
        onClick={displayRazorPay}
        >
        <PaymentIcon/>
        Pay ₹50
        </MyButton>
        </CardContent>
        </Card>
        </Container>
  );
}
//Payment component


export default PaymentPortal;
