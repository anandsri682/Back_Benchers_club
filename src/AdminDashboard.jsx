import "./AdminDashboard.css";

function AdminProfileDashboard() {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="row">

          {/* PROFILE HEADER */}
          <div className="col-12 mb-4">
            <div className="profile-header position-relative">
              <div className="position-absolute top-0 end-0 p-3">
                <button className="btn btn-light btn-sm">
                  ✏️ Edit Cover
                </button>
              </div>
            </div>

            <div className="text-center">
              <div className="position-relative d-inline-block">
                <img
                  src="https://randomuser.me/api/portraits/men/40.jpg"
                  className="rounded-circle profile-pic"
                  alt="Admin"
                />
                <button className="btn btn-primary btn-sm position-absolute bottom-0 end-0 rounded-circle">
                  📷
                </button>
              </div>

              <h3 className="mt-3 mb-1">Back Benchers Admin</h3>
              <p className="text-muted">Food Shop Owner</p>

              <div className="d-flex justify-content-center gap-2 mb-4">
                <button className="btn btn-outline-primary">Message</button>
                <button className="btn btn-primary">Edit Profile</button>
              </div>
            </div>
          </div>

          {/* MAIN CARD */}
          <div className="col-12">
            <div className="card border-0 shadow-sm">
              <div className="row g-0">

                {/* SIDEBAR */}
                <div className="col-lg-3 profile-sidebar text-white p-4">
                  <div className="nav flex-column nav-pills">
                    <a className="nav-link active">👤 Profile</a>
                    <a className="nav-link">🔐 Security</a>
                    <a className="nav-link">🔔 Notifications</a>
                    <a className="nav-link">💳 Billing</a>
                    <a className="nav-link">📊 Activity</a>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="col-lg-9">
                  <div className="p-4">

                    {/* PERSONAL INFO */}
                    <h5 className="mb-4">Personal Information</h5>

                    <div className="row g-3 mb-4">
                      <div className="col-md-6">
                        <label className="form-label">First Name</label>
                        <input className="form-control" defaultValue="Back" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Last Name</label>
                        <input className="form-control" defaultValue="Bencher" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input className="form-control" defaultValue="admin@backbenchers.com" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Phone</label>
                        <input className="form-control" defaultValue="+91 98765 43210" />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Bio</label>
                        <textarea className="form-control" rows="3">
Food shop owner managing orders, menu, and sales of Back Benchers Club.
                        </textarea>
                      </div>
                    </div>

                    {/* SETTINGS */}
                    <div className="row g-4 mb-4">
                      <div className="col-md-6">
                        <div className="settings-card card">
                          <div className="card-body d-flex justify-content-between align-items-center">
                            <div>
                              <h6 className="mb-1">Two-Factor Authentication</h6>
                              <p className="text-muted small mb-0">
                                Secure your admin account
                              </p>
                            </div>
                            <div className="form-check form-switch">
                              <input className="form-check-input" type="checkbox" defaultChecked />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="settings-card card">
                          <div className="card-body d-flex justify-content-between align-items-center">
                            <div>
                              <h6 className="mb-1">Email Notifications</h6>
                              <p className="text-muted small mb-0">
                                Order & payment alerts
                              </p>
                            </div>
                            <div className="form-check form-switch">
                              <input className="form-check-input" type="checkbox" defaultChecked />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ACTIVITY */}
                    <h5 className="mb-3">Recent Activity</h5>

                    <div className="activity-item mb-3">
                      <h6 className="mb-1">New order received</h6>
                      <p className="text-muted small mb-0">10 minutes ago</p>
                    </div>

                    <div className="activity-item mb-3">
                      <h6 className="mb-1">Menu updated</h6>
                      <p className="text-muted small mb-0">Today</p>
                    </div>

                    <div className="activity-item">
                      <h6 className="mb-1">Sales report viewed</h6>
                      <p className="text-muted small mb-0">Yesterday</p>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminProfileDashboard;
