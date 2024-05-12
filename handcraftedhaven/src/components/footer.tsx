import type { NextPage } from "next";
import styles from "./footer.module.css";

const Footer: NextPage = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          alt=""
          src="/rectangle-2937@2x.png"
        />
        <img
          className={styles.frameChild}
          alt=""
          src="/rectangle-2939@2x.png"
        />
        <img
          className={styles.frameChild}
          alt=""
          src="/rectangle-2940@2x.png"
        />
        <img
          className={styles.frameChild}
          alt=""
          src="/rectangle-2942@2x.png"
        />
        <img
          className={styles.frameChild}
          alt=""
          src="/rectangle-2943@2x.png"
        />
        <img
          className={styles.frameChild}
          alt=""
          src="/rectangle-2944@2x.png"
        />
      </div>
      <div className={styles.footerInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.layer1Parent}>
              <div className={styles.layer1}>
                <img className={styles.groupIcon} alt="" src="/group.svg" />
                <img className={styles.groupIcon1} alt="" src="/group1.svg" />
              </div>
              <div className={styles.parent}>
                <div className={styles.div}>+00 123 45678 44</div>
                <div className={styles.aEastMansterContainer}>
                  <p
                    className={styles.aEastManster}
                  >{`555 A, East Manster Street, Ready `}</p>
                  <p className={styles.aEastManster}>Halley Neon, Uk 4512</p>
                </div>
                <div className={styles.supportinfogmailcom}>
                  Supportinfo@gmail.com
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.wrapper}>
                    <div className={styles.div1}>facebook-f</div>
                  </div>
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src="/frame-1000008205.svg"
                  />
                  <div className={styles.container}>
                    <div className={styles.div2}>linkedin</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.quickLinksParent}>
              <div className={styles.quickLinks}>Quick Links</div>
              <div className={styles.homePage}>Home Page</div>
              <div className={styles.products}>Products</div>
              <div className={styles.artisans}>Artisans</div>
              <div className={styles.aboutUs}>About Us</div>
              <div className={styles.contact}>Contact</div>
            </div>
            <div className={styles.privacyProtectionParent}>
              <div className={styles.ourPolicy}>Our Policy</div>
              <div className={styles.privacyProtection}>Privacy Protection</div>
              <div className={styles.safePayments}>Safe Payments</div>
              <div className={styles.termsOfService}>Terms of Service</div>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
            </div>
            <div className={styles.profileParent}>
              <div className={styles.profile}>Profile</div>
              <div className={styles.homePage}>My Account</div>
              <div className={styles.products}>Checkout</div>
              <div className={styles.artisans}>{`Help & Support`}</div>
              <div className={styles.homePage}>My Account</div>
            </div>
          </div>
          <img className={styles.lineIcon} alt="" src="/line-11.svg" />
          <div className={styles.copyright2024AllRightsRParent}>
            <div className={styles.copyright2024}>
              Copyright © 2024. All Rights Reserved.
            </div>
            <div className={styles.groupParent}>
              <img
                className={styles.frameChild3}
                alt=""
                src="/group-9220.svg"
              />
              <img
                className={styles.frameChild4}
                alt=""
                src="/group-9222.svg"
              />
              <img
                className={styles.fi11041055Icon}
                alt=""
                src="/fi-11041055.svg"
              />
              <img
                className={styles.frameChild5}
                alt=""
                src="/group-9224.svg"
              />
              <img
                className={styles.frameChild5}
                alt=""
                src="/group-9225.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
