import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  const banner =
    "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D";

  const avatar = "https://github.com/gustavogss.png";
  return (
    <aside className={styles.sidebar}>
      <img className={styles.image} src={banner} />
      <div className={styles.profile}>
        <Avatar img={avatar} hasBorder />
        <strong>Gustavo Souza</strong>
        <span className={styles.title}>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          {" "}
          <PencilLine />
          Editar perfil
        </a>
      </footer>
    </aside>
  );
}
