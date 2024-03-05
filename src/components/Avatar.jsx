import styles from "./Avatar.module.css";

export function Avatar({ img, hasBorder }) {
  return (
    <img
      src={img}
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      alt=""
    />
  );
}
