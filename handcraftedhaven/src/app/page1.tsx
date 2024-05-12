import type { NextPage } from "next";
import StylesolidPaddingsquareS from "../components/stylesolid-paddingsquare-s";
import InstagramFeedContainer from "../components/instagram-feed-container";
import BestSellersContainer from "../components/best-sellers-container";
import BrandBannerContainer from "../components/brand-banner-container";
import ProductGridContainer from "../components/product-grid-container";
import PopularStylesContainer from "../components/popular-styles-container";
import MainContainer from "../components/main-container";
import Typedesktop1 from "../components/typedesktop1";
import styles from "./index1.module.css";

const Index1: NextPage = () => {
  return (
    <div className={styles.index1}>
      <div className={styles.footer}>
        <div className={styles.topFooter}>
          <div className={styles.footerMenu}>
            <div className={styles.titleMenu}>
              <div className={styles.customerServices}>CUSTOMER SERVICES</div>
            </div>
            <div className={styles.itemMenu}>
              <div className={styles.itemMenu1}>
                <div className={styles.item}>Contact Us</div>
              </div>
              <div className={styles.itemMenu1}>
                <div className={styles.item}>Track Your Order</div>
              </div>
              <div className={styles.itemMenu1}>
                <div className={styles.item}>{`Product Care & Repair`}</div>
              </div>
              <div className={styles.itemMenu1}>
                <div className={styles.item}>Book an Appointment</div>
              </div>
              <div className={styles.itemMenu1}>
                <div className={styles.item}>{`Shipping & Returns`}</div>
              </div>
            </div>
          </div>
          <div className={styles.footerMenu1}>
            <div className={styles.titleMenu1}>
              <div className={styles.customerServices}>ABOUT US</div>
            </div>
            <div className={styles.itemMenu}>
              <div className={styles.itemMenu1}>
                <div className={styles.item}>Our Producers</div>
              </div>
              <div className={styles.itemMenu1}>
                <div className={styles.item}>Sitemap</div>
              </div>
              <div className={styles.itemMenu1}>
                <div className={styles.item}>FAQ</div>
              </div>
              <div className={styles.itemMenu1}>
                <div className={styles.item}>About Us</div>
              </div>
              <div className={styles.itemMenu1}>
                <div className={styles.item}>{`Terms & Conditions`}</div>
              </div>
            </div>
          </div>
          <div className={styles.footerMenu2}>
            <div className={styles.titleMenu2}>
              <div className={styles.customerServices}>CATALOG</div>
            </div>
            <div className={styles.itemMenu}>
              <div className={styles.itemMenu1}>
                <div className={styles.item}>Necklaces</div>
              </div>
              <div className={styles.itemMenu1}>
                <div className={styles.item}>hoodies</div>
              </div>
              <div className={styles.itemMenu1}>
                <div className={styles.item}>Jewelry Box</div>
              </div>
              <div className={styles.itemMenu1}>
                <div className={styles.item}>t-shirt</div>
              </div>
              <div className={styles.itemMenu1}>
                <div className={styles.item}>jacket</div>
              </div>
            </div>
          </div>
          <div className={styles.leftFooter}>
            <div className={styles.logo}>
              <div className={styles.coral}>CORAL</div>
              <img className={styles.logoChild} alt="" src="/group-97.svg" />
              <img className={styles.logoItem} alt="" src="/group-97.svg" />
            </div>
            <div className={styles.loremIpsumDolorContainer}>
              <p className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </p>
              <p className={styles.loremIpsumDolor}>
                elit, sed do eiusmod tempor incididunt ut labore et
              </p>
              <p className={styles.doloreMagnaAliqua}>dolore magna aliqua</p>
            </div>
            <div className={styles.social}>
              <StylesolidPaddingsquareS
                iconName=""
                stylesolidPaddingsquareSWidth="25px"
                stylesolidPaddingsquareSHeight="25px"
                stylesolidPaddingsquareSPosition="unset"
                stylesolidPaddingsquareSTop="unset"
                stylesolidPaddingsquareSLeft="unset"
                iconWidth="20px"
                iconFontSize="20px"
                iconColor="#1e2832"
                iconHeight="19px"
                iconWebkitTextStroke="unset"
                iconFontFamily="'Font Awesome 6 Brands'"
              />
              <StylesolidPaddingsquareS
                iconName=""
                stylesolidPaddingsquareSWidth="25px"
                stylesolidPaddingsquareSHeight="25px"
                stylesolidPaddingsquareSPosition="unset"
                stylesolidPaddingsquareSTop="unset"
                stylesolidPaddingsquareSLeft="unset"
                iconWidth="20px"
                iconFontSize="20px"
                iconColor="#1e2832"
                iconHeight="19px"
                iconWebkitTextStroke="unset"
                iconFontFamily="'Font Awesome 6 Brands'"
              />
              <StylesolidPaddingsquareS
                iconName=""
                stylesolidPaddingsquareSWidth="25px"
                stylesolidPaddingsquareSHeight="25px"
                stylesolidPaddingsquareSPosition="unset"
                stylesolidPaddingsquareSTop="unset"
                stylesolidPaddingsquareSLeft="unset"
                iconWidth="20px"
                iconFontSize="20px"
                iconColor="#1e2832"
                iconHeight="19px"
                iconWebkitTextStroke="unset"
                iconFontFamily="'Font Awesome 6 Brands'"
              />
              <StylesolidPaddingsquareS
                iconName=""
                stylesolidPaddingsquareSWidth="25px"
                stylesolidPaddingsquareSHeight="25px"
                stylesolidPaddingsquareSPosition="unset"
                stylesolidPaddingsquareSTop="unset"
                stylesolidPaddingsquareSLeft="unset"
                iconWidth="20px"
                iconFontSize="20px"
                iconColor="#1e2832"
                iconHeight="19px"
                iconWebkitTextStroke="unset"
                iconFontFamily="'Font Awesome 6 Brands'"
              />
            </div>
          </div>
        </div>
        <div className={styles.bottomFooter}>
          <div className={styles.coralInc}>© 2022 Coral , Inc.</div>
          <img
            className={styles.iconsPayment1}
            alt=""
            src="/icons-payment-1@2x.png"
          />
          <div className={styles.button}>
            <div className={styles.coralInc}>Scroll to top</div>
            <StylesolidPaddingsquareS
              iconName=""
              stylesolidPaddingsquareSWidth="20px"
              stylesolidPaddingsquareSHeight="20px"
              stylesolidPaddingsquareSPosition="unset"
              stylesolidPaddingsquareSTop="unset"
              stylesolidPaddingsquareSLeft="unset"
              iconWidth="16px"
              iconFontSize="14px"
              iconColor="#fff"
              iconHeight="unset"
              iconWebkitTextStroke="unset"
              iconFontFamily="'Font Awesome 6 Free'"
            />
          </div>
        </div>
      </div>
      <InstagramFeedContainer />
      <BestSellersContainer />
      <BrandBannerContainer />
      <ProductGridContainer />
      <PopularStylesContainer />
      <div className={styles.brand}>
        <img className={styles.brand05Icon} alt="" src="/brand05@2x.png" />
        <img className={styles.brand05Icon} alt="" src="/brand01@2x.png" />
        <img className={styles.brand05Icon} alt="" src="/brand03@2x.png" />
        <img className={styles.brand05Icon} alt="" src="/brand02@2x.png" />
        <img className={styles.brand05Icon} alt="" src="/brand04@2x.png" />
      </div>
      <MainContainer />
      <Typedesktop1
        typedesktopPosition="absolute"
        typedesktopTop="31px"
        typedesktopLeft="300px"
        icon
      />
    </div>
  );
};

export default Index1;
