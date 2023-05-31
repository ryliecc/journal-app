export default function Textarea({ id, labelText, rowNumber }) {
  return (
    <>
      <label for={id} className="entry-form__textarea-label">
        {labelText}
      </label>
      <textarea
        id={id}
        rows={rowNumber}
        className="entry-form__textarea"
      ></textarea>
    </>
  );
}
