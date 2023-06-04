export default function Entry({ id, date, children, motto, notes }) {
  return (
    <li className="entry" key={id}>
      <h2 className={date}>{date}</h2>
      {children}
      <h3 className="entry-title">{motto}</h3>
      <p className="entry-text">{notes}</p>
    </li>
  );
}
