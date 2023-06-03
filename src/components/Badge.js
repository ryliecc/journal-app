export default function Badge({ isActive, numberOfEntries }) {
  return (
    <span
      isActive={isActive}
      className={
        isActive === true
          ? "entries-section__badge entries-section__badge--active"
          : "entries-section__badge"
      }
    >
      {numberOfEntries}
    </span>
  );
}
