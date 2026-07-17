import MenuItem from './MenuItem';
import { dailyMenuItems } from '../data/menuData';
import { matchesSearch } from '../utils/menu-search';

export default function DailyMenu({ searchTerm }) {
  const visibleLeft = dailyMenuItems.left.filter((item) => matchesSearch(item, searchTerm));
  const visibleRight = dailyMenuItems.right.filter((item) => matchesSearch(item, searchTerm));

  if (visibleLeft.length + visibleRight.length === 0) return null;

  return (
    <div className="daily-menu">
      <div className="daily-header">
        <h2 className="section-title" style={{ marginTop: 0 }}>
          Menu Ditore / Daily Menu / Günlük Menü
        </h2>
        <div className="daily-note">
          Disponueshmëria ndryshon çdo ditë / Availability varies daily / Her gün değişir
        </div>
      </div>

      <div className="menu-grid">
        <div className="menu-column">
          {visibleLeft.map((item) => (
            <MenuItem key={`${item.nameSq}-${item.nameEn}`} item={item} searchTerm={searchTerm} />
          ))}
        </div>
        <div className="menu-column">
          {visibleRight.map((item) => (
            <MenuItem key={`${item.nameSq}-${item.nameEn}`} item={item} searchTerm={searchTerm} />
          ))}
        </div>
      </div>
    </div>
  );
}
