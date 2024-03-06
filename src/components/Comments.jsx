import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comments.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

const avatar = "https://github.com/gustavogss.png";

export function Comments({ content, onDeleteComment }) {
  const [likes, setLikes] = useState(0);

  function handleRemoveComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikes(likes + 1);
  }

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
            <button title="Deletar comentário" onClick={handleRemoveComment}>
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
