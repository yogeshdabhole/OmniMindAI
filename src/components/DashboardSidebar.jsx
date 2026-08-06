import { NavLink } from 'react-router-dom';
import { sidebarMenu } from '../constants/sidebarMenu';

export default function DashboardSidebar({ isCollapsed, onToggleSidebar }) {

  const handleAction = (item) => {
    if (item.label === 'Logout') {
      alert('Logout functionality will be implemented in Phase 6.');
    }
  };

  return (
    <div className="dashboard-sidebar-inner">
      <div className="dashboard-sidebar-header">
        <div className="brand">OmniMindAI</div>
      </div>

      <nav className="dashboard-nav">
        {sidebarMenu.map((item) => {
          if (item.type === 'action') {
            return (
              <button
                className="sidebar-item sidebar-action"
                type="button"
                key={item.label}
                onClick={() => handleAction(item)}
              >
                <span className="sidebar-icon">{item.icon}</span>
                {!isCollapsed && <span>{item.label}</span>}
              </button>
            );
          }

          return (
            <NavLink
              className={({ isActive }) =>
                `sidebar-item ${isActive ? 'active' : ''}`
              }
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