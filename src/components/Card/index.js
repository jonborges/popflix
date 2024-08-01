import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconFavorite from "./favorite.png";
import iconUnfavorite from "./unfavorite.png";
import { useFavoriteContext } from "../../contexts/Favorites";
import { useState } from "react";

function Card({ id, title, showDescriptionInList = false }) {
    const { favorite, addFavorite } = useFavoriteContext();
    const isFavorite = favorite.some((fav) => fav.id === id);
    const icon = !isFavorite ? iconFavorite : iconUnfavorite;
    const [showDescription, setShowDescription] = useState(false);

    return (
        <section
            className={styles.card}
            onMouseEnter={() => setShowDescription(true)}
            onMouseLeave={() => setShowDescription(false)}
        >
            <Link to={`/watch/${id}`} className={styles.link}>
                <img
                    src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                    alt="Capa"
                    className={styles.capa}
                />
            </Link>
            <figure className={styles.icon}>
                <img
                    src={icon}
                    alt="Ícone"
                    onClick={(e) => {
                        e.stopPropagation(); // Impede a propagação do clique
                        addFavorite({ id });
                    }}
                />
            </figure>
            {showDescription && (
                <Link to={`/watch/${id}`} className={styles.descriptionOverlay}>
                    <div className={styles.description}>
                        {title}
                    </div>
                </Link>
            )}
        </section>
    );
}

export default Card;
