

import { useState, useMemo } from "react";

export function useSearch(students, currentUserId) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    return students.filter((s) => {
      if (s.id === currentUserId) return false;
      if (!query.trim()) return true;
      return s.offre.some((c) =>
        c.toLowerCase().includes(query.toLowerCase())
      );
    });
  }, [students, currentUserId, query]);

  return { query, setQuery, results };
}
