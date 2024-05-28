import Link from 'next/link';
import styles from './index.module.css';

export default function Header() {
  return (
    <header>
      <div className={styles.navBar}>
        <div className={styles.frameParent4}>
          <div className={styles.productsParent}>
            <Link href="/products/page">
              <p className={styles.products}>Products</p>
            </Link>
            <Link href="/artisans/page">
              <p className={styles.artisans}>Artisans</p>
            </Link>
            <Link href="/about/page">
              <p className={styles.aboutUs}>About us</p>
            </Link>
            <Link href="/contact/page">
              <p className={styles.contact}>Contact</p>
            </Link>
          </div>
          <div className={styles.layer1}>
          <Link href="/">
            <img className={styles.groupIcon} alt="" src="/group.svg" />
            <img className={styles.groupIcon1} alt="" src="/group1.svg" />
            </Link>
          </div>
          <div className={styles.vectorParent}>
          <Link href="/login/page">
            <img className={styles.vectorIcon5} alt="" src="/vector4.svg" />
            </Link>
           
            <div className={styles.fi2662503}>
              <img className={styles.layer2Icon} alt="" src="/layer-2.svg" />
              <div className={styles.container}>
                <div className={styles.div1}>0</div>
              </div>
            </div>
          </div>
          {/* <div className={styles.frameWrapper1}>
            <div className={styles.searchParent}>
              <div className={styles.search}>Search</div>
              <img className={styles.fi54481Icon} alt="" src="/fi-54481.svg" />
            </div>
          </div> */}
        </div>
      </div>
    </header>
  );
}