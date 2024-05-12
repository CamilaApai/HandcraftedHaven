import type { NextPage } from "next";
import styles from "./frame-component2.module.css";

const FrameComponent2: NextPage = () => {
  return (
    <div className={styles.homeInner}>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-2900@2x.png"
          />
          <img
            className={styles.frameItem}
            alt=""
            src="/rectangle-2902@2x.png"
          />
          <img
            className={styles.frameInner}
            alt=""
            src="/rectangle-2901@2x.png"
          />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.shopNowParent}>
            <div className={styles.shopNow}>Shop now</div>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
          </div>
          <div className={styles.useCodeEid40Container}>
            <p
              className={styles.yourThreeOrders}
            >{`Use Code Eid40 at Checkout for 40% weaver `}</p>
            <p className={styles.yourThreeOrders}>
              your Three Orders, end, 18-06-2024
            </p>
          </div>
          <b className={styles.largeCeramicCoffeContainer}>
            <p className={styles.yourThreeOrders}>Large Ceramic</p>
            <p className={styles.yourThreeOrders}>Coffe Cup</p>
          </b>
        </div>
        <div className={styles.parent}>
          <div className={styles.div}>01</div>
          <div className={styles.div1}>03</div>
          <img className={styles.groupIcon} alt="" src="/group-9257.svg" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
