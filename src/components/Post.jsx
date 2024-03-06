import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comments } from "./Comments";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(["Muito bom, guga. Parabéns 👏👏"]);
  const [newComment, setNewComment] = useState("");
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

  const isEmptyComment = newComment.length === 0;

  function handleCreateComment() {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  }
  function handleNewCommentChange() {
    setNewComment(event.target.value);
  }

  function deleteComment(commentToDelete) {
    const commentsOneDelete = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsOneDelete);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity("");
    setNewComment(event.target.value);
  }

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
        {content.map((item) => {
          item.type === "paragraph" ? (
            <p key={item.content}>{item.content}</p>
          ) : (
            <p>
              <a href="#">{item.content}</a>
            </p>
          );
        })}
        <a href="#">#ignite</a> <a href="#">#react</a> <a href="">#post</a>
      </div>

      <form onSubmit={handleCreateComment} className={styles.comments}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe aqui seu comentário: "
          onChange={handleNewCommentChange}
          value={newComment}
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button type="submit" disabled={isEmptyComment}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentsList}>
        {comments.map((comment) => {
          return (
            <Comments
              content={comment}
              key={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
