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
            <img className={styles.groupIcon} alt="" src="/group.svg" />
            <img className={styles.groupIcon1} alt="" src="/group1.svg" />
          </div>
          <div className={styles.vectorParent}>
            <img className={styles.vectorIcon5} alt="" src="/vector4.svg" />
            <div className={styles.fi860808Parent}>
              
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
        </div>
      </div>
    </header>
  );
}