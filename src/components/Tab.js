export default function Tab({ text, children }) {
  return (
    <p className="entries-section__tab">
      {text}
      {children}
    </p>
  );
}
