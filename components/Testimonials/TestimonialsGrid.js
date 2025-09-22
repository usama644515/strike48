import TestimonialCard from './TestimonialCard';
import styles from './TestimonialsGrid.module.css';

const TestimonialsGrid = () => {
  const testimonials = [
    {
      quote: "We tasked AI Assist with hunting for a phishing campaign based on a single email. It tracked down the phishing email our analyst recently received, AND it tied it to other targets who also received phishing emails with SLIGHTLY different subject lines and senders.",
      company: "TE Connectivity",
      logo: "TE"
    },
    {
      quote: "A customer asked us about data exfiltration risks in Salesforce, elevated privileges, admin accounts, and so on. I turned to AI Assist for a risk analysis and got a ton of excellent information and reports back. I sent the information to our SOC, and have a meeting with the customer in under an hour.",
      company: "DeepSeas",
      logo: "DS"
    },
    {
      quote: "We are running a Purple Teams exercise and are investigating a suspicious web connection to an address in North Korea. The user was questioned and denied the action, but after a preliminary investigation, the analyst was not so sure. He asked AI Assist to investigate the event, and after querying the tables, the Analyst and AI Assist came to the same conclusion: the user lied!",
      company: "TE Connectivity",
      logo: "TE"
    },
    {
      quote: "One of the biggest tasks for SOC teams is Alert generation and testing. Log Sources with no alerts cost resources and provide no value! We asked AI Assist to identify any log sources that had no alerts associated with them. Not only did it identify the new sources but a collection of existing log sources! We tasked AI Assist with generating alerts for all these identified log sources and shortly we had 50 new alerts created and ready for validation!!",
      company: "Hotwire",
      logo: "HW"
    },
    {
      quote: "Seeing a rise in Scattered Spider attacks targeting our teams, I asked AI Assist to investigate these events by listing all users who had more than 10 MFA prompts in the last few days. I received a very thorough summary of users who fit the criteria, as well as excellent follow-up suggestions and priority of actions. Very good!",
      company: "CSG",
      logo: "CSG"
    },
    {
      quote: "Thanks for the update! I tested it out and it's absolutely AMAZING, feels like having my own little SOC minions at work.",
      company: "Vitra Health",
      logo: "VH"
    }
  ];

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              company={testimonial.company}
              logo={testimonial.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;