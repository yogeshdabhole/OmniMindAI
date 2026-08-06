import { NavLink } from 'react-router-dom';
import { sidebarMenu } from '../constants/sidebarMenu';

export default function DashboardSidebar({ isCollapsed, onToggleSidebar }) {
  return (
    <div className="dashboard-sidebar-inner">
      <div className="dashboard-sidebar-header">
        <div className="brand">OmniMindAI</div>
        <button className="sidebar-toggle" type="button" onClick={onToggleSidebar}>
          {isCollapsed ? '»' : '«'}
        </button>
      </div>

      <nav className="dashboard-nav">
        {sidebarMenu.map((item) => {
          if (item.type === 'action') {
            return (
              <button className="sidebar-item sidebar-action" type="button" key={item.label}>
                <span className="sidebar-icon">{item.icon}</span>
                {!isCollapsed && <span>{item.label}</span>}
              </button>
            );
          }

          return (
            <NavLink
              className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
              end={item.path === '/dashboard'}
              key={item.label}
              to={item.path}
            >
              <span className="sidebar-icon">{item.icon}</span>
              {!isCollapsed && <span>{item.label}</span>}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}
