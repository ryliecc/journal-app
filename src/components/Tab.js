export default function Tab({ onClick, text, children }) {
  return (
    <button type="button" onClick="onClick" className="entries-section__tab">
      {text}
      {children}
    </button>
  );
}
