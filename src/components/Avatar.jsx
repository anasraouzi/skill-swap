

import { AVATAR_COLORS } from "../data/students";

export default function Avatar({ student, size = "md" }) {
  const col = AVATAR_COLORS[(student.id - 1) % AVATAR_COLORS.length];

  if (student.photo) {
    return (
      <img
        className={`avatar avatar--${size}`}
        src={student.photo}
        alt={student.nom}
        style={{ objectFit: "cover" }}
      />
    );
  }

  return (
    <div
      className={`avatar avatar--${size}`}
      style={{ background: col.bg, color: col.color }}
    >
      {student.avatar}
    </div>
  );
}
