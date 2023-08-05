import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import MyMoviesBlock from "./MyMoviesBlock/MyMoviesBlock";
import MyMoviesList from "./MyMoviesList/MyMoviesList";
import MyMoviesForm from "./MyMoviesForm/MyMoviesForm";

import { fetchMovies, addMovie, deleteMovie } from "../../redux/movies/movies-operations";

import { getMovies } from "../../redux/movies/movies-selectors";

import styles from "./my-movies.module.scss";

const MyBooks = () => {
    const movies = useSelector(getMovies);

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchMovies());
    }, [])

    const onAddMovie = (data) => {
        console.log(data);
        dispatch(addMovie(data));
    }

    const onDeleteMovie = (id) => {
        dispatch(deleteMovie(id));
    }

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>My movies</h3>
            <div className={styles.blocks}>
                <MyMoviesBlock title="Add movie">
                    <MyMoviesForm onSubmit={onAddMovie} />
                </MyMoviesBlock>
                <MyMoviesBlock title="Movies list">
                    <MyMoviesList items={movies} onDeleteBook={onDeleteMovie} />
                </MyMoviesBlock>
            </div>
        </div>
    )
}

export default MyBooks;

