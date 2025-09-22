// components/ContactInfo.js
import styles from './ContactInfo.module.css';

const ContactInfo = () => {
  return (
    <div className={styles.info}>
      <h2 className={styles.title}>Let's chat!</h2>
      <p className={styles.description}>
        Need to get in touch with a member of the Strike48 sales or marketing teams? 
        Please complete the form and your information will get routed to our team.
      </p>
    </div>
  );
};

export default ContactInfo;