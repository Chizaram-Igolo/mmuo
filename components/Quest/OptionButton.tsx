import styles from "./OptionButton.module.css";

export default function OptionButton({ children }: { children: string }) {
  return <button className={`word ${styles["learn-more"]}`}>{children}</button>;
}
