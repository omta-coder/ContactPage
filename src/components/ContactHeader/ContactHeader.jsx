import styles from './ContactHeader.module.css'

const ContactHeader = () => {
  return (
    <div className={"${styles.contact_section} container"}>
      <div className={`${styles.contact_section}`}>
        <h1>CONTACT US</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa veritatis <br /> ratione expedita possimus commodi quos corporis aspernatur nesciunt sit!</p>
      </div>
    </div>
  )
}

export default ContactHeader