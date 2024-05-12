import type { NextPage } from "next";
import styles from "./instagram-feed-container.module.css";

const InstagramFeedContainer: NextPage = () => {
  return (
    <div className={styles.newsletterInstagram}>
      <div className={styles.instagram}>
        <div className={styles.sectionTitle}>
          <div className={styles.orSubscribeTo}>
            Follow products and discounts on Instagram
          </div>
        </div>
        <div className={styles.instagram1}>
          <div className={styles.card}>
            <img className={styles.img06Icon} alt="" src="/img06@2x.png" />
            <div className={styles.shodowLayer}>
              <div className={styles.v6IconFree}>
                <div className={styles.icon}></div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.img06Icon} alt="" src="/img07@2x.png" />
            <div className={styles.shodowLayer}>
              <div className={styles.v6IconFree}>
                <div className={styles.icon}></div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.img06Icon} alt="" src="/img09@2x.png" />
            <div className={styles.shodowLayer}>
              <div className={styles.v6IconFree}>
                <div className={styles.icon}></div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.img06Icon} alt="" src="/img05@2x.png" />
            <div className={styles.shodowLayer}>
              <div className={styles.v6IconFree}>
                <div className={styles.icon}></div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.img06Icon} alt="" src="/img08@2x.png" />
            <div className={styles.shodowLayer}>
              <div className={styles.v6IconFree}>
                <div className={styles.icon}></div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.img06Icon} alt="" src="/img10@2x.png" />
            <div className={styles.shodowLayer}>
              <div className={styles.v6IconFree}>
                <div className={styles.icon}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.newsletter}>
        <div className={styles.newsletterForm}>
          <div className={styles.input}>
            <div className={styles.inputChild} />
            <div className={styles.emailAddress}>Email address...</div>
          </div>
          <div className={styles.button}>
            <div className={styles.v6IconFreeParent}>
              <div className={styles.v6IconFree6}>
                <div className={styles.icon6}></div>
              </div>
              <div className={styles.submit}>SUBMIT</div>
            </div>
            <div className={styles.buttonChild} />
          </div>
          <div className={styles.sectionTitle1}>
            <div className={styles.orSubscribeTo}>
              Or subscribe to the newsletter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramFeedContainer;
