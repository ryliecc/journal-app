export default function EntryForm({ onAddEntry, title, children }) {
  return (
    <form className="entry-form" onSubmit={onAddEntry}>
      <h2 className="entry-form__heading">{title}</h2>
      {children}
    </form>
  );
}
