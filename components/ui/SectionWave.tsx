import styles from "./SectionWave.module.css";

export function SectionWave({ variant }: { variant: "guide" | "footer" }) {
  return (
    <svg
      className={`${styles.wave} ${styles[variant]}`}
      viewBox="0 0 1440 64"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      data-section-wave={variant}
    >
      <path d="M0 32C240 0 480 0 720 32S1200 64 1440 32V64H0Z" fill="currentColor" />
    </svg>
  );
}
