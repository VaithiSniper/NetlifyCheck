import React,{ useState} from "react";
import {emailReturner} from "./../Register/Autogrid";
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
//--------------------------------------------------------------------------------------------------------------------------------
const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAZrvXqspVdjVgWWtSmjp7UKpjHotxvJD0',
  authDomain: 'sdic-22b69.firebaseapp.com',
  projectId: 'sdic-22b69'
});
//firebase and firestore setup
const db = getFirestore();
//db reference
//--------------------------------------------------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------------------------------------------------
async function displayRazorPay(){
  const res = await loadRazorPay();
  if(!res)
  alert('Error loading SDK. Are you online?');
    const data = axios.post('https://sdi-backend-serverless.vercel.app/api/payment').then((t) =>
t.json()
)
//--------------------------------------------------------------------------------------------------------------------------------
  var options = {
    key: 'rzp_live_FgzyyI34xU2AQW', // Enter the Key ID generated from the Dashboard
    amount: 5000, 
    currency: 'INR',
    name: "SDI Club",
    description: "Registration",
    image: `https://sdi-backend-serverless.vercel.app/api/logo`,
    order_id: data.id,
    //--------------------------------------------------------------------------------------------------------------------------------
    handler:
        async function successHandler (response){
          const preUserEmail = emailReturner();
          const docRef = doc(db, "users", preUserEmail);
          const paymentSendEmail = preUserEmail;
          const payment_id=response.razorpay_payment_id;
          await updateDoc(docRef, {paymentStatus: true,payment_id:payment_id});
          //update current user's payment status to true
          // falsePurger();
          //to clear documents with fasle
          const result = axios.post('https://sdi-backend-serverless.vercel.app/api/payment/capture',JSON.stringify({paymentId:payment_id}), {headers: {'Content-Type': 'application/json'}}).then((t) => t.json());
          const paymentMail= JSON.stringify({
              email: paymentSendEmail,
              payment_id: payment_id
          })
          axios.post('https://sdi-backend-serverless.vercel.app/api/mailSenderPayment', paymentMail, {
            headers: {
              
              'Content-Type': 'application/json'
            }
          })
          .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
          setTimeout(()=>{
            window.location.replace("/payment/success");
          },5000);
    // switch to payment success page
        },
    //--------------------------------------------------------------------------------------------------------------------------------
    prefill: {
        "name": "Vaithee",
        "email": "vaithi.genghiskan@gmail.com",
        "contact": "8618560485",
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
//--------------------------------------------------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------------------------------------------------
function PaymentPortal() {
  const [contentOnTrue, setContentOnTrue] = useState(
    <Container>
    <Card variant="outline" style={{background:"transparent",textAlign:"center"}}>
    <h1 className="title" style={{textAlign:"center"}}>Join SDI today.</h1>
    <CardContent className="sub" style={{color:"white",fontSize:"200%"}}>
    On successful payment, take a screenshot of the email you receive on your registered mail ID and send it to +918320279863<br/>Check your spam folder if you don't see the email in your inbox<br/>
    <h6>&lt;For any queries related to payment, you can contact +918320279863 or +919902097631&gt;</h6>
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
  )
  if(!emailReturner())
  return(
    <Container>
        <Card variant="outline" style={{background:"transparent",textAlign:"center"}}>
        <h1 className="titlePayment" style={{textAlign:"center"}}>You need to fill the registration form</h1>
        <CardContent>
        <MyButton
        variant="contained"
        size="large"
        href="/register"
        >
        Return to register
        </MyButton>
        </CardContent>
        </Card>
        </Container>
  )
  else
  return (contentOnTrue);
}
//Payment component
//--------------------------------------------------------------------------------------------------------------------------------
async function falsePurger()
{
  const q = query(collection(db, "users"), where("paymentStatus", "==", false));
const querySnapshot = await getDocs(q);
querySnapshot.forEach(async(doc) => {
  await deleteDoc(doc.ref)
});
//now to delete all documents with payment status == false
}
//--------------------------------------------------------------------------------------------------------------------------------
export default PaymentPortal;
