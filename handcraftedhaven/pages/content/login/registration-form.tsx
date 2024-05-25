import styles from "../../index.module.css";
export default function RegistrationForm() {
  return (
    <form className={styles.frameChild}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="name" id="name" required />
      </div>
      <div>
        <label htmlFor="Age">Age:</label>
        <input type="number" id="age" required />
      </div>
      <div>
        <label htmlFor="Gender">Gender:</label>
        <input type="text" id="gender" required />
      </div>
      <div>
        <label htmlFor="Tel">Tel:</label>
        <input type="tel" id="tel" required />
      </div>
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
