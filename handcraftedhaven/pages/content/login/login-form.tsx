import styles from "../../index.module.css";
export default function LoginForm() {
  return (
    <form className={styles.frameChild}>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
