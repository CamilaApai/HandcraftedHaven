import type { NextPage } from "next";
import styles from "./shipping.module.css";

const Shipping: NextPage = () => {
  return (
    <div className={styles.shipping}>
      <div className={styles.shippingInner}>
        <div className={styles.groupParent}>
          <img className={styles.frameChild} alt="" src="/group-62.svg" />
          <div className={styles.contactUs}>CONTACT US</div>
        </div>
      </div>
      <div className={styles.shippingChild}>
        <div className={styles.groupContainer}>
          <img className={styles.frameChild} alt="" src="/group-9242.svg" />
          <div className={styles.contactUs}>Free Shipping</div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.groupParent1}>
          <img className={styles.frameChild} alt="" src="/group-64.svg" />
          <div className={styles.contactUs}>Expert ARTISANS</div>
        </div>
      </div>
      <div className={styles.shippingInner1}>
        <div className={styles.frameParent}>
          <div className={styles.ellipseParent}>
            <div className={styles.ellipseDiv} />
            <div className={styles.fi5412910}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <img
                className={styles.fi5412910Child}
                alt=""
                src="/group-641.svg"
              />
            </div>
          </div>
          <div className={styles.contactUs}>Amazing Deals</div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
