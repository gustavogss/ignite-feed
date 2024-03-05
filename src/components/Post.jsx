import { Avatar } from "./Avatar";
import { Comments } from "./Comments";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function Post({ author, content, publishedAt }) {
  const avatar = "https://github.com/gustavogss.png";
  const publishedDateFormat = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );
  const publishedDateCompare = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.profile}>
          <Avatar hasBorder img={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span className={styles.title}>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
          {publishedDateCompare}
        </time>
      </header>
      <div className={styles.content}>
        <p> Conteúdo </p>
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
