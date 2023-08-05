import { useState, useEffect, useRef } from "react";
import InputMask from 'react-input-mask';

import initialState from "./initialState";

import styles from "./my-books-form.module.scss";

const MyBooksForm = ({onSubmit}) => {
    const [state, setState] = useState({...initialState});

    const titleRef = useRef(false);

    useEffect(()=> {
        titleRef.current.focus();
    }, [])

    const handleChange = ({ target }) => {
        setState(prevState => {
            const { name, value, checked, type, files } = target;
            const newValue = type === "checkbox" ? checked : value;

            return {...prevState, [name]: newValue}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setState({...state})
    }

    const {title, author, favorite, date} = state;

    return (
        <form onSubmit={handleSubmit} className={styles.form} encType="multipart/form-data">
            <div className={styles.formGroup}>
                <label>Book title</label>
                <input ref={titleRef} value={title} name="title" onChange={handleChange} className={styles.textField} placeholder="Book title" required />
            </div>
            <div className={styles.formGroup}>
                <label>Book author</label>
                <input value={author} name="author" onChange={handleChange} className={styles.textField} placeholder="Book author" required />
            </div>
            <div className={styles.formGroup}>
                <label>Favorite</label>
                <input checked={favorite} name="favorite" onChange={handleChange} className={styles.checkbox} type="checkbox" />
            </div>
            <div className={styles.formGroup}>
                <label>Book genre</label>
                <select name="genre" onChange={handleChange}>
                    <option value="fantastic">Fantastic</option>
                    <option value="love">Love</option>
                </select>
            </div>
            <div className={styles.formGroup}>
                <label>Book date</label>
                <InputMask value={date} name="date" mask="99-99-9999" onChange={handleChange} className={styles.textField} placeholder="Book date" required />
            </div>
            <div className={styles.formGroup}>
                <label>Book cover</label>
                <input type="file" name="cover" multiple className={styles.textField} required />
            </div>
            <button type="submit">Add book</button>
        </form>
    )
}

export default MyBooksForm;

