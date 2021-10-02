import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from 'react-bootstrap/Container';
import Typography from '@mui/material/Typography';

function TandC(){
    return(
        <Container>
        <Card variant="outline" style={{background:"transparent",textAlign:"left",color:"white"}}>
        <Typography id="heading" variant="h3" component="h2" align="center" style={{textDecoration:"underline"}}>
    Terms and conditions, Privacy policy and Refund policy<br/>
    </Typography>
    <Typography variant="sub" component="h4" align="center">
    Operational address : SDI Club, Bangalore Institute of Technology, Bangalore - 560085
    </Typography>
        <CardContent>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
   <strong>1.Terms & Conditions</strong><br/>
   <strong>a.Introduction</strong><br/>
Please read these terms of use carefully before registering to SDI, these terms of use (the “Terms of Use”) govern your access to and involvement in the club. Your access to the club is available only on the condition that you agree to the terms of use set forth below. If you do not agree to all the terms of use, do not access the club. By accessing or becoming a member of the club, you and the entity you are authorised to represent signify your agreement to be bound by the terms of use. <br/>
<strong>b.Effective Date</strong><br/>
The terms of use set forth below shall come in effect starting from the 3rd of October and shall remain effective until stated otherwise. In case of amendment of the agreement the effective date for the following terms of use shall become obsolete and a new effective date called the new agreement shall come in effect. <br/>
<strong>c.Contact Information</strong><br/>
In case of any queries or grievances, contact the under stated <br/>
Nandeesha (President of SDI) - 9902097631, nandeesha.kknv@gmail.com <br/>
Siri Prakash (PR and Marketing) – 7022641025, siriprakash3101@gmail.com <br/>
Shah Aditya (PR and Marketing) - 83202 79863, adityashah10may2001@gmail.com <br/>
Postal Address: Bangalore Institute of Technology, K.R Road, V.V
                Puram, Bangalore – 560004
                <br/>
                <strong>d.Limitation of Liability</strong><br/>
SDI club and any of its subsidiaries or affiliates shall in no event be liable for any direct, indirect, incidental, consequential or exemplary damages. This shall include, but not be limited to damages for loss or profits, business interruption, business reputation or good will, loss of programs or information or other intangible loss arising out of the use of or the inability to use the service, or information, or any permanent or temporary cessation of such service or access to information, or the deletion or corruption of any content or information, or the failure to store any content or information. The above limitation shall apply whether or not SDI Club has been advised of or should have been aware of the possibility of such damages. In jurisdictions where the exclusion or limitation of liability for consequential or incidental damages is not allowed the liability of SDI Club is limited to the greatest extent permitted by law. <br/>
<strong>e.Rules of Conduct</strong><br/>
<ol>
<li>You must be currently enrolled in a professional degree course in Bangalore Institute of Technology.</li>
<li>SDI club should not have previously terminated your membership for violation of law or any of our policies.</li> 
<li>Only students currently enrolled in Computer Science Engineering programme can apply to be a part of the SDI core committee.</li>
<li>Your membership shall be considered valid only after successful verification of your payment details.</li>
<li>You must not breach these terms of use, our community standards and other terms and policies that apply to your membership of SDI.</li>
<li>You must not upload or share any viruses or malicious code, or do anything that could disable, overburden or impair the proper working or appearance of SDI.</li>
</ol>
 <strong>f.Termination of Membership</strong><br/>
SDI reserves the right to terminate your membership in case of violation of our terms and conditions. SDI also reserves the right to remove any content or information you share on the service or its related social media platforms, if we believe that it violates these terms of use, our policies, and community guidelines of the social media platform, the college regulations, other people’s intellectual property or we are permitted or required to do so by law. We can refuse to provide or stop providing all or part of the service if you violate these terms of use or any of the above stated policies.<br/>
    </Typography>
        </CardContent>
        <CardContent>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
   <strong>2.Refund policy</strong><br/>                                                                                                                                                                                                                    
a.	We offer a full money-back guarantee only under special circumstances like when an ongoing transaction fails. No other cases are entertained.<br/> 
b.	Once on joining the club by remitting the said amount no refund is possible and the membership will be applicable for the coming 2 years.<br/> 
c.	Illegal payment methods are not acceptable.
    </Typography>
        </CardContent>
        <CardContent>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
   <strong>3.Privacy policy</strong><br/>
a.	Your personal information will not be shared with third parties under any circumstances.<br/>
b.	No cookies will be used for tracking purposes.<br/>
c.	Your personal data will be completely safe, even the SDI club will not have access to your data and information.
    </Typography>
        </CardContent>
        </Card>
        </Container>
       
  
    )
}
export default TandC;