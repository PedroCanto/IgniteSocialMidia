import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import {useState} from 'react'

export function Comment({content, onDeleteComment}){
    function handleDeleteComment(){

        onDeleteComment(content);

    }
    
    const [likeCount, setLikeCount] = useState(0);

    function handleLikeCount(){
        setLikeCount(likeCount + 1)
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/pedroCanto.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Pedro canto</strong>
                            <time title="18 de janeiro às 07:23h" dataTime="2024-01-18 07:23:00">cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentario">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>

                </div>

                <footer>
                   <button onClick={handleLikeCount}>
                    <ThumbsUp/>
                    Aplaudir <span>{likeCount}</span>
                   </button>
                </footer>

            </div>
            

        </div>

        
    )
}