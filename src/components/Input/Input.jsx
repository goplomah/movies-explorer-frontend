function Input ({ title, id, type, name, placeholder, error }) {
  const lengthProperties =
  type === "name"
  ? { minLength: 3, maxLength: 30 }
  : type === "password"
  ? { minLength: 5, maxLength: 30 }
  : null;;
  return (
    <label className="form__item">
      <p className="form__text">{title}</p>
        <input
        id={id}
        type={type}
        name={name}
        className="form__input"
        placeholder={placeholder}
        required
        {...lengthProperties}
        />
      <span className="form__error">{error}</span>
    </label>
  )
}

export default Input;