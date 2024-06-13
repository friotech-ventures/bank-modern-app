import { feedback } from "../constants";
import styles from "../styles";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    {/* Gradient */}
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    {/* Heading */}
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={`${styles.heading2} md:text-center`}>
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          The best TO . The management was top notch! The support team was very helpful
        </p>
      </div>
    </div>

    {/* Feedback Cards */}
    <div
      className="flex flex-wrap sm:justify-start w-full feedback-container relative z-[1]"
      style={{ justifyContent: "center" }}
    >
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
