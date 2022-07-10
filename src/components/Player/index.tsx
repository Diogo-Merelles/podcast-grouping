import styles from './styles.module.scss';

export function Player() {
    return(
     <div className={styles.playerContainer}>
        
        <header>
            <img src="/images/headphones-playing.svg" alt="playing-button" height="80rem" width="80rem" />
            <strong>Playing know</strong>
        </header>

        <div className={styles.emptyPlayer}>
            <strong>Select a podcast to listen</strong>
        </div>


        <footer></footer>
            
        </div>

    );
}