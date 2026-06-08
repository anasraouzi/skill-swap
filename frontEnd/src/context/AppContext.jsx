

import { createContext, useContext, useState, useCallback } from "react";
import { INITIAL_STUDENTS } from "../data/students";

const AppContext = createContext(null);

let nextId = INITIAL_STUDENTS.length + 1;

export function AppProvider({ children }) {
  const [students, setStudents] = useState(INITIAL_STUDENTS);
  const [currentUser, setCurrentUser] = useState(null);
  const [exchanges, setExchanges] = useState([]);
  const [notification, setNotification] = useState(null);

  const showNotif = useCallback((msg, type = "success") => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 3000);
  }, []);

  const login = useCallback(
    (nom, email) => {
      const existing = students.find(
        (s) => s.email.toLowerCase() === email.toLowerCase()
      );
      if (existing) {
        setCurrentUser(existing);
        showNotif(`Bienvenue, ${existing.nom.split(" ")[0]} !`);
        return existing;
      }
      const newUser = {
        id: nextId++,
        nom: nom.trim(),
        email: email.trim(),
        bio: "",
        avatar: nom
          .split(" ")
          .map((p) => p[0])
          .join("")
          .toUpperCase()
          .slice(0, 2),
        offre: [],
        cherche: [],
        joined: new Date().toISOString().split("T")[0],
      };
      setStudents((prev) => [...prev, newUser]);
      setCurrentUser(newUser);
      showNotif(`Compte créé ! Bienvenue, ${newUser.nom.split(" ")[0]} !`);
      return newUser;
    },
    [students, showNotif]
  );

  const logout = useCallback(() => {
    setCurrentUser(null);
    setExchanges([]);
  }, []);

  const updateUser = useCallback(
    (changes) => {
      if (!currentUser) return;
      const updated = { ...currentUser, ...changes };
      setCurrentUser(updated);
      setStudents((prev) =>
        prev.map((s) => (s.id === currentUser.id ? updated : s))
      );
    },
    [currentUser]
  );

  const addSkill = useCallback(
    (type, value) => {
      if (!value.trim()) return;
      updateUser({ [type]: [...(currentUser[type] || []), value.trim()] });
      showNotif("Compétence ajoutée !");
    },
    [currentUser, updateUser, showNotif]
  );

  const removeSkill = useCallback(
    (type, index) => {
      updateUser({ [type]: currentUser[type].filter((_, i) => i !== index) });
      showNotif("Compétence supprimée.");
    },
    [currentUser, updateUser, showNotif]
  );

  const editSkill = useCallback(
    (type, index, newVal) => {
      if (!newVal.trim()) return;
      updateUser({
        [type]: currentUser[type].map((c, i) =>
          i === index ? newVal.trim() : c
        ),
      });
      showNotif("Compétence modifiée !");
    },
    [currentUser, updateUser, showNotif]
  );

  const proposeExchange = useCallback(
    (targetId) => {
      const key = `${currentUser.id}-${targetId}`;
      setExchanges((prev) => [...prev, key]);
      showNotif("Demande d'échange envoyée !", "info");
    },
    [currentUser, showNotif]
  );

  const hasExchange = useCallback(
    (targetId) => exchanges.includes(`${currentUser?.id}-${targetId}`),
    [exchanges, currentUser]
  );

  return (
    <AppContext.Provider
      value={{
        students,
        currentUser,
        notification,
        login,
        logout,
        updateUser,
        addSkill,
        removeSkill,
        editSkill,
        proposeExchange,
        hasExchange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
