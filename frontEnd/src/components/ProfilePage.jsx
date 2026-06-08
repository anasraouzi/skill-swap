

import { useState, useEffect, useRef } from "react";
import { useApp } from "../context/AppContext";
import Avatar from "./Avatar";
import SkillEditor from "./SkillEditor";
import { useForm } from "../hooks/useForm";

export default function ProfilePage() {
  const { currentUser, updateUser } = useApp();
  const [editing, setEditing] = useState(false);
  const fileInputRef = useRef(null);

  const { values, setField, validate, errors } = useForm({
    nom: currentUser?.nom || "",
    bio: currentUser?.bio || "",
  });

  useEffect(() => {
    if (currentUser) {
      setField("nom", currentUser.nom);
      setField("bio", currentUser.bio);
    }
  }, [currentUser?.id]);

  const handleSave = () => {
    const ok = validate({
      nom: (v) => (!v?.trim() ? "Le nom est requis." : ""),
    });
    if (!ok) return;
    updateUser({
      nom: values.nom.trim(),
      bio: values.bio.trim(),
      avatar: values.nom
        .trim()
        .split(" ")
        .map((p) => p[0])
        .join("")
        .toUpperCase()
        .slice(0, 2),
    });
    setEditing(false);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      updateUser({ photo: ev.target.result });
    };
    reader.readAsDataURL(file);
  };

  if (!currentUser) return null;

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-hero">

          <div className="avatar-upload-wrapper">
            <Avatar student={currentUser} size="lg" />
            <button
              className="avatar-upload-btn"
              onClick={() => fileInputRef.current.click()}
              title="Changer la photo"
            >
              📷
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handlePhotoChange}
            />
          </div>

          <div>
            <h2 className="profile-name">{currentUser.nom}</h2>
            <p className="profile-email">{currentUser.email}</p>
            <p className="profile-joined">
              Membre depuis{" "}
              {new Date(currentUser.joined).toLocaleDateString("fr-FR", {
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>

        {editing ? (
          <div className="edit-form">
            <div className="form-group">
              <label className="form-label">Nom affiché</label>
              <input
                className={`form-input ${errors.nom ? "input-error" : ""}`}
                type="text"
                value={values.nom}
                onChange={(e) => setField("nom", e.target.value)}
              />
              {errors.nom && <span className="error-msg">{errors.nom}</span>}
            </div>
            <div className="form-group">
              <label className="form-label">Bio</label>
              <textarea
                className="form-textarea"
                value={values.bio}
                onChange={(e) => setField("bio", e.target.value)}
                placeholder="Quelques mots sur vous…"
                rows={3}
              />
            </div>
            <div className="edit-actions">
              <button className="btn-save" onClick={handleSave}>
                Sauvegarder
              </button>
              <button className="btn-ghost" onClick={() => setEditing(false)}>
                Annuler
              </button>
            </div>
          </div>
        ) : (
          <div className="profile-info">
            {currentUser.bio ? (
              <p className="profile-bio">{currentUser.bio}</p>
            ) : (
              <p className="profile-bio" style={{ opacity: 0.5, fontStyle: "italic" }}>
                Aucune bio renseignée.
              </p>
            )}
            <button className="btn-edit" onClick={() => setEditing(true)}>
              ✏️ Modifier le profil
            </button>
          </div>
        )}
      </div>

      <SkillEditor type="offre" skills={currentUser.offre || []} />
      <SkillEditor type="cherche" skills={currentUser.cherche || []} />
    </div>
  );
}
