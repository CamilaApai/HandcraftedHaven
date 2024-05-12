import type { NextPage } from "next";
import TypesmallStatusnormalDir1 from "./typesmall-statusnormal-dir1";
import styles from "./main-container.module.css";

const MainContainer: NextPage = () => {
  return (
    <div className={styles.topMain}>
      <img
        className={styles.flowerPatternIcon}
        alt=""
        src="/flowerpattern.svg"
      />
      <div className={styles.product}>
        <div className={styles.imageProduct}>
          <div className={styles.imageProductChild} />
          <img className={styles.img19Icon} alt="" src="/img19@2x.png" />
        </div>
        <div className={styles.content}>
          <div className={styles.collections}>Collections</div>
          <div className={styles.youCanExploreContainer}>
            <p className={styles.youCanExplore}>
              you can explore ans shop many differnt collection
            </p>
            <p className={styles.fromVariousBarands}>
              from various barands here.
            </p>
          </div>
          <TypesmallStatusnormalDir1
            icon1=""
            filter="shop now"
            icon
            typesmallStatusnormalDirBackgroundColor="#1e2832"
            typesmallStatusnormalDirPadding="var(--padding-lgi) var(--padding-7xl)"
            typesmallStatusnormalDirGap="8px"
            typesmallStatusnormalDirPosition="absolute"
            typesmallStatusnormalDirTop="292px"
            typesmallStatusnormalDirLeft="4px"
            v6IconFreeWidth="30px"
            v6IconFreeHeight="30px"
            iconWidth="24px"
            iconFontSize="24px"
            iconColor="#fff"
            iconHeight="unset"
            filterFontFamily="Roboto"
            filterColor="#fff"
            filterFontSize="29px"
          />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
