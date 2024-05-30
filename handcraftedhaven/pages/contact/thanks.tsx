import Header from "../header";
import Footer from "../footer";
import styles from "../index.module.css";

export default function Home() {
    return (
        <>
            <Header />
            <main className={styles.mainContent}>
                <h1>We received your email</h1>
                <div className={styles.mainContentCenter}>
                    <p>Thanks for sending your message.</p>
                    <p>We will reply as soon as possible.</p>
                </div>
            </main>
            <div className={styles.footerThanks}>
                <Footer />
            </div>
        </>
    );
}