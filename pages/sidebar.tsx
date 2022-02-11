import styles from "./sidebar.module.css";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-header">
          <a href="#" className="sidebar-logo">
            <span></span>
          </a>
          <a href="#" className="sidebar-logo-text">
            dash<span>nav</span>
          </a>
        </div>
        <div className="sidebar-search">
          <div className="search-body">
            <i data-feather="search"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="sidebar-body pt-20">
          <div className="nav-group show">
            <div className="nav-group-label">Management</div>
            <ul className="nav-sidebar">
              <li className="nav-item active">
                <a href="" className="nav-link with-sub">
                  <i data-feather="package"></i>
                  <span>Dashboard</span>
                </a>
                <nav className="nav-sub">
                  <a href="" className="sub-link">
                    Overview
                  </a>
                  <a href="" className="sub-link">
                    Insights
                  </a>
                  <a href="" className="sub-link">
                    Transactions
                  </a>
                  <a href="" className="sub-link">
                    Reports
                  </a>
                </nav>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link with-sub">
                  <i data-feather="monitor"></i>
                  <span>Site Analytics</span>
                </a>
                <nav className="nav-sub">
                  <a href="" className="sub-link">
                    Summary
                  </a>
                  <a href="" className="sub-link">
                    Geolocation
                  </a>
                  <a href="" className="sub-link">
                    Accounts
                  </a>
                </nav>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  <i data-feather="shopping-bag"></i>
                  <span>Sales Monitoring</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link with-sub">
                  <i data-feather="file-text"></i>
                  <span>Documents</span>
                </a>
                <nav className="nav-sub">
                  <a href="" className="sub-link">
                    Updates
                  </a>
                  <a href="" className="sub-link">
                    Promotions
                  </a>
                  <a href="" className="sub-link">
                    Articles
                  </a>
                </nav>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  <i data-feather="calendar"></i>
                  <span>Calendar</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  <i data-feather="briefcase"></i>
                  <span>Customers</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-group">
            <div className="nav-group-label">Accounts &amp; Settings</div>
            <ul className="nav-sidebar">
              <li className="nav-item">
                <a href="" className="nav-link">
                  <i data-feather="activity"></i>
                  <span>Activity Logs</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link with-sub">
                  <i data-feather="settings"></i>
                  <span>Preferences</span>
                </a>
                <nav className="nav-sub">
                  <a href="" className="sub-link">
                    Language
                  </a>
                  <a href="" className="sub-link">
                    Accessibility
                  </a>
                </nav>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link with-sub">
                  <i data-feather="help-circle"></i>
                  <span>Help &amp; Support</span>
                </a>
                <nav className="nav-sub">
                  <a href="" className="sub-link">
                    Report Center
                  </a>
                  <a href="" className="sub-link">
                    Report a Problem
                  </a>
                  <a href="" className="sub-link">
                    FAQ
                  </a>
                </nav>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  <i data-feather="edit-3"></i>
                  <span>Give Feedback</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar-footer">
          <a href="" className="avatar online">
            <span className="avatar-initial">s</span>
          </a>
          <div className="avatar-body">
            <div className="d-flex align-items-center justify-content-between">
              <h6>Samantha Doe</h6>
              <a href="" className="footer-menu">
                <i className="ri-settings-4-line"></i>
              </a>
            </div>
            <span>Superuser/Administrator</span>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="content-header">
          <a
            id="contentMenu"
            href="#"
            className="content-menu d-none d-lg-flex"
          >
            <i data-feather="menu"></i>
          </a>
          <a id="mobileMenu" href="#" className="content-menu d-lg-none">
            <i data-feather="menu"></i>
          </a>
        </div>
        <div className="content-body">
          <label className="content-label">Navigation Skins</label>
          <nav id="navigationSkins" className="nav">
            <a href="" data-skin="base" className="nav-link active">
              Base
            </a>
            <a href="" data-skin="blue" className="nav-link">
              Blue/White
            </a>
            <a href="" data-skin="dark" className="nav-link">
              Dark
            </a>
            <a href="" data-skin="red" className="nav-link">
              Red/Dark
            </a>
            <a href="" data-skin="indigo" className="nav-link">
              White/Indigo
            </a>
            <a href="" data-skin="gradient" className="nav-link">
              White/Gradient
            </a>
          </nav>

          <br />

          <label className="content-label">Navigation Styles</label>
          <nav id="navigationStyles" className="nav">
            <a href="" data-style="base" className="nav-link active">
              Base
            </a>
            <a href="" data-style="one" className="nav-link">
              Style 01
            </a>
            <a href="" data-style="two" className="nav-link">
              Style 02
            </a>
            <a href="" data-style="three" className="nav-link">
              Style 03
            </a>
          </nav>

          <br />

          <label className="content-label">Navigation Variants</label>
          <nav className="nav">
            <a href="index.html" className="nav-link">
              One Level
            </a>
            <a href="submenu.html" className="nav-link">
              Sub Menu
            </a>
            <a href="groupmenu.html" className="nav-link active">
              Group Menu
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
