import type { NextPage } from "next";
import styles from "./popular-styles-container.module.css";

const PopularStylesContainer: NextPage = () => {
  return (
    <div className={styles.hotCategory}>
      <div className={styles.exploreNewAnd}>Explore new and popular styles</div>
      <div className={styles.card}>
        <img className={styles.img01Icon} alt="" src="/img01@2x.png" />
        <div className={styles.ribbon}>
          <div className={styles.background} />
          <div className={styles.hot}>hot</div>
        </div>
        <div className={styles.bottomCategory}>
          <div className={styles.pants}>Pants</div>
          <div className={styles.product}>200 product</div>
        </div>
      </div>
      <div className={styles.card1}>
        <img className={styles.img18Icon} alt="" src="/img18@2x.png" />
        <div className={styles.ribbon}>
          <div className={styles.background} />
          <div className={styles.hot}>hot</div>
        </div>
        <div className={styles.bottomCategory1}>
          <div className={styles.pants}>manto</div>
          <div className={styles.product}>86 product</div>
        </div>
      </div>
      <div className={styles.card2}>
        <img className={styles.img01Icon} alt="" src="/img02@2x.png" />
        <div className={styles.ribbon}>
          <div className={styles.background} />
          <div className={styles.hot}>hot</div>
        </div>
        <div className={styles.bottomCategory}>
          <div className={styles.pants}>Shirt</div>
          <div className={styles.product}>320 product</div>
        </div>
      </div>
      <div className={styles.card3}>
        <img className={styles.img01Icon} alt="" src="/img03@2x.png" />
        <div className={styles.ribbon3}>
          <div className={styles.background3} />
          <div className={styles.sale}>sale</div>
        </div>
        <div className={styles.bottomCategory3}>
          <div className={styles.pants}>coat</div>
          <div className={styles.product}>520 product</div>
        </div>
      </div>
      <div className={styles.card4}>
        <img className={styles.img01Icon} alt="" src="/img20@2x.png" />
        <div className={styles.ribbon}>
          <div className={styles.background} />
          <div className={styles.hot}>hot</div>
        </div>
        <div className={styles.bottomCategory}>
          <div className={styles.pants}>jacket</div>
          <div className={styles.product}>103 product</div>
        </div>
      </div>
    </div>
  );
};

export default PopularStylesContainer;
