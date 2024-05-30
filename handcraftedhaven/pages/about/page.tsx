import Header from "../header";
import Footer from "../footer";
import styles from "../index.module.css";

export default function Home() {
    return (
        <>
            <Header />
            <main className={styles.mainContent}>
                <h1>About Us</h1>
                <p>The project aims to develop a web application that allows artisans and crafters to display and sell their products.</p>
                <p>It serves as a virtual marketplace that bridges the gap between creators and customers.</p>
                <h2>Mission</h2>
                <p>Handcrafted Haven is designed to nurture a sense of community, support local artisans, and advocate for sustainable consumption.</p>
                <p>We seek to transform how handcrafted items are found, valued, and purchased.</p>
                <h2>Values</h2>
                <ul>
                    <li>Community Interaction</li>
                    <li>Sustainable Consumption</li>
                    <li>Secure E-commerce</li>
                    <li>Quality Products</li>
                </ul>
                <div>
                    <h2>Social Media</h2>
                    <div className={styles.contactIconsContainer}>
                        <a href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=CllgCJZcRDzZkmCzCtpDqhBNlglXcPWgwhxQNLWqZNdMbjvDBWRbxDQFXprVKCgqnWmhJSfdRvq">
                            <img className={styles.contactIcon} src="/email.png" alt="Email" />
                        </a>
                        <a href="https://www.instagram.com/">
                            <img className={styles.contactIcon} src="/instagram.png" alt="Instagram" />
                        </a>
                        <a href="https://www.facebook.com/">
                            <img className={styles.contactIcon} src="/facebook.png" alt="Facebook" />
                        </a>
                    </div>
                </div>
            </main>
            <div className={styles.footerAbout}>
                <Footer />
            </div>
        </>
    );
}
