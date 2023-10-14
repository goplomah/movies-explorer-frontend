import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { useEffect } from 'react';

function SavedMovies({
  loading,
  savedMovies,
  filteredSaveMovies,
  movies,
  handleCheckboxToggle,
  submitHandlerSavedMovies,
  handleDeleteMovie,
  checkbox,
  setStringSearch,
  resStringNotFoundSaved
}) {
  useEffect(() => {
    setStringSearch("");
  }, []);


  return (
    <main className="sticky">
      <SearchForm
        handleCheckboxToggle={handleCheckboxToggle}
        onSubmit={submitHandlerSavedMovies}
        checkbox={checkbox}
      />
      {
      loading
      ? (<Preloader />)
      :
      !resStringNotFoundSaved ?
      <h2 className="search-not-found">Ничего не найдено</h2>
      :
      (
        <MoviesCardList
          movies={movies}
          savedMovies={savedMovies}
          filteredSaveMovies={filteredSaveMovies}
          handleDeleteMovie={handleDeleteMovie}
        />
    )
     }
    </main>
  )
}

export default SavedMovies;