import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img
                className={styles.cover} 
                src="https://s2-ge.glbimg.com/YlOuuymiCwgESrBRtZIF15K2y5g=/0x0:3755x2574/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/s/U/M3KThWSvmIobXeoIKrKw/2022-10-27t204304z-2106604607-up1eiar1ljqsg-rtrmadp-3-soccer-europa-mun-she-report.jpg"
            />
            <div className={styles.profile}>
                <Avatar src="https://github.com/pedroCanto.png"/>
                <strong>Pedro Canto</strong>
                <span>Estagiario</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
       
    );
}