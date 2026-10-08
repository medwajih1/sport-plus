function StatsCard({ title, value, icon, description }) {
  return (
    <div className="stats-card">
      <div className="stats-icon">{icon}</div>

      <div className="stats-content">
        <span>{title}</span>
        <h3>{value}</h3>
        <small>{description}</small>
      </div>
    </div>
  );
}

export default StatsCard;