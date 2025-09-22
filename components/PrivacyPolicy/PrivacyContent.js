// components/PrivacyContent.js
import styles from './PrivacyContent.module.css';

const PrivacyContent = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.mainTitle}>Strike48 Data Request Guidelines</h1>
      
      <div className={styles.privacyText}>
        <p className={styles.intro}>
          This document outlines Strike48's general practices for responding to requests by government agencies and other third parties ("Requesting Parties") for data belonging to Strike48's customers.
        </p>
        
        <h2>Referral to Customers</h2>
        
        <p>
          Strike48 will use reasonable efforts where appropriate to refer the Requesting Party to the affected customer so that the customer can work with the Requesting Party to resolve the matter.
        </p>
        
        <h2>Disclosure Only When Necessary</h2>
        
        <p>
          Strike48 will only disclose customer data in response to legally binding process, such as a valid subpoena, court order, or search warrant. Strike48 carefully reviews each request to ensure that it complies with applicable law. If a request is overbroad, Strike48 will try to narrow it and may object to producing any information at all, provided that Strike48 may voluntarily disclose customer information to a government agency in an emergency involving imminent danger of physical harm or harm to Strike48's services, employees, or customers.
        </p>
        
        <p>
          Strike48 does not voluntarily provide governments with access to any data about users for surveillance purposes. If Strike48 receives legal process subject to an indefinite non-disclosure requirement (including a National Security Letter), Strike48 will challenge that non-disclosure requirement in court.
        </p>
        
        <p>
          Strike48 has never received a FISA order or authorization or a National Security Letter.
        </p>
        
        <h2>Requirement of Proper Domestication</h2>
        
        <p>
          Strike48 requires that any Requesting Party ensure that the process or request is properly domesticated. For data stored in the United States, Strike48 does not accept legal process or requests directly from law enforcement entities outside the United States or Canada. Foreign law enforcement agencies seeking data stored within the United States should proceed through a Mutual Legal Assistance Treaty or other diplomatic or legal means to obtain data through a court where Strike48 is located.
        </p>
        
        <h2>Important Disclaimers</h2>
        
        <p>
          These practices are provided for informational purposes only and do not represent a commitment by Strike48 to provide information. Strike48 reserves its rights to respond and/or object to any request for data in any manner consistent with applicable law.
        </p>
        
        <p>
          Strike48 also reserves its rights to require reasonable reimbursement in connection with its response to requests for customer data.
        </p>
        
        <p>
          Strike48 may revise these guidelines and the underlying processes at any time without notice.
        </p>
      </div>
    </div>
  );
};

export default PrivacyContent;