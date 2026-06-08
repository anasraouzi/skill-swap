

export default function SkillTag({ label, type, onRemove, onEdit }) {
  return (
    <span className={`skill-tag skill-tag--${type}`}>
      <span
        className="tag-label"
        onClick={onEdit}
        title={onEdit ? "Cliquer pour modifier" : ""}
        style={{ cursor: onEdit ? "pointer" : "default" }}
      >
        {label}
      </span>
      {onRemove && (
        <button
          className="tag-remove"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          title="Supprimer"
        >
          ×
        </button>
      )}
    </span>
  );
}
