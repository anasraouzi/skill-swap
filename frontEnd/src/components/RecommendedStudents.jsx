

import { useMemo } from "react";
import { useApp } from "../context/AppContext";
import Avatar from "./Avatar";
import SkillTag from "./SkillTag";

export default function RecommendedStudents({ onViewProfile }) {
  const { students, currentUser } = useApp();

  const recommended = useMemo(() => {
    if (!currentUser?.cherche?.length) return [];

    return students
      .filter((s) => s.id !== currentUser.id)
      .map((s) => {
        const matchedSkills = s.offre.filter((skill) =>
          currentUser.cherche.some((wanted) =>
            skill.toLowerCase().includes(wanted.toLowerCase()) ||
            wanted.toLowerCase().includes(skill.toLowerCase())
          )
        );
        return { ...s, matchedSkills };
      })
      .filter((s) => s.matchedSkills.length > 0)
      .sort((a, b) => b.matchedSkills.length - a.matchedSkills.length);
  }, [students, currentUser]);

  if (!currentUser?.cherche?.length) return null;
  if (recommended.length === 0) return null;

  return (
    <div className="recommended-section">
      <div className="recommended-header">
        <span className="recommended-icon">✦</span>
        <div>
          <h3 className="recommended-title">Étudiants recommandés</h3>
          <p className="recommended-subtitle">
            Ils enseignent ce que vous voulez apprendre
          </p>
        </div>
      </div>

      <div className="recommended-grid">
        {recommended.map((student) => (
          <div key={student.id} className="recommended-card">
            <div className="recommended-card__top">
              <Avatar student={student} size="md" />
              <div className="recommended-card__info">
                <span className="recommended-name">{student.nom}</span>
                {student.bio && (
                  <span className="recommended-bio">
                    {student.bio.length > 55
                      ? student.bio.slice(0, 55) + "…"
                      : student.bio}
                  </span>
                )}
              </div>
            </div>

            <div className="recommended-matches">
              <span className="match-label">
                {student.matchedSkills.length} compétence{student.matchedSkills.length > 1 ? "s" : ""} en commun
              </span>
              <div className="match-tags">
                {student.matchedSkills.slice(0, 3).map((skill, i) => (
                  <SkillTag key={i} label={skill} type="offre" />
                ))}
              </div>
            </div>

            <button
              className="btn-view recommended-btn"
              onClick={() => onViewProfile(student)}
            >
              Voir le profil →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
