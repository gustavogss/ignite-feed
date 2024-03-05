import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comments.module.css";
import { Avatar } from "./Avatar";

const avatar = "https://github.com/gustavogss.png";

export function Comments() {
  return (
    <div className={styles.container}>
      <Avatar hasBorder={false} img={avatar} />
      <div className={styles.commentsBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gustavo Souza</strong>
              <time title="04 de março de 2024" dateTime="2024-03-05 12:10:01">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom, guga. Parabéns 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
