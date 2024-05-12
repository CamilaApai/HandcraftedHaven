import type { NextPage } from "next";
import TypesmallStatusnormalDir1 from "./typesmall-statusnormal-dir1";
import StylesolidPaddingsquareS from "./stylesolid-paddingsquare-s";
import styles from "./best-sellers-container.module.css";

const BestSellersContainer: NextPage = () => {
  return (
    <div className={styles.sliderProducts}>
      <div className={styles.sectionTitle}>
        <div className={styles.orSubscribeTo}>Best sellers</div>
      </div>
      <div className={styles.topSectionProducts}>
        <div className={styles.category}>
          <div className={styles.itemTab}>
            <div className={styles.item}>all products</div>
          </div>
          <div className={styles.itemTab1}>
            <div className={styles.item}>t-shirt</div>
          </div>
          <div className={styles.itemTab2}>
            <div className={styles.item}>hoodies</div>
          </div>
          <div className={styles.itemTab3}>
            <div className={styles.item}>jacket</div>
          </div>
        </div>
        <TypesmallStatusnormalDir1
          icon1=""
          filter="show all"
          icon={false}
          typesmallStatusnormalDirBackgroundColor="#1e2832"
          typesmallStatusnormalDirPadding="var(--padding-8xs) var(--padding-mini)"
          typesmallStatusnormalDirGap="4px"
          typesmallStatusnormalDirPosition="unset"
          typesmallStatusnormalDirTop="unset"
          typesmallStatusnormalDirLeft="unset"
          v6IconFreeWidth="20px"
          v6IconFreeHeight="20px"
          iconWidth="16px"
          iconFontSize="14px"
          iconColor="#fff"
          iconHeight="unset"
          filterFontFamily="'Open Sans'"
          filterColor="#fff"
          filterFontSize="16px"
        />
      </div>
      <div className={styles.slider}>
        <div className={styles.products}>
          <div className={styles.card}>
            <div className={styles.topProduct}>
              <img className={styles.img11Icon} alt="" src="/img11@2x.png" />
              <div className={styles.ribbon}>
                <div className={styles.background} />
                <div className={styles.hot}>hot</div>
              </div>
            </div>
            <div className={styles.bottomProduct}>
              <div className={styles.bag}>Dress</div>
              <div className={styles.div}>$236.00</div>
              <div className={styles.titleProduct}>
                <div className={styles.nikeSportswearFutura}>
                  Basic Dress Green
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.topProduct}>
              <img className={styles.img11Icon} alt="" src="/img14@2x.png" />
              <div className={styles.ribbon1}>
                <div className={styles.background} />
                <div className={styles.hot}>hot</div>
              </div>
            </div>
            <div className={styles.bottomProduct}>
              <div className={styles.bag}>Bag</div>
              <div className={styles.div}>$130.00</div>
              <div className={styles.titleProduct1}>
                <div className={styles.nikeSportswearFutura}>
                  Nike Sportswear Futura Luxe
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card2}>
            <div className={styles.topProduct}>
              <img className={styles.img11Icon} alt="" src="/img04@2x.png" />
              <div className={styles.ribbon}>
                <div className={styles.background2} />
                <div className={styles.sale}>sale</div>
              </div>
            </div>
            <div className={styles.bottomProduct2}>
              <div className={styles.bag2}>Dress</div>
              <div className={styles.div2}>$155.00</div>
              <div className={styles.div3}>$364.00</div>
              <div className={styles.titleProduct2}>
                <div className={styles.nikeSportswearFutura}>
                  Yellow Reserved Hoodie
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card2}>
            <div className={styles.topProduct}>
              <img className={styles.img11Icon} alt="" src="/img12@2x.png" />
              <div className={styles.ribbon}>
                <div className={styles.background2} />
                <div className={styles.sale}>sale</div>
              </div>
            </div>
            <div className={styles.bottomProduct2}>
              <div className={styles.bag2}>shoe</div>
              <div className={styles.div2}>$198.00</div>
              <div className={styles.div3}>$220.00</div>
              <div className={styles.titleProduct3}>
                <div className={styles.nikeSportswearFutura}>
                  Nike Air Zoom Pegasus
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sliderArrow}>
          <StylesolidPaddingsquareS
            iconName=""
            stylesolidPaddingsquareSWidth="40px"
            stylesolidPaddingsquareSHeight="40px"
            stylesolidPaddingsquareSPosition="unset"
            stylesolidPaddingsquareSTop="unset"
            stylesolidPaddingsquareSLeft="unset"
            iconWidth="32px"
            iconFontSize="32px"
            iconColor="rgba(30, 40, 50, 0.25)"
            iconHeight="unset"
            iconWebkitTextStroke="unset"
            iconFontFamily="'Font Awesome 6 Free'"
          />
          <StylesolidPaddingsquareS
            iconName=""
            stylesolidPaddingsquareSWidth="40px"
            stylesolidPaddingsquareSHeight="40px"
            stylesolidPaddingsquareSPosition="unset"
            stylesolidPaddingsquareSTop="unset"
            stylesolidPaddingsquareSLeft="unset"
            iconWidth="32px"
            iconFontSize="32px"
            iconColor="rgba(30, 40, 50, 0.25)"
            iconHeight="unset"
            iconWebkitTextStroke="unset"
            iconFontFamily="'Font Awesome 6 Free'"
          />
        </div>
      </div>
    </div>
  );
};

export default BestSellersContainer;
