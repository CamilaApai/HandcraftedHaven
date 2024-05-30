import type { NextPage } from "next";
import styles from "./index.module.css";
import Header from "./header";
import Footer from "./footer";

export default function Home() {
  return (
    <div className={styles.aaa}>
      <div className={styles.homeLinkcommon01}>
        <div className={styles.shipping}>
          <div className={styles.shippingInner}>
            <div className={styles.groupParent}>
              <img className={styles.frameChild} alt="" src="/group-62.svg" />
              <div className={styles.contactUs}>GREAT CUSTOMER SERVICE</div>
            </div>
          </div>
          <div className={styles.shippingChild}>
            <div className={styles.freeShippingParent}>
              <img className={styles.frameChild} alt="" src="/group-9242.svg" />
              <div className={styles.contactUs}>Free Shipping</div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.groupContainer}>
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
        <div className={styles.homeLinkcommon01Inner}>
          <div className={styles.frameGroup}>
            <div className={styles.rectangleParent}>
              <img
                className={styles.rectangleIcon}
                alt=""
                src="/rectangle-2900@2x.png"
              />
              <img
                className={styles.frameChild1}
                alt=""
                src="/rectangle-2902@2x.png"
              />
              <img
                className={styles.frameChild2}
                alt=""
                src="/rectangle-2901@2x.png"
              />
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.shopNowParent}>
                <div className={styles.shopNow}>Shop now</div>
                <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
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
          </div>
        </div>
        <div className={styles.showcase}>
          <div className={styles.rectangleGroup}>
            <img
              className={styles.frameChild3}
              alt=""
              src="/rectangle-2906@2x.png"
            />
            <b className={styles.ceramicsJug}>
              <p className={styles.yourThreeOrders}>{`Ceramics `}</p>
              <p className={styles.yourThreeOrders}>Jug</p>
            </b>
            <div className={styles.shopNowGroup}>
              <div className={styles.text}>Shop now</div>
              <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.rectangleContainer}>
              <img
                className={styles.frameChild4}
                alt=""
                src="/rectangle-2908@2x.png"
              />
              <div className={styles.frameWrapper}>
                <div className={styles.shopNowContainer}>
                  <div className={styles.text}>Shop now</div>
                  <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent1}>
              <img
                className={styles.frameChild5}
                alt=""
                src="/rectangle-2907@2x.png"
              />
              <div className={styles.ceramicsDesignMugParent}>
                <b className={styles.ceramicsDesignMugContainer}>
                  <p className={styles.yourThreeOrders}>{`Ceramics `}</p>
                  <p className={styles.yourThreeOrders}>Design mug</p>
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.trendingProduct}>
          <div className={styles.trendingProductParent}>
            <b className={styles.trendingProduct1}>Trending product</b>
            <div className={styles.sculpturesParent}>
              <div className={styles.sculptures}>Sculptures</div>
              <div className={styles.pottery}> Pottery</div>
              <div className={styles.porcelain}>Porcelain</div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.frameParent3}>
              <div className={styles.rectangleParent2}>
                <div className={styles.rectangleDiv} />
                <img
                  className={styles.frameChild6}
                  alt=""
                  src="/rectangle-2916@2x.png"
                />
                <div className={styles.potrayHandcraftBottleContainer}>
                  <p className={styles.yourThreeOrders}>
                    Potray Handcraft Bottle
                  </p>
                  <p className={styles.p}>$17.89</p>
                </div>
                <div className={styles.buyNowWrapper}>
                  <div className={styles.buyNow}>Buy Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Header />
        </div>
        <div className={styles.footerIndex}>
          <Footer />
        </div>
      </div>
    </div>
  );
};
