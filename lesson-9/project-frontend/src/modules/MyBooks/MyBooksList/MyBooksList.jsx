import styles from "./my-books-list.module.scss";

const MyBooksList = ({ items, onDeleteBook }) => {
    const elements = items.map(({ _id, title, author, cover }) => (
        <li className={styles.listItem} key={_id}>
            <img className={styles.listItemCover} src={`http://localhost:3001/${cover}`} />
            Title: {title}. Author: {author}. <button onClick={() => onDeleteBook(_id)}>delete</button>
        </li>
    ))

    return (
        <ol className={styles.list}>
            {elements}
        </ol>
    )
}

export default MyBooksList;