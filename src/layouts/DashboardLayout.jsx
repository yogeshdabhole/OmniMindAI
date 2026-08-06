import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardTopbar from '../components/DashboardTopbar';

export default function DashboardLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="dashboard-shell">
      <aside className={`dashboard-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <DashboardSidebar isCollapsed={isCollapsed} onToggleSidebar={() => setIsCollapsed((prev) => !prev)} />
      </aside>

      <div className="dashboard-main">
        <DashboardTopbar isCollapsed={isCollapsed} onToggleSidebar={() => setIsCollapsed((prev) => !prev)} />

        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
