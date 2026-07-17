import MenuItem from './MenuItem';
import { matchesSearch } from '../utils/menu-search';

export default function MenuSection({ title, items, searchTerm }) {
  const visibleItems = items.filter((item) => matchesSearch(item, searchTerm));

  if (visibleItems.length === 0) return null;

  return (
    <section className="menu-section">
      <h2 className="section-title">{title}</h2>
      {visibleItems.map((item) => (
        <MenuItem key={`${item.nameSq}-${item.nameEn}`} item={item} searchTerm={searchTerm} />
      ))}
    </section>
  );
}
