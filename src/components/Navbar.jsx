

import { useApp } from "../context/AppContext";
import { AVATAR_COLORS } from "../data/students";

export default function Navbar({ page, onPageChange }) {
  const { currentUser, logout } = useApp();
  const col = AVATAR_COLORS[(currentUser?.id - 1) % AVATAR_COLORS.length];

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="brand-icon">⇄</div>
        <span className="brand-name">SkillSwap</span>
      </div>

      {currentUser && (
        <div className="navbar-tabs">
          {[
            { id: "search", label: "Découvrir" },
            { id: "profile", label: "Mon profil" },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`nav-tab ${page === tab.id ? "active" : ""}`}
              onClick={() => onPageChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {currentUser && (
        <div className="navbar-user">
          <div
            className="user-avatar-sm"
            style={{ background: col.bg, color: col.color }}
          >
            {currentUser.avatar}
          </div>
          <button className="btn-logout" onClick={logout}>
            Quitter
          </button>
        </div>
      )}
    </nav>
  );
}
