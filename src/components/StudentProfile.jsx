// src/components/StudentProfile.jsx

import { useApp } from "../context/AppContext";
import Avatar from "./Avatar";
import SkillTag from "./SkillTag";

export default function StudentProfile({ student, onBack }) {
  const { proposeExchange, hasExchange } = useApp();
  const already = hasExchange(student.id);

  return (
    <div className="profile-view">
      <button className="btn-back" onClick={onBack}>
        ← Retour aux résultats
      </button>

      <div className="profile-hero">
        <Avatar student={student} size="lg" />
        <div>
          <h2 className="profile-name">{student.nom}</h2>
          <p className="profile-email">{student.email}</p>
          <p className="profile-joined">
            Membre depuis{" "}
            {new Date(student.joined).toLocaleDateString("fr-FR", {
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      {student.bio && (
        <div className="profile-section">
          <h4 className="section-title">À propos</h4>
          <p className="profile-bio">{student.bio}</p>
        </div>
      )}

      <div className="profile-section">
        <h4 className="section-title">Compétences offertes</h4>
        <div className="skills-list">
          {student.offre.length > 0 ? (
            student.offre.map((c, i) => (
              <SkillTag key={i} label={c} type="offre" />
            ))
          ) : (
            <span className="skills-empty">Aucune compétence renseignée</span>
          )}
        </div>
      </div>

      <div className="profile-section">
        <h4 className="section-title">Compétences recherchées</h4>
        <div className="skills-list">
          {student.cherche.length > 0 ? (
            student.cherche.map((c, i) => (
              <SkillTag key={i} label={c} type="cherche" />
            ))
          ) : (
            <span className="skills-empty">Aucune compétence renseignée</span>
          )}
        </div>
      </div>

      <div className="profile-cta">
        {already ? (
          <div className="exchange-sent">
            ✓ Demande d'échange envoyée à {student.nom.split(" ")[0]} !
          </div>
        ) : (
          <button
            className="btn-exchange"
            onClick={() => proposeExchange(student.id)}
          >
            ⇄ Proposer un échange
          </button>
        )}
      </div>
    </div>
  );
}
