import type { NextPage } from "next";
import TypesmallStatusnormalDir1 from "./typesmall-statusnormal-dir1";
import styles from "./brand-banner-container.module.css";

const BrandBannerContainer: NextPage = () => {
  return (
    <div className={styles.brandBanner}>
      <img className={styles.backgroundIcon} alt="" src="/background@2x.png" />
      <div className={styles.lustrousYetUnderstatedContainer}>
        <p className={styles.lustrousYetUnderstated}>
          Lustrous yet understated. The new evening
        </p>
        <p className={styles.lustrousYetUnderstated}>
          wear collection exclusively offered at the
        </p>
        <p className={styles.lustrousYetUnderstated}>
          reopened Giorgio Armani boutique in Los
        </p>
        <p className={styles.angeles}>Angeles.</p>
      </div>
      <img
        className={styles.pxZaraLogo1Icon}
        alt=""
        src="/1024pxzara-logo-1@2x.png"
      />
      <img
        className={styles.pxZaraLogo2Icon}
        alt=""
        src="/1024pxzara-logo-2@2x.png"
      />
      <TypesmallStatusnormalDir1
        icon1=""
        filter="see collection"
        icon={false}
        typesmallStatusnormalDirBackgroundColor="#fff"
        typesmallStatusnormalDirPadding="var(--padding-lgi) var(--padding-7xl)"
        typesmallStatusnormalDirGap="8px"
        typesmallStatusnormalDirPosition="absolute"
        typesmallStatusnormalDirTop="611px"
        typesmallStatusnormalDirLeft="1083px"
        v6IconFreeWidth="30px"
        v6IconFreeHeight="30px"
        iconWidth="24px"
        iconFontSize="24px"
        iconColor="#fff"
        iconHeight="unset"
        filterFontFamily="Roboto"
        filterColor="#1e2832"
        filterFontSize="29px"
      />
    </div>
  );
};

export default BrandBannerContainer;
