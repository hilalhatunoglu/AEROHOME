
import  { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const ContactBody = () => {
    const [formState, setFormState] = useState({});
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const changeHandler = (event) => {
        setFormState({...formState, [event.target.name]: event.target.value});
    }

   const submitHandler =(event) => {
    event.preventDefault();
    setButtonText('Gönderiliyor...');
    const config = {
        SecureToken: "e41c4178-07f2-4451-9250-99aa85ffef14",
        To : "ahmetoguzhanengin@yopmail.com",
        From : "ahmetoguzhanengin@gmail.com",
        Subject : "İletişim için gelen mesajlar",
        Body :  `${formState.name}`+" "+`${formState.surname}`+" size bir mesaj gönderdi." +" GÖNDEREN MAİLİ :"+`${formState.email}` +" MESAJ İÇERİĞİ: "+ `${formState.description}`+ " TELEFON NUMARASI: "+`${formState.phone}`,
    };

    if(window.Email){
        window.Email.send(config).then(() => {
     
            setStatus({ success: true, message: 'Mesaj başarılı bir şekilde gönderildi!'});
            setButtonText("Send"); 
            
        
        }
    
    );
    }    
   };
   
 return (
        <section className="contact" id ="connect">
         <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src = {contactImg} alt="Contact Us"/>    
                </Col> 
                <Col md={6}>
                <h2> Contact Us</h2> 
                <form onSubmit = {submitHandler}> 
                    <Row>
                        <Col sm={6} className="px-1">
                            <input type = "text" name="name" value = {formState.name || "" } placeholder="Name" onChange={changeHandler}/>
                        </Col>
                        <Col sm={6} className="px-1">
                            <input type = "text" name="surname" value = {formState.surname || "" }  placeholder="Surname" onChange={changeHandler}/>
                        </Col>
                        <Col sm={6} className="px-1">
                            <input type = "email"  name="email" value = {formState.email || "" }  placeholder="E-Mail" onChange={changeHandler}/>
                        </Col>
                        <Col sm={6} className="px-1">
                            <input type = "tel" name="phone" value = {formState.phone || "" }  placeholder="Phone Number" onChange={changeHandler}/>
                        </Col>
                        <Col>
                            <textarea row = "6" name ="description" value = {formState.description || "" }  placeholder = "Message" onChange={changeHandler}></textarea>
                            <button type ="submit">{buttonText}</button>
                            <br/>
                            <br/>
                            {
                                status.message &&
                                <Col>
                                  <p className={status.success === false ? "danger" : "info"}>{status.message}</p>
                                </Col>
                              }
                        </Col>
                     
                    </Row>
                </form>
            </Col> 
            </Row>
         </Container>
        </section>


 );
};
