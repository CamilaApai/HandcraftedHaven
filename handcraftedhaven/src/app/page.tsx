import type { NextPage } from "next";
import Shipping from "../components/shipping";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";
import styles from "./page.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <Shipping />
      <FrameComponent2 />
      <div className={styles.showcase}>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-2906@2x.png"
          />
          <b className={styles.ceramicsJug}>
            <p className={styles.ceramics}>{`Ceramics `}</p>
            <p className={styles.ceramics}>Jug</p>
          </b>
          <div className={styles.shopNowParent}>
            <div className={styles.shopNow}>Shop now</div>
            <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
          </div>
        </div>
        <div className={styles.frameParent}>
          <FrameComponent1
            rectangle2908="/rectangle-2908@2x.png"
            coffeCup="Coffe cup"
            shopNow="Shop now"
            vector="/vector3.svg"
          />
          <FrameComponent1
            rectangle2908="/rectangle-2907@2x.png"
            coffeCup="Design mug"
            shopNow=" "
            vector="/vector2.svg"
            propLeft="230px"
            propLeft1="40px"
            propWidth="207px"
            propLeft2="40px"
            propPadding="var(--padding-12xs) 0px"
            propGap="90px"
          />
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
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <FrameComponent rectangle2916="/rectangle-2916@2x.png" />
            <FrameComponent
              rectangle2916="/rectangle-2916@2x.png"
              propLeft="450px"
              propTop="0px"
              propLeft1="532px"
              propBackgroundColor="unset"
              propBorder="1px solid var(--color-dimgray-200)"
              propColor="#663333"
            />
            <FrameComponent
              rectangle2916="/rectangle-2916@2x.png"
              propLeft="450px"
              propTop="573px"
              propLeft1="532px"
              propBackgroundColor="unset"
              propBorder="1px solid var(--color-dimgray-200)"
              propColor="#663333"
            />
            <FrameComponent
              rectangle2916="/rectangle-2916@2x.png"
              propLeft="900px"
              propTop="573px"
              propLeft1="982px"
              propBackgroundColor="unset"
              propBorder="1px solid var(--color-dimgray-200)"
              propColor="#663333"
            />
            <FrameComponent
              rectangle2916="/rectangle-2916@2x.png"
              propLeft="900px"
              propTop="0px"
              propLeft1="982px"
              propBackgroundColor="unset"
              propBorder="1px solid var(--color-dimgray-200)"
              propColor="#663333"
            />
            <FrameComponent
              rectangle2916="/rectangle-2916@2x.png"
              propLeft="0px"
              propTop="573px"
              propLeft1="82px"
              propBackgroundColor="unset"
              propBorder="1px solid var(--color-dimgray-200)"
              propColor="#663333"
            />
          </div>
          <div className={styles.goToSlide2Parent}>
            <div className={styles.goToSlide2} />
            <div className={styles.goToSlide1Parent}>
              <div className={styles.goToSlide1} />
              <div className={styles.goToSlide3} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navBar}>
        <div className={styles.frameDiv}>
          <div className={styles.productsParent}>
            <div className={styles.products}>Products</div>
            <div className={styles.artisans}>Artisans</div>

            <div className={styles.aboutUs}>About us</div>
            <div className={styles.contact}>Contact</div>
          </div>
          <div className={styles.layer1}>
            <img className={styles.groupIcon} alt="" src="/group.svg" />
            <img className={styles.groupIcon1} alt="" src="/group1.svg" />
          </div>
          <div className={styles.vectorParent}>
            <img className={styles.vectorIcon1} alt="" src="/vector4.svg" />
            <div className={styles.fi860808Parent}>
              <img
                className={styles.fi860808Icon}
                alt=""
                src="/fi-860808.svg"
              />
              <div className={styles.wrapper}>
                <div className={styles.div}>11</div>
              </div>
            </div>
            <div className={styles.fi2662503}>
              <img className={styles.layer2Icon} alt="" src="/layer-2.svg" />
              <div className={styles.container}>
                <div className={styles.div1}>0</div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.searchParent}>
              <div className={styles.search}>Search</div>
              <img className={styles.fi54481Icon} alt="" src="/fi-54481.svg" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
