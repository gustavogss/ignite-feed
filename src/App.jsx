import { Header } from "./components/Header";
import { Post } from "./components/Post";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/gustavogss.png",
      name: "Gustavo Souza",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala Galera 👋 " },
      {
        type: "paragraph",
        content: "Aqui está meu Post que acabei de subir para a plataforma",
      },
      { type: "link", content: "👉 github/gustavogss" },
    ],
    publishedAt: new Date("2024-03-05 15:10:40"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://lh3.googleusercontent.com/a/ACg8ocJ-BzKFHxfcKHljHNMwm-xuNa2tjOAxD0Z1Gblbd4pR_TQ=s288-c-no",
      name: "Guilherme",
      role: "Mobile Developer",
    },
    content: [
      { type: "paragraph", content: "Fala Galera 👋 " },
      {
        type: "paragraph",
        content: "Aqui está meu Post que acabei de subir para a plataforma",
      },
      { type: "link", content: "github/gustavogss" },
    ],
    publishedAt: new Date("2024-03-04 15:10:40"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
