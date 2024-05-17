import styles from "./index.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <div className={styles.vectorGroup}>
                    <img className={styles.lineIcon} alt="" src="/line-11.svg" />
                    <div className={styles.copyright2024}>
                        Copyright &#169; 2024. All Rights Reserved.
                    </div>
                    <div className={`${styles.layer1} ${styles.logoFooter}`}>
                        <img className={styles.groupIcon} alt="" src="/group.svg" />
                        <img className={styles.groupIcon1} alt="" src="/group1.svg" />
                    </div>
                </div>
            </div>
        </footer>
    );
}



