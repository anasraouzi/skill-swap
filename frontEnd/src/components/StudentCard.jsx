// src/components/StudentCard.jsx

import Avatar from "./Avatar";
import SkillTag from "./SkillTag";

export default function StudentCard({ student, onViewProfile }) {
  return (
    <div className="student-card">
      <div className="student-card__header">
        <Avatar student={student} size="md" />
        <div className="student-card__info">
          <h3 className="student-name">{student.nom}</h3>
          {student.bio && (
            <p className="student-bio-preview">
              {student.bio.length > 70
                ? student.bio.slice(0, 70) + "…"
                : student.bio}
            </p>
          )}
        </div>
        <button className="btn-view" onClick={() => onViewProfile(student)}>
          Voir le profil →
        </button>
      </div>

      <div className="student-card__skills">
        <div className="skills-section">
          <span className="skills-label">Enseigne</span>
          <div className="skills-list">
            {student.offre.length > 0 ? (
              student.offre
                .slice(0, 4)
                .map((c, i) => <SkillTag key={i} label={c} type="offre" />)
            ) : (
              <span className="skills-empty">—</span>
            )}
            {student.offre.length > 4 && (
              <span className="skills-more">+{student.offre.length - 4}</span>
            )}
          </div>
        </div>

        <div className="skills-section">
          <span className="skills-label">Recherche</span>
          <div className="skills-list">
            {student.cherche.length > 0 ? (
              student.cherche
                .slice(0, 4)
                .map((c, i) => <SkillTag key={i} label={c} type="cherche" />)
            ) : (
              <span className="skills-empty">—</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
