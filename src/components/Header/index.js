import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useRef } from "react";

function Header() {
    const audioRef = useRef(null);

    const handleMouseEnter = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
        <header className={styles.header}>
            <Link to="/">
                <span onMouseEnter={handleMouseEnter}>Pop Flix</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/search">Pesquisar</Link>
                <Link to="/favorites">Favoritos</Link>
            </nav>
        </header>
    );
}

export default Header;