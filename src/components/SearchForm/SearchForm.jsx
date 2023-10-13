import "./SearchForm.css";
import CheckBox from "../CheckBox/CheckBox";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function SearchForm({
  onSubmit,
  handleCheckboxToggle,
  checkbox,
}) {
  const location = useLocation().pathname;
  const { values, handleChange, setValues, errors } = useFormAndValidation();

  useEffect(() => {
    if (location === "/movies") {
      setValues({
        search: localStorage.getItem("stringSearch"),
      });
    }
  }, [setValues]);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values.search || '');
  };

  return (
    <section className="search">
      <form
        className="search__form"
        name="search"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="search__form-wrapper">
          <input
            id="search-input"
            name="search"
            type="search"
            className="search__form-input"
            placeholder="Фильм"
            required
            value={values.search || ""}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="search__form-button opacity_type_button"
          ></button>
        </div>
        <span className="search-error">{errors.search}</span>
        <CheckBox
          checkbox={checkbox}
          handleCheckboxToggle={handleCheckboxToggle}
        />
      </form>
    </section>
  );
}

export default SearchForm;
