import { features } from "../constants";
import styles, { layout } from "../styles";
import Button from "./Button";

// Feature Card
const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    {/* Icon */}
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt={title} className="w-[50%] h-[50%] object-contain" />
    </div>

    {/* Info */}
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

// Business
const Business = () => {
  return (
    <section id="features" className={layout.section}>
      {/* Section Info */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
        Where gamers connect<br className="sm:block hidden" /> and
          thrive 
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Welcome to PlayUnite, the ultimate platform for gamers to connect, compete, and collaborate. Discover a vibrant community of players from around the globe, engage in thrilling tournaments, and enjoy exclusive content. Whether you're a casual gamer or a competitive enthusiast, PlayUnite offers a unique space to share your passion, make new friends, and elevate your gaming experience. Join us today and be part of the next generation of social gaming!
        </p>

        {/* Get Started */}
        <Button styles="mt-10" />
      </div>

      {/* Features */}
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, i) => (
          <FeatureCard key={feature.id} {...feature} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Business;
