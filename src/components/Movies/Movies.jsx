import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({
  loading,
  submitHandleAllMovies,
  renderMovies,
  handleCheckboxToggle,
  handleLikeMovie,
  handleDeleteMovie,
  savedMovies,
  checkbox,
  resStringNotFound
}) {
  return (
    <main className="sticky">
      <SearchForm
      onSubmit={submitHandleAllMovies}
      handleCheckboxToggle={handleCheckboxToggle}
      checkbox={checkbox}
       />
       {
      loading
      ? (<Preloader />)
      :
      !resStringNotFound ?
      <>
        <div>
          <h2 className="search-not-found">Ничего не найдено</h2>
          <p className="search-not-found__text">
            К сожалению, запрашиваемые фильмы не найдены. Возможно, была допущена ошибка, или ресурс был удален.
            Попробуйте ввести другое ключевое слово или символ
          </p>
        </div>
      </>
      :
      (
        <MoviesCardList
        movies={renderMovies}
        handleLikeMovie={handleLikeMovie}
        handleDeleteMovie={handleDeleteMovie}
        savedMovies={savedMovies}
        />
    )
     }
    </main>
  )
}

export default Movies;