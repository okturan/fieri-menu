import MenuItem from './MenuItem';
import { dailyMenuItems } from '../data/menuData';

export default function DailyMenu({ searchTerm }) {
  const today = new Date();
  const dateStr = today.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).replace(/\//g, '.');

  return (
    <div className="daily-menu">
      <div className="daily-header">
        <h2 className="section-title" style={{ marginTop: 0 }}>
          Menu Ditore / Daily Menu / Günlük Menü
        </h2>
        <div className="daily-date">{dateStr}</div>
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
