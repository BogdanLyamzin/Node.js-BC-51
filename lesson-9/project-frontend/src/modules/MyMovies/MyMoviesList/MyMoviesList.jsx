import styles from "./my-movies-list.module.scss";

const {REACT_APP_BACKEND_URL} = process.env;

const MyMoviesList = ({ items, onDeleteMovie }) => {
    const elements = items.map(({ _id, title, director, poster }) => (
        <li className={styles.listItem} key={_id}>
            <img className={styles.listItemCover} src={`${REACT_APP_BACKEND_URL}/${poster}`} />
            Title: {title}. Director: {director}. <button onClick={() => onDeleteMovie(_id)}>delete</button>
        </li>
    ))

    return (
        <ol className={styles.list}>
            {elements}
        </ol>
    )
}

export default MyMoviesList;