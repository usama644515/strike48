// components/TermsContent.js
import styles from './TermsContent.module.css';

const TermsContent = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.mainTitle}>Strike48 TERMS OF SERVICE</h1>
      <p className={styles.subtitle}>- MSP -</p>
      
      <div className={styles.termsText}>
        <p>
          These Terms of Service (the "Agreement") are a legally binding agreement between [MSP], a [State of incorporation] [Entity type] headquartered at [Address] ("MSP") and Strike48 Technology, Inc., a Delaware corporation headquartered at 255 Main St., Suite 702, Cambridge, MA 02142 (hereinafter "Strike48") with regard to the Strike48 services for managing and analyzing Customer's IT systems logs, as described at www.Strike48.com, accessed via the website located at app.Strike48.com or such other site that may be designated by Strike48 from time to time (the "Services"). For the purposes of this Agreement, the term Services includes all software contained in the Services.
        </p>
        
        <p className={styles.allCaps}>
          THE "EFFECTIVE DATE" OF THIS AGREEMENT IS THE DATE OF THE LAST SIGNATURE ON THE SIGNATURE PAGE BELOW. Any terms or conditions appearing on the face or reverse side of any purchase order, purchase order acknowledgment or other order document that are different from, or in addition to, the terms of this Agreement will not be binding on Strike48, even if payment is accepted. MSP agrees that MSP's order is neither contingent on the delivery of any future functionality or features nor dependent on any oral or written public comments made by Strike48 regarding future functionality or features.
        </p>
        
        <h2>1. THE SERVICES.</h2>
        
        <p>
          Strike48 will provide MSP with the specific Services identified on the applicable order form ("Order Form"). Strike48 will provide support for the Services if and as described in the Order Form, in accordance with Strike48's then-current support policies. Strike48's Services may be (i) hosted by Strike48 and offered to MSP as a cloud offering ("Cloud Services"); (ii) hosted by MSP in MSP's own environment or a Cloud environment obtained by MSP ("Hybrid Cloud Services"). MSP's Order Form will identify whether MSP is receiving Cloud Services or Hybrid Cloud Services. Certain provisions of this Agreement are applicable only to Cloud Services or Hybrid Cloud Services respectively, but only if the provision expressly states such limitation.
        </p>
        
        <p>
          Subject to this Agreement, and subject to the payment of fees set forth on the applicable Order Form, Strike48 hereby grants to MSP, solely during the Subscription Term (defined in Section 13), a non-exclusive, non-transferable (except as set forth in Section 15 under Assignment) worldwide right to access and use the Services solely for MSP's internal business purposes and to manage and analyze the data of its customers ("Customers") as a managed service, who have entered into a valid written managed service agreement with MSP ("Managed Service Agreement") and for whom MSP has issued a valid Order Form to Strike48. Services ordered for one Customer may not be transferred, assigned or otherwise provided to a different Customer.
        </p>
        
        <p>
          This license is restricted to use by MSP and MSP's Users and does not include the right to use or access the Services by or on behalf of any third party, including MSP's Customers.
        </p>
        
        <p>
          "User" means an individual employee, contractor, agent or IT service supplier authorized by MSP to access the Services, and who has been given a unique login and password information necessary to access and use the Services ("Access Code"). MSP may provide a limited number of user accounts to its Customer for direct access to the Service, if specifically required by the Customer and, in such event, each Customer user will be deemed a User under this Agreement. MSP will only use the Services to analyze MSP's own logs and its Customers' logs. User accounts cannot be shared or used by more than one User but may be reassigned to new Users replacing former Users who no longer use the Services. Each User must have a unique email address. Other restrictions to MSP's use of the Services may be set forth on the Order Form, including volume limitations. If at any time MSP exceed the volume limitations agreed in the applicable Order Form, MSP will execute a separate Order Form for additional capacity and pay the applicable fees for any such additional volume or use.
        </p>
        
        <h2>2. OUR RESPONSIBILITIES.</h2>
        
        <p>
          Subject to the terms of this Agreement, Strike48 will use commercially reasonable efforts to provide MSP with access to the applicable Services during the Subscription Term in accordance with Strike48's SLA policy and the Documentation. "Documentation" means the generally available technical manuals published by Strike48 and accessible at docs.Strike48.com as well as quotes or invoices MSP has received from Strike48 in writing with respect to the Services. Strike48 may make modifications to the Services or particular components of the Services (including support levels) from time to time, provided that such modifications do not materially degrade any functionality or features of the Services.
        </p>
        
        <p>
          If MSP receives Cloud Services, Strike48 will use commercially reasonable efforts to perform regular backups of MSP's Data (defined in Section 7). In the event of any loss of MSP's Data, Strike48 will provide commercially reasonable recovery services to attempt to restore MSP's most recent backup, but MSP is responsible for making MSP's own backups of MSP's Data. Strike48 is not responsible or liable for any loss of MSP's Data.
        </p>
        
        <h2>3. FEES AND PAYMENT.</h2>
        
        <p>
          MSP agrees to pay Strike48 for Services provided and expenses incurred on the basis and at the rates specified in each Order Form, or if no rate is specified, Strike48's then-current rate. All fees are non-cancellable and non-refundable. Strike48 reserves the right to change the rates, applicable charges and usage policies and to introduce new charges by providing MSP at least 30 days' prior written notice (by email) of the change, but any such modifications will not apply until the start of MSP's next renewal Subscription Term, unless there are new or additional Services ordered by MSP.
        </p>
        
        <p>
          Payment terms are set forth in the applicable Order Form. If the Order Form does not contain payment terms, payment is due in advance, thirty (30) days after receipt of invoice and shall be made in US Dollars. MSP will pay all pre-approved reasonable travel and out-of-pocket expenses incurred by Strike48 in connection with any Services rendered.
        </p>
        
        <p>
          MSP understands Strike48 may charge MSP a late charge of one and a half percent (1.5%) per month (or part of a month), or the maximum lawful rate permitted by applicable law, for any amounts not paid on time. Furthermore, Strike48 reserves the right to suspend or terminate this Agreement and MSP's access to the Services if MSP does not fully pay MSP's invoices as they become due and payable.
        </p>
        
        <h2>4. EVALUATION SERVICES.</h2>
        
        <p>
          Strike48 may make certain Services or features available to MSP for evaluation purposes only ("Evaluation Services"). If MSP's Order Form specifies that MSP will receive Evaluation Services, then subject to the terms and conditions of this Agreement, Strike48 grants MSP a limited, non-exclusive, revocable, non-transferable, personal, non-sublicensable license to install and use the Evaluation Services, solely for testing and evaluation purposes during the test period defined in the Order Form.
        </p>
        
        <p className={styles.allCaps}>
          NOTWITHSTANDING ANY WARRANTIES IN THIS AGREEMENT, THE EVALUATION SERVICES ARE PROVIDED "AS IS" WITHOUT ANY WARRANTY OF ANY KIND WHATSOEVER. THE EVALUATION SERVICES ARE NOT INTENDED FOR ANY PRODUCTIVE USE OF ANY KIND, AND Strike48 HAS NO LIABILITY FOR ANY USE OUTSIDE OF THE TESTING ENVIRONMENT.
        </p>
        
        <h2>5. BETA SERVICES.</h2>
        
        <p>
          From time to time, Strike48 may make available (but has no obligation to make available) certain Beta Services to MSP. "Beta Services" means non-production beta software, including any updates or upgrades, whether hosted by MSP or Us, and any related documentation. If MSP's Order Form specifies that MSP will receive Beta Services, then subject to the terms and conditions of this Agreement, Strike48 grants MSP a limited, non-exclusive, revocable, non-transferable, personal, non-sublicensable license to install and use the Beta Services, solely for testing and evaluation purposes during the test period defined in the Order Form.
        </p>
        
        <p className={styles.allCaps}>
          NOTWITHSTANDING ANY WARRANTIES IN THIS AGREEMENT, THE BETA SERVICES ARE PROVIDED "AS IS" WITHOUT ANY WARRANTY OF ANY KIND WHATSOEVER. Strike48 DOES NOT GUARANTEE THAT Strike48 WILL MAKE A COMMERCIAL RELEASE OF A VERSION OF THE BETA SERVICES AVAILABLE.
        </p>
        
        <h2>6. MSP'S RESPONSIBILITIES, MSP'S DATA.</h2>
        
        <p>
          MSP is responsible for maintaining and updating MSP's account information to ensure it is accurate and complete. MSP is responsible for all activities conducted under MSP's User logins and for MSP's Users' compliance with this Agreement, and with all applicable laws and regulations. Unauthorized use, resale or commercial exploitation of the Services in any way is expressly prohibited.
        </p>
        
        <p>
          "MSP's Data" includes any information, data or other materials of MSP or its Users or Customers ingested, stored, processed, used by or otherwise transmitted to the Services. MSP is solely responsible for MSP's Data, including the accuracy, integrity or quality of MSP's Data, and the means by which MSP acquires and uses MSP's Data.
        </p>
        
        <p>
          During the Agreement Term, MSP hereby grants to Strike48 a worldwide, non-exclusive, royalty-free transferable right to use, reproduce, analyze, display, transmit, and distribute MSP's Data as necessary to provide and optimize the Services.
        </p>
        
        <h2>7. INTELLECTUAL PROPERTY.</h2>
        
        <p>
          MSP retains ownership of all right, title and interest in and to all MSP's Data.
        </p>
        
        <p>
          MSP acknowledges and agrees that as between Strike48 and MSP, all right, title and interest in and to the Services and all enhancements, modifications and derivatives thereof (including any and all patents, copyrights, trade secret rights, trademarks, trade names and other proprietary rights embodied therein or associated therewith) are and shall remain with Strike48 or Strike48's licensors', and Strike48 in no way conveys any right or interest in the Services other than a limited license to use, as set forth in this Agreement.
        </p>
        
        <h2>8. MONITORING AND AUDIT.</h2>
        
        <p>
          With respect to Cloud Services or Hybrid Cloud Services only: For security reasons, Strike48 monitors User IP addresses and Strike48 will use reasonable efforts to inform MSP if a User account is accessed from multiple IP addresses. The Services include User control software that reports the number of authorized Users and permits Strike48 and/or Strike48's resellers to verify usage of the Services. MSP agrees that Strike48 may monitor or audit MSP's use of the Services (which does not involve any access to MSP's Data or IT systems).
        </p>
        
        <h2>9. CONFIDENTIALITY.</h2>
        
        <p>
          During the Agreement Term, each party will regard any information provided to it by the other party and designated in writing as proprietary or confidential to be confidential ("Confidential Information"). Confidential Information also includes information which, to a reasonable person familiar with the disclosing party's business and the industry in which it operates, is of a confidential or proprietary nature. MSP's Confidential Information includes MSP's Data. Strike48's Confidential Information includes the Services and Strike48's Data.
        </p>
        
        <p>
          The receiving Party will hold in confidence, and will not disclose (or permit or suffer its personnel to disclose) any Confidential Information to any person or entity except to a director, officer, employee, outside consultant, or advisor (collectively "Representatives") who has a need to know such Confidential Information in the course of the performance of their duties for the receiving party and who is bound by a duty of confidentiality no less protective of the disclosing party's Confidential Information than this Agreement.
        </p>
        
        <h2>10. SECURITY AND DATA PROTECTION</h2>
        
        <p>
          During the Agreement Term, Strike48 will maintain a security program that materially complies with generally accepted industry standards. Strike48 will maintain the physical and technical safeguards further described here docs.Strike48.com.
        </p>
        
        <h2>11. LIMITED WARRANTY</h2>
        
        <p>
          Strike48 warrants that during the Subscription Term for the applicable Services, the Services will conform, in all material respects, with the Documentation. For any breach of the above warranty, Strike48 will, at no additional cost to MSP, provide remedial services necessary to enable the Services to conform to the warranty.
        </p>
        
        <p className={styles.allCaps}>
          Strike48 DOES NOT REPRESENT OR WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, OR THAT THE SERVICES WILL MEET MSP'S OR ITS CUSTOMERS' REQUIREMENTS OR THAT ALL ERRORS IN THE SERVICES WILL BE CORRECTED.
        </p>
        
        <h2>12. LIMITATION OF LIABILITY.</h2>
        
        <p className={styles.allCaps}>
          NEITHER PARTY WILL BE LIABLE TO THE OTHER OR ANY THIRD PARTY FOR LOSS OF PROFITS, LOSS OF DATA OR SPECIAL, INDIRECT, INCIDENTAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, IN CONNECTION WITH THE PERFORMANCE OF THE SERVICES, OR THE PERFORMANCE OF ANY OTHER OBLIGATIONS UNDER THIS AGREEMENT, EVEN IF IT IS AWARE OF THE POSSIBILITY OF THE OCCURRENCE OF SUCH DAMAGES. EACH PARTY'S TOTAL CUMULATIVE LIABILITY TO THE OTHER PARTY FOR ANY AND ALL CLAIMS AND DAMAGES UNDER THIS AGREEMENT, WHETHER ARISING BY STATUTE, CONTRACT, TORT OR OTHERWISE, WILL NOT EXCEED THE SERVICES FEES PAID OR PAYABLE BY MSP TO Strike48 UNDER THE ORDER Form FOR THE SERVICES WHICH FORM THE SUBJECT OF THE CLAIM DURING THE 12 MONTH PERIOD IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
        </p>
        
        <h2>13. TERM & TERMINATION, SUSPENSION</h2>
        
        <p>
          This Agreement will begin on the Effective Date as set forth above and will continue for a period of one year from the Effective Date, unless otherwise terminated under this Section 13 (the "Agreement Term"). The term of the subscription to the Services shall be set forth on each Order Form (the "Subscription Term"). The Agreement Term and the Subscription Term will each automatically renew for successive periods equal in length to their initial term, unless either party provides the other with written notice of intent to terminate 90 days prior to the end of the then current term.
        </p>
        
        <p>
          Either party may terminate this Agreement or any Order Form (i) immediately in the event of a material breach of this Agreement or any such Order Form by the other party that is not cured within thirty (30) days of written notice from the other party, or (ii) immediately if the other party ceases doing business or is the subject of a voluntary or involuntary bankruptcy, insolvency or similar proceeding, that is not dismissed within ninety (90) days of filing.
        </p>
        
        <h2>14. INDEMNIFICATION</h2>
        
        <p>
          Strike48 will indemnify, defend and hold MSP harmless from and against any and all costs, liabilities, losses, and expenses (including, but not limited to, reasonable attorneys' fees) (collectively, "Losses") incurred, arising out of or in connection with a claim, suit, action, or proceeding brought by any third party against MSP alleging that the use of the Services as permitted hereunder infringes any patent, copyright or trademark, or constitutes a misappropriation of a trade secret of a third party.
        </p>
        
        <p>
          MSP will indemnify, defend, and hold Strike48 harmless from and against any and all Losses resulting from a claim, suit, action, or proceeding brought by any third party against Strike48 that arises out of or results from a claim alleging that MSP's Data, or any use thereof, infringes the intellectual property rights or proprietary rights of a third party, or arising out of MSP's violation of any applicable law or its material breach of the provisions of this Agreement.
        </p>
        
        <h2>15. GENERAL PROVISIONS.</h2>
        
        <h3>Entire Agreement.</h3>
        
        <p>
          This Agreement, including all attachments and hyperlinks hereto and all Order Forms, contains the entire agreement between the parties, and supersedes all prior or contemporaneous proposals, understandings, representations, warranties, covenants, and any other communications (whether written or oral) between the parties relating thereto.
        </p>
        
        <h3>Assignment.</h3>
        
        <p>
          This Agreement shall be binding upon and for the benefit of each party and their permitted successors and assigns. Either party may assign this Agreement and all Order Forms as part of a corporate reorganization, consolidation, merger, or sale of substantially all of its assets.
        </p>
        
        <h3>Governing Law.</h3>
        
        <p>
          This Agreement shall be governed by and construed in accordance with the laws of the State of New York, USA without regard to its conflict of law provisions if MSP is located in the United States or rest of world outside the European Union. This Agreement shall be governed by and construed in accordance with the laws of Spain, without regard to its conflict of law provisions if MSP is located within the European Union.
        </p>
        
        <h3>Notices.</h3>
        
        <p>
          MSP consents to receiving electronic communications (including emails at the address in MSP's Order Form) and notifications from Strike48 in connection with MSP's use of the Services, and with respect to any notice, approval, request, authorization, direction or other communication to be provided to MSP under this Agreement.
        </p>
        
        <div className={styles.signatureBlock}>
          <div className={styles.signatureColumn}>
            <p>FOR AND ON BEHALF OF Strike48 TECHNOLOGY, INC</p>
            <div className={styles.signatureLine}>
              <p>Name:</p>
              <div className={styles.line}></div>
            </div>
            <div className={styles.signatureLine}>
              <p>Title:</p>
              <div className={styles.line}></div>
            </div>
            <div className={styles.signatureLine}>
              <p>Date:</p>
              <div className={styles.line}></div>
            </div>
          </div>
          
          <div className={styles.signatureColumn}>
            <p>FOR AND ON BEHALF OF</p>
            <div className={styles.signatureLine}>
              <p>Name:</p>
              <div className={styles.line}></div>
            </div>
            <div className={styles.signatureLine}>
              <p>Title:</p>
              <div className={styles.line}></div>
            </div>
            <div className={styles.signatureLine}>
              <p>Date:</p>
              <div className={styles.line}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsContent;