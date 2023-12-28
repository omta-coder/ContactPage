import Button from '../Button/Button'
import styles from './Contact.module.css'
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { useState } from 'react';

const ContactForm = () => {
  const [name, setname] = useState("Ankur");
  const [email, setemail] = useState("ankur@a.com");
  const [text, settext] = useState("Hello")
 

  const onSubmit = (event)=>{
    event.preventDefault();
    setname(event.target[0].value);
    setemail(event.target[1].value);
    settext(event.target[2].value);
   
  }


  return (
    <section className={styles.container} >
        <div className={styles.contact_form}>
           <div className={styles.top_btn}>
             <Button text="VIA SUPPORT CHAT" icon={<MdMessage style={{fontSize:"24px"}}/>}/>
             <Button  text="VIA CALL" icon={<FaPhoneAlt style={{fontSize:"24px"}}/>}/>
           </div>
           <Button isOutline={true} text="VIA Email Form" icon={<AiFillMail style={{fontSize:"24px"}}/>}/>

           <form  onSubmit={onSubmit}>
              <div className={styles.form_control}>
                 <label htmlFor="name">Name</label>
                 <input type="text" name='name' />
              </div>
              <div className={styles.form_control}>
                 <label htmlFor="email">E-mail</label>
                 <input type="email" name='email' />
              </div>
              <div className={styles.form_control}>
                 <label htmlFor="text">Text</label>
                 <textarea name="text"  cols="30" rows="6"/>
              </div>
              <div style={{display:"flex",justifyContent:"end"}}>
                <Button  text="SUBMIT" />
              </div>
              <div>
                {
                  "👋🏼"+name + " " + email + " " + text
                }
              </div>
           </form>
        </div>
        <div className={styles.container_image}>
          <img src="https://img.freepik.com/free-vector/service-24-7-concept-illustration_114360-7380.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703376000&semt=ais" alt="Contact image" />
        </div>
    </section>
  )
}

export default ContactForm