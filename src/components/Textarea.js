export default function Textarea({ id, labelText, rowNumber }) {
  return (
    <>
      <label for={id}>{labelText}</label>
      <textarea id={id} rows={rowNumber}></textarea>
    </>
  );
}
