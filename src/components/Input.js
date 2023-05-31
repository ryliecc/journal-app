export default function Input({ id, labelText, type }) {
  return (
    <>
      <label for={id} className="entry-form__input-label">
        {labelText}
      </label>
      <input type={type} id={id} className="entry-form__input"></input>
    </>
  );
}
