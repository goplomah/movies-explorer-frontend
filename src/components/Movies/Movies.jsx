import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <main className="sticky">
      <SearchForm />
      <MoviesCardList />
    </main>
  )
}

export default Movies;