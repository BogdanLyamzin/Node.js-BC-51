import { useState, useEffect, useRef } from "react";
import InputMask from 'react-input-mask';

import initialState from "./initialState";

import styles from "./my-movies-form.module.scss";

const MyBooksForm = ({onSubmit}) => {
    const [state, setState] = useState({...initialState});

    const titleRef = useRef(false);

    useEffect(()=> {
        titleRef.current.focus();
    }, [])

    const handleChange = ({ target }) => {
        setState(prevState => {
            const { name, value, checked, type } = target;
            const newValue = type === "checkbox" ? checked : value;

            return {...prevState, [name]: newValue}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        formData.set("favorite", state.favorite);
        // for(const [key, value] of formData.entries()){
        //     console.log(`${key}: ${value}`);
        // }
        onSubmit(formData);
        setState({...state})
    }

    const {title, author, favorite, date} = state;

    return (
        <form onSubmit={handleSubmit} className={styles.form} encType="multipart/form-data">
            <div className={styles.formGroup}>
                <label>Movie title</label>
                <input ref={titleRef} value={title} name="title" onChange={handleChange} className={styles.textField} placeholder="Movie title" required />
            </div>
            <div className={styles.formGroup}>
                <label>Movie director</label>
                <input value={author} name="director" onChange={handleChange} className={styles.textField} placeholder="Movie director" required />
            </div>
            <div className={styles.formGroup}>
                <label>Favorite</label>
                <input checked={favorite} name="favorite" onChange={handleChange} className={styles.checkbox} type="checkbox" />
            </div>
            <div className={styles.formGroup}>
                <label>Movie genre</label>
                <select name="genre" onChange={handleChange}>
                    <option value="fantastic">Fantastic</option>
                    <option value="love">Love</option>
                </select>
            </div>
            <div className={styles.formGroup}>
                <label>Movie release date</label>
                <InputMask value={date} name="releaseDate" mask="9999" onChange={handleChange} className={styles.textField} placeholder="Movie release" required />
            </div>
            <div className={styles.formGroup}>
                <label>Movie poster</label>
                <input name="poster" type="file" onChange={handleChange} required />
            </div>
            <button type="submit">Add book</button>
        </form>
    )
}

export default MyBooksForm;

