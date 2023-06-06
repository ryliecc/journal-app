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
    allClass = "tab__badge";
    favClass = "tab__badge tab__badge--active";
  }
  if (entryFilter === "all") {
    allClass = "tab__badge tab__badge--active";
    favClass = "tab__badge";
  }

  return (
    <div className="entries-section__tab-bar">
      <button
        type="button"
        onClick={onShowAllEntries}
        className="entries-section__tab"
      >
        All Entries
        <span className={allClass}>{numberOfAllEntries}</span>
      </button>
      <button
        type="button"
        onClick={onShowFavoriteEntries}
        className="entries-section__tab"
      >
        Favorites
        <span className={favClass}>{numberOfFavoriteEntries}</span>
      </button>
    </div>
  );
}
