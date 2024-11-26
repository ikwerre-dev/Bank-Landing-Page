import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find the perfect card deal <br className="sm:block hidden" /> in just a few steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Explore tailored solutions that fit your needs. Simplify your financial journey with options designed for you.
      </p>
      <Button styles="mt-10"></Button>
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="Card illustration" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;