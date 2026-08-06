export default function DashboardTopbar({ isCollapsed, onToggleSidebar }) {
  return (
    <header className="dashboard-topbar">
      <button className="topbar-toggle" type="button" onClick={onToggleSidebar}>
        {isCollapsed ? '☰' : '☰'}
      </button>
      <div className="topbar-title">Workspace Dashboard</div>
      <div className="topbar-user">Admin</div>
    </header>
  );
}
