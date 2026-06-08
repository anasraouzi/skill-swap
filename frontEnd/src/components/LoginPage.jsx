

import { useApp } from "../context/AppContext";
import { useForm } from "../hooks/useForm";
import { INITIAL_STUDENTS } from "../data/students";

export default function LoginPage() {
  const { login } = useApp();
  const { values, errors, handleChange, validate } = useForm({
    nom: "",
    email: "",
  });

  const handleSubmit = () => {
    const ok = validate({
      nom: (v) => (!v?.trim() ? "Le nom est requis." : ""),
      email: (v) =>
        !v?.trim()
          ? "L'email est requis."
          : !/\S+@\S+\.\S+/.test(v)
          ? "Email invalide."
          : "",
    });
    if (ok) login(values.nom, values.email);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <div className="login-icon">⇄</div>
          <h1 className="login-title">SkillSwap</h1>
          <p className="login-subtitle">
            Échangez vos compétences avec d'autres étudiants, sans argent.
          </p>
        </div>

        <div className="form-group">
          <label className="form-label">Votre nom</label>
          <input
            className={`form-input ${errors.nom ? "input-error" : ""}`}
            type="text"
            name="nom"
            placeholder="Ex : Amira Benali"
            value={values.nom}
            onChange={handleChange}
          />
          {errors.nom && <span className="error-msg">{errors.nom}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Votre email</label>
          <input
            className={`form-input ${errors.email ? "input-error" : ""}`}
            type="email"
            name="email"
            placeholder="Ex : amira@exemple.fr"
            value={values.email}
            onChange={handleChange}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>

        <button className="btn-login" onClick={handleSubmit}>
          Rejoindre la plateforme →
        </button>

        <p className="login-hint">
          Déjà inscrit ? Entrez votre email pour vous reconnecter.
        </p>

        <div className="demo-accounts">
          <div className="demo-label">Comptes de démo :</div>
          {INITIAL_STUDENTS.slice(0, 3).map((s) => (
            <div key={s.id} className="demo-account">
              <strong>{s.nom}</strong> — {s.email}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
