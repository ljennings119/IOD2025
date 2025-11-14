import { useState } from 'react'

function AddMovieForm({ onAddMovie }) {

    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')
    const [synopsis, setSynopsis] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        // onAddMovie({ title, year, synopsis })
        const data = new FormData(e.target)
        onAddMovie(Object.fromEntries(data))
    }
    return (
        <div className="AddMovieForm componentBox">
            <form onSubmit={handleSubmit}>
                <label>Movie Title:
                    <input name="title" value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>Year Released:
                    <input name="year" type="number" value={year}
                        onChange={(e) => setYear(e.target.value)} />
                </label>
                <label>Synopsis:
                    <input name="synopsis" value={synopsis}
                        onChange={(e) => setSynopsis(e.target.value)} />
                </label>
                <button>Add Movie</button>
            </form>
        </div>
    )
}
function MoviesList() {

    const movies = [
        {
            id: 1,
            title: "The Shawshank Redemption",
            year: 1994,
            synopsis: "Two imprisoned men find redemption.",
        },
        {
            id: 2,
            title: "The Dark Knight",
            year: 2008,
            synopsis: "Batman fights the menace known as the Joker.",
        },
        {
            id: 3,
            title: "Interstellar",
            year: 2014,
            synopsis: "Explorers travel through a wormhole in space.",
        }
    ]

    const [currentMovies, setCurrentMovies] = useState(movies)

    const movieItems = currentMovies.map(movie => (
        <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            year={movie.year}
            synopsis={movie.synopsis}
        />
    ))

    const handleReverseMovies = () => {
        let newMovies = [...currentMovies]
        newMovies.reverse()
        setCurrentMovies(newMovies)
    }

    const handleAddMovie = (newMovie) => {
        newMovie.id = currentMovies.length + 1; // unreliable but succinct
        setCurrentMovies([...currentMovies, newMovie])
    }

    const handleDeleteMovie = (idToDelete) => {
    setCurrentMovies(currentMovies.filter(movie => movie.id !== idToDelete))
    }
    
    // const handleDeleteMovie = (idToDelete) => {
    //     const newMovie = currentMovies.filter((movie) => movie.id !== idToDelete)
    //     setCurrentMovies(newMovie)
        
    // }
    
    // const handleAddMovie = () => {
    //     let newMovies = [...currentMovies, 
    //         {
    // id: 4, title: "The Whale", year: 2022,
    // synopsis: "A morbidly obese teacher attempts to reconnect with his daughter.",
    // }]
    //     setCurrentMovies(newMovies)
    // }

    // remove an item from an array - RIGHT WAY using filter to create a new array without the removed item
    // let idToDelete = 2;
    // let newMovies = currentMovies.filter(movie => movie.id != idToDelete);

    // replace/update an item in an array - RIGHT WAY using map to create a new array including the updated item
    // let updatedSynopsis1 = 'Iconic heart-warming prison break movie';
    // let newMovies = currentMovies.map(movie => movie.id === 1 ? {...movie, synopsis: updatedSynopsis1} : movie);

    // sort/reverse an array - RIGHT WAY cloning the original first
    // let newMovies = [...currentMovies];
    // newMovies.reverse();
    function Movie({id, title, year, synopsis }) {
        return (
            <li>
                <h3>{title}</h3> <span>({year})</span>
                <div>{synopsis}</div>
                <button onClick={() =>handleDeleteMovie}>Delete</button>
            </li>
        )
    }

    return (
        <div className="MoviesList componentBox">
            <ul>
                <li>{movieItems}</li>
            </ul>
            <button onClick={handleReverseMovies}>Reverse List</button>
            <button onClick={handleAddMovie}>Add Movie</button>
            <AddMovieForm onAddMovie={handleAddMovie}/>
        </div>
    )
    //   const movieItems = movies.map(movie => (
    //     <li key={movie.id}> {movie.title} {movie.year} {movie.synopsis}
    //     </li>

    //   ))  

    // const movieItems = movies.map(movie =>(
    //         <Movie
    //         key={movie.id}
    //         title={movie.title}
    //         year={movie.year}
    //         synopsis={movie.synopsis}
    //         /> )
    //     )

    // return (
    //     <div className="MoviesList componentBox">
    //         <ul>
    //             {movies.map(movie => (
    //                 <li>{movie.title}</li>
    //             ))}
    //         </ul>
    //     </div>
    // )
}

export default MoviesList