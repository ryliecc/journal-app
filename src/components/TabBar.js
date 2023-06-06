export default function TabBar({
  onShowAllEntries,
  numberOfAllEntries,
  onShowFavoriteEntries,
  numberOfFavoriteEntries,
  entryFilter,
}) {
  let allClass;
  let favClass;

  if (entryFilter === "favorite") {
    allClass = "entries-section__tab";
    favClass = "entries-section__tab entries-section__tab--active";
  }
  if (entryFilter === "all") {
    allClass = "entries-section__tab entries-section__tab--active";
    favClass = "entries-section__tab";
  }

  return (
    <div className="entries-section__tab-bar">
      <button type="button" onClick={onShowAllEntries} className={allClass}>
        All Entries
        <span className="tab__badge">{numberOfAllEntries}</span>
      </button>
      <button
        type="button"
        onClick={onShowFavoriteEntries}
        className={favClass}
      >
        Favorites
        <span className="tab__badge">{numberOfFavoriteEntries}</span>
      </button>
    </div>
  );
}
