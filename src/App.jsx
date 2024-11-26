import styles from "./style";
import {
  Navbar,
  Hero,
  Stats,
  CardDeal,
  Billing,
  Business,
  Testimonials,
  Clients,
  CTA,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar></Navbar>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero></Hero>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats></Stats>
        <Business></Business>
        <Billing></Billing>
        <CardDeal></CardDeal>
        <Testimonials></Testimonials>
        <Clients></Clients>
        <CTA></CTA>
      </div>
    </div>
  </div>
);

export default App;
