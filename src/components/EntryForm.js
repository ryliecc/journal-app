export default function EntryForm({ title, children }) {
  return (
    <form>
      <h2>{title}</h2>
      {children}
    </form>
  );
}
