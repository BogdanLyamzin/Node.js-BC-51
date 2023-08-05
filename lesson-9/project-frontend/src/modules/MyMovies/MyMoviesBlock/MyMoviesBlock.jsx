import styles from "./my-movies-block.module.scss";

const MyMoviesBlock = ({title, children}) => {
    return (
        <div className={styles.wrapper}>
            <h4 className={styles.title}>{title}</h4>
            {children}
        </div>
    )
}

export default MyMoviesBlock;