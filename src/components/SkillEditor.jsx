

import { useState } from "react";
import { useApp } from "../context/AppContext";
import SkillTag from "./SkillTag";

export default function SkillEditor({ type, skills }) {
  const { addSkill, removeSkill, editSkill } = useApp();
  const [input, setInput] = useState("");
  const [editIdx, setEditIdx] = useState(null);
  const [editVal, setEditVal] = useState("");

  const label =
    type === "offre" ? "Compétences que j'enseigne" : "Compétences que je veux apprendre";

  const handleAdd = () => {
    if (!input.trim()) return;
    addSkill(type, input);
    setInput("");
  };

  const startEdit = (idx, current) => {
    setEditIdx(idx);
    setEditVal(current);
  };

  const confirmEdit = () => {
    editSkill(type, editIdx, editVal);
    setEditIdx(null);
    setEditVal("");
  };

  return (
    <div className="skill-editor">
      <h4 className="section-title">{label}</h4>

      <div className="skills-list" style={{ marginBottom: "0.75rem" }}>
        {skills.length === 0 && (
          <span className="skills-empty">Aucune compétence ajoutée</span>
        )}
        {skills.map((c, i) =>
          editIdx === i ? (
            <span key={i} className="inline-edit">
              <input
                className="inline-input"
                value={editVal}
                onChange={(e) => setEditVal(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && confirmEdit()}
                autoFocus
              />
              <button className="btn-confirm" onClick={confirmEdit}>✓</button>
              <button className="btn-cancel" onClick={() => setEditIdx(null)}>✕</button>
            </span>
          ) : (
            <SkillTag
              key={i}
              label={c}
              type={type}
              onEdit={() => startEdit(i, c)}
              onRemove={() => removeSkill(type, i)}
            />
          )
        )}
      </div>

      <div className="add-skill-row">
        <input
          className="skill-input"
          type="text"
          placeholder="Ajouter une compétence…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <button className="btn-add" onClick={handleAdd}>
          + Ajouter
        </button>
      </div>
    </div>
  );
}
