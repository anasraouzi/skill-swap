

import { useState } from "react";
import { useApp } from "./context/AppContext";
import Navbar from "./components/Navbar";
import Notification from "./components/Notification";
import LoginPage from "./components/LoginPage";
import SearchPage from "./components/SearchPage";
import ProfilePage from "./components/ProfilePage";

export default function App() {
  const { currentUser, notification } = useApp();
  const [page, setPage] = useState("search");

  if (!currentUser) {
    return (
      <>
        <Notification notification={notification} />
        <LoginPage />
      </>
    );
  }

  return (
    <>
      <Navbar page={page} onPageChange={setPage} />
      <Notification notification={notification} />
      <main className="main-content">
        {page === "search" && <SearchPage />}
        {page === "profile" && <ProfilePage />}
      </main>
    </>
  );
}
