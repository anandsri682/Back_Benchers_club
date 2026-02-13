function AdminItem({ icon, label }) {
  return (
    <div className="admin-item">
      <i className={`fas ${icon}`}></i>
      <span>{label}</span>
      <i className="fas fa-chevron-right arrow"></i>
    </div>
  );
}

export default AdminItem;
