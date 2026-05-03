

import { useState } from "react";
import { useApp } from "../context/AppContext";
import { useSearch } from "../hooks/useSearch";
import StudentCard from "./StudentCard";
import StudentProfile from "./StudentProfile";
import RecommendedStudents from "./RecommendedStudents";

export default function SearchPage() {
  const { students, currentUser } = useApp();
  const { query, setQuery, results } = useSearch(students, currentUser?.id);
  const [selectedStudent, setSelectedStudent] = useState(null);

  if (selectedStudent) {
    return (
      <StudentProfile
        student={selectedStudent}
        onBack={() => setSelectedStudent(null)}
      />
    );
  }

  return (
    <div className="search-page">
      <div className="search-header">
        <h2 className="page-title">Découvrir des étudiants</h2>
        <p className="page-subtitle">
          Trouvez quelqu'un qui enseigne ce que vous voulez apprendre.
        </p>
      </div>

      {!query && (
        <RecommendedStudents onViewProfile={setSelectedStudent} />
      )}

      <div className="search-bar-wrapper">
        <span className="search-icon">🔍</span>
        <input
          className="search-bar"
          type="text"
          placeholder="Rechercher par compétence offerte (ex: Python, Guitare…)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button className="search-clear" onClick={() => setQuery("")}>
            ×
          </button>
        )}
      </div>

      <div className="search-meta">
        {query ? (
          <span>
            {results.length} résultat{results.length !== 1 ? "s" : ""} pour «{" "}
            {query} »
          </span>
        ) : (
          <span>{results.length} étudiants disponibles</span>
        )}
      </div>

      <div className="students-grid">
        {results.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🔎</div>
            <p>Aucun étudiant trouvé pour cette compétence.</p>
            <button className="btn-ghost" onClick={() => setQuery("")}>
              Réinitialiser la recherche
            </button>
          </div>
        ) : (
          results.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onViewProfile={setSelectedStudent}
            />
          ))
        )}
      </div>
    </div>
  );
}
