import  Image from "next/image";
import styles from './styles.module.scss';
import format from 'date-fns/format';
import en from "date-fns/locale/en-US";
import enUS from "date-fns/locale/en-US";

export default function Header() {
    const currentDate = format(new Date(), 'EEEE, d MMMM', {
        locale: enUS,
    });

    return(
        <header className={styles.headerContainer}>
            <img src="/images/headphones.svg" alt="Logo" width="80rem" height="80rem" />

            <p>The true pleasure of listening</p>

            <span>{currentDate}</span>
        </header>
    );
}