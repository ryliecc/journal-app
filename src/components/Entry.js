export default function Entry({ date, title, text, children }) {
  return (
    <li>
      <h2>{date}</h2>
      <h3>
        <span>{title}</span>
        {children}
      </h3>
      <p>{text}</p>
    </li>
  );
}
