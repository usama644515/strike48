// components/TraffickingContent.js
import styles from './TraffickingContent.module.css';

const TraffickingContent = () => {
  return (
    <div className={styles.content}>
      <div className={styles.documentInfo}>
        <p className={styles.effectiveDate}>As of FY 25</p>
        <p className={styles.docusignId}>Docusign Envelope ID: 5248E1BD-1DAF-43F0-ABEB-F7D97DA5765A</p>
      </div>
      
      <h1 className={styles.mainTitle}>Combating Trafficking in Persons and Modern Slavery Compliance Plan and Policy</h1>
      
      <div className={styles.policyText}>
        <h2>Purpose</h2>
        
        <p>
          This Combating Trafficking in Persons and Modern Slavery Compliance Plan and Policy represents and implements Strike48's compliance with US Federal Acquisition Regulation 52.222-50 and the UK's Modern Slavery Act 2015. These laws and regulations requires all contractors of the Federal Government, and all companies doing business in the United Kingdom, to take action against human trafficking and slavery. This Plan and Policy applies to all directors, officers, and employees and contractors of Strike48 Technology, Inc and its affiliates (which, unless the context otherwise requires, are collectively referred to as "Strike48" or "Company"). We refer to all persons covered by this Plan and Policy as "Company personnel" or simply "personnel."
        </p>
        
        <h2>Commitment</h2>
        
        <p>
          Strike48 is committed to preventing slavery, human trafficking, and other forms of forced labor in our business and supply chain. Strike48 will not, and has not, entered into business with any organization which employs such actions in violation of law, nor will we allow such actions to take place in Strike48.
        </p>
        
        <h2>Prohibitions on Slavery, Trafficking, and Adjacent Activities</h2>
        
        <p>Strike48 and Personnel are prohibited from:</p>
        
        <ul className={styles.prohibitionsList}>
          <li>
            Engaging in severe forms of trafficking in persons, including:
            <ul>
              <li>Sex trafficking in which a commercial sex act or prostitution is induced by force, fraud, or coercion, or in which the person induced to perform such act has not attained 18 years of age;</li>
              <li>Recruiting, harboring, transporting, provisioning, or obtaining of a person for labor or services, through the use of force, fraud, or coercion for the purpose of subjection to involuntary servitude, peonage, debt bondage, or slavery;</li>
            </ul>
          </li>
          <li>Procuring commercial sex acts or prostitution during the period of performance of the contract;</li>
          <li>Using forced labor in the performance of the contract;</li>
          <li>Destroying, concealing, confiscating, or otherwise denying access by an employee to that employee's identity or immigration documents, such as passports or drivers' licenses, regardless of issuing authority;</li>
          <li>Using misleading or fraudulent practices during the recruitment of employees or offering of employment, such as failing to disclose, in a format and language understood by the employee or potential employee, basic information or making material misrepresentations during the recruitment of employees regarding the key terms and conditions of employment, including wages and fringe benefits, the location of work, the living conditions, housing and associated costs (if employer or agent provided or arranged), any significant costs to be charged to the employee or potential employee, and, if applicable, the hazardous nature of the work;</li>
          <li>Using recruiters that do not comply with local labor laws of the country in which the recruiting takes place;</li>
          <li>Charging employees or potential employees recruitment fees;</li>
          <li>Failing to provide return transportation or pay for the cost of return transportation upon the end of employment for various categories of employees as specified in applicable regulations;</li>
          <li>Providing or arranging housing that fails to meet the host country housing and safety standards;</li>
          <li>If required by law or contract, failing to provide an employment contract, recruitment agreement, or other required work document in writing in a language the employee understands.</li>
        </ul>
        
        <p>
          As required by law, Strike48 must take appropriate action against any Personnel who violate this policy, up to and including termination and referral to the appropriate government(s) and relevant law enforcement. If you are uncertain whether a particular action is prohibited, please contact the Legal Department for assistance.
        </p>
        
        <h2>Supply Chain Management</h2>
        
        <p>
          Strike48 has a low risk of slavery, human trafficking, and other forms forced labor in our business and supply chain. Strike48 shall conduct a risk assessment of all vendors before purchasing goods or services. Most of Strike48's suppliers are in low-risk areas and industries, but all Strike48 vendors are required to comply with prohibitions on slavery, human trafficking, and other forms of forced labor.
        </p>
        
        <h2>Reporting</h2>
        
        <p>
          Any credible information received from any source (including host country law enforcement) that an employee, subcontractor, subcontractor employee, or agent has violated this Policy, that information must be reported immediately to the Company's General Counsel. If the General Counsel anticipates that the event may require reporting under FAR 52.222-50, the Modern Slavery Act, or other law or regulation, he or she immediately shall notify the necessary persons, including the cognizant Inspector General of the allegation and the Contracting Officer of any applicable federal government customer or other government entity as appropriate. Personnel may also report, without fear of retaliation, activity inconsistent with this Policy prohibiting trafficking in persons to the General Counsel, and the Global Human Trafficking Hotline (1-844-888-FREE; help@befree.org).
        </p>
        
        <h2>Other Policies</h2>
        
        <p>
          The requirements, prohibitions, and protections in this Plan and Policy are in addition to the prohibitions on illegal activities and forced labor in Strike48's Code of Business Conduct and Ethics; Anti-Harassment; and Diversity, Equity & Inclusion Policies, and the protections for reporting in the Code of Business Conduct and Ethics and Strike48's Whistleblower Policy.
        </p>
        
        <h2>Training; Periodic Reassessment of Plan and Policy</h2>
        
        <p>
          Personnel are required to undergo training on activities prohibited by this Plan and Policy upon hire and annually thereafter. Strike48 will annually review, assess, and certify that all Personnel are compliant with this Policy, and that any Personnel who have committed a prohibited act, Strike48 has taken appropriate action.
        </p>
        
        <h2>Conclusion</h2>
        
        <p>
          This Combating Trafficking in Persons and Modern Slavery Compliance Plan and Policy contains prohibitions required by law to combat human trafficking. If you have any questions about this Policy, please contact your supervisor or the Legal Department. We expect all Strike48 Personnel to adhere to these standards. This Plan and Policy and the matters contained herein are neither a contract of employment nor a guarantee of continuing Company policy. We reserve the right to amend, supplement or discontinue this Plan and Policy without prior notice at any time.
        </p>
        
        <div className={styles.approvalSection}>
          <p className={styles.approvedBy}>Approved by:</p>
          
          <div className={styles.signature}>
            <div className={styles.signatureLine}></div>
            <p className={styles.signatureName}>Walter Scott</p>
            <p className={styles.signatureTitle}>CEO and Chairman of the Board</p>
            <p className={styles.signatureCompany}>Strike48, Inc.</p>
            <p className={styles.signatureFor}>For FY 25</p>
          </div>
          
          <p className={styles.docusignBottom}>Docusign Envelope ID: 5248E1BD-1DAF-43F0-ABEB-F7D97DA5765A</p>
        </div>
      </div>
    </div>
  );
};

export default TraffickingContent;