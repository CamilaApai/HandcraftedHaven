import styles from "./index.module.css";

export default function Header() {
  return (
    <header>
      <div className={styles.navBar}>
        <div className={styles.frameParent4}>
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
            <img className={styles.vectorIcon5} alt="" src="/vector4.svg" />
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
          <div className={styles.frameWrapper1}>
            <div className={styles.searchParent}>
              <div className={styles.search}>Search</div>
              <img className={styles.fi54481Icon} alt="" src="/fi-54481.svg" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}