import styles from "../components/jobSection.module.css";

export default function EndpointsSection() {
  return (
    <main className={styles.container}>
      <div className={styles.jobCard}>
        <h2>get </h2>
        <p>post</p>
        <p>track</p>
        <code>Live Endpoints...</code>
      </div>
    </main>
  );
}
