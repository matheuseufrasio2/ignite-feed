import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/maykbrito.png"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus Eufrásio</strong>
              <time title="01 de junho às 08:13h" dateTime="2022-06-01 08:13:30">Cerca de uma hora atrás</time>
            </div>

            <button
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom parabens!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}