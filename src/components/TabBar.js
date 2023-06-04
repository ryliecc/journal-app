export default function TabBar({
  onShowAllEntries,
  numberOfAllEntries,
  onShowFavoriteEntries,
  numberOfFavoriteEntries,
}) {
  return (
    <div className="entries-section__tab-bar">
      <button
        type="button"
        onClick={onShowAllEntries}
        className="entries-section__tab"
      >
        All Entries
        <span className="tab__badge">{numberOfAllEntries}</span>
      </button>
      <button
        type="button"
        onClick={onShowFavoriteEntries}
        className="entries-section__tab"
      >
        Favorites
        <span className="tab__badge">{numberOfFavoriteEntries}</span>
      </button>
    </div>
  );
}
