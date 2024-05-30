import Header from "../header";
import Footer from "../footer";
import styles from "../index.module.css";
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <Header />
            <main className={styles.mainContent}>
                <h1>Contact Details</h1>
                <h2>Do you have a question? Send us a message.</h2>
                <form className={styles.formContainer}>
                    <div className={styles.formInfo}>
                        {/* Name */}
                        <label className={styles.formLabel} htmlFor="name">Name</label>
                        <input className={styles.formInput} id="name" type="text" name="name" placeholder="Name" required />
                        {/* Surname */}
                        <label className={styles.formLabel} htmlFor="surname">Surname</label>
                        <input className={styles.formInput} id="surname" type="text" name="surname" placeholder="Surname" required />
                        {/* Email */}
                        <label className={styles.formLabel} htmlFor="email"> Email </label>
                        <input className={styles.formInput} id="email" type="email" name="email" placeholder="Email address" required />
                        {/* Message */}
                        <label className={styles.formLabel} htmlFor="message"> Message </label>
                        <textarea className={styles.formInput} id="message" name="message" placeholder="Message" required /></div>
                    <Link className={styles.formButton} href="/contact/thanks">Send</Link>
                </form>
            </main>
            <div className={styles.footerContact}>
                <Footer />
            </div>
        </>
    );
}
