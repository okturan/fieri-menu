import MenuItem from './MenuItem';
import { dailyMenuItems } from '../data/menuData';

export default function DailyMenu({ searchTerm }) {
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
          {dailyMenuItems.left.map((item, index) => (
            <MenuItem key={index} item={item} searchTerm={searchTerm} />
          ))}
        </div>
        <div className="menu-column">
          {dailyMenuItems.right.map((item, index) => (
            <MenuItem key={index} item={item} searchTerm={searchTerm} />
          ))}
        </div>
      </div>
    </div>
  );
}
