import './SearchForm.css';
import CheckBox from '../CheckBox/CheckBox';

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__form-wrapper">
          <input
          id="search-input"
          name="search"
          type="search"
          className="search__form-input"
          placeholder="Фильм"
          required
          />
          <button type="submit" className="search__form-button opacity_type_button"></button>
        </div>
        <CheckBox />
      </form>
    </section>
  )
}

export default SearchForm;