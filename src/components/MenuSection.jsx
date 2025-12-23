import MenuItem from './MenuItem';

export default function MenuSection({ title, items, searchTerm }) {
  return (
    <div className="menu-section">
      <div className="section-title">{title}</div>
      {items.map((item, index) => (
        <MenuItem key={index} item={item} searchTerm={searchTerm} />
      ))}
    </div>
  );
}
