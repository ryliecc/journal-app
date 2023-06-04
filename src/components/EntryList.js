export default function EntryList({ entries, children }) {
  return (
    <ul className="entry-list">
      {entries.map((entry) => {
        return (
          <li className="entry" key={entry.id}>
            <h2 className={entry.date}>{entry.date}</h2>
            {children}
            <h3 className="entry-title">{entry.motto}</h3>
            <p className="entry-text">{entry.notes}</p>
          </li>
        );
      })}
    </ul>
  );
}
