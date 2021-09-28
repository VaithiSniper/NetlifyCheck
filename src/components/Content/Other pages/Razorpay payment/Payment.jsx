import React from "react";
//react
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, deleteDoc, updateDoc, query, where, getDocs  } from "firebase/firestore"; 
//firebase imports
import Button from '@mui/material/Button';
import PaymentIcon from '@mui/icons-material/Payment';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/styles';
import Container from '@mui/material/Container';
//material ui imports
import axios from 'axios';
//axios
require('dotenv').config();
//dotenv

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAZrvXqspVdjVgWWtSmjp7UKpjHotxvJD0',
  authDomain: 'sdic-22b69.firebaseapp.com',
  projectId: 'sdic-22b69'
});
//firebase and firestore setup
const db = getFirestore();
//db reference

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
    const data = axios.post('https://sdi-backend.vercel.app/payment').then((t) =>
t.json()
)

  var options = {
    key: 'rzp_test_ImFdA7jRziHClS', // Enter the Key ID generated from the Dashboard
    amount: '5000', 
    currency: 'INR',
    name: "SDI Club",
    description: "Registration",
    image: `https://user-images.githubusercontent.com/58522375/134403348-e0b661c2-a75b-4013-a8fc-fa7957e2cb9a.png`,
    order_id: data.id,
    handler:
      async function (response){
      const docRef = doc(db, "users", "ullasrajesh23@gmail.com");
      console.log(docRef);
      await updateDoc(docRef, {paymentStatus: true});
      //update current user's payment status to true
      falsePurger();
      //to clear documents with fasle
      setTimeout(()=>{
        window.location.replace("/payment/success");
      },5000);
//switch to payment success page
    },
    prefill: {
        "name": "Example",
        "email": 'example@example.com',
        "contact": '9999999999',
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

async function falsePurger()
{
  const q = query(collection(db, "users"), where("paymentStatus", "==", false));
const querySnapshot = await getDocs(q);
console.log(querySnapshot);
querySnapshot.forEach(async(doc) => {
  await deleteDoc(doc.ref)
});
//now to delete all documents with payment status == false

}

export default PaymentPortal;
