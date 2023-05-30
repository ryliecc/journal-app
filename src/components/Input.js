export default function Input({ id, labelText, type }) {
  return (
    <>
      <label for={id}>{labelText}</label>
      <input type={type} id={id}></input>
    </>
  );
}
