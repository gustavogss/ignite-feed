import { Avatar } from "./Avatar";
import { Comments } from "./Comments";
import styles from "./Post.module.css";

const avatar = "https://github.com/gustavogss.png";

export function Post({ author, content }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder img={avatar} />
          <div className={styles.authorInfo}>
            <strong>{author}</strong>
            <span className={styles.title}>{content}</span>
          </div>
        </div>
        <time title="04 de março de 2024" dateTime="2024-03-05 12:10:01">
          Publicado a 1h
        </time>
      </header>
      <div className={styles.content}>
        <p> Fala Galera 👋 </p>
        <p>Aqui está meu Post que acabei de subir para a plataforma</p>
        <p>
          <a href="#">👉 gustavogss</a>
        </p>
        <a href="#">#ignite</a> <a href="#">#react</a> <a href="">#post</a>
      </div>

      <form className={styles.comments}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe aqui seu comentário: " />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentsList}>
        <Comments />
        <Comments />
        <Comments />
      </div>
    </article>
  );
}
