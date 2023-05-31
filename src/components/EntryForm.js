export default function EntryForm({ title, children }) {
  return (
    <form className="entry-form">
      <h2 className="entry-form__heading">{title}</h2>
      {children}
    </form>
  );
}
