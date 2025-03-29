import { createContext, useState, useContext } from "react";

export const SidebarContext = createContext();

export default function SidebarProvider ({ children }) {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    const white = document.getElementById("white");

    if (sidebar.classList.contains("active")) {
      sidebar.style.animation = "slideOutIn 0.4s ease-in-out forwards";
      setTimeout(() => {
        sidebar.classList.remove("active");
        sidebar.style.animation = "";
        white.classList.remove("active");
        setIsSidebarActive(false);
      }, 400);
    } else {
      sidebar.classList.add("active");
      sidebar.style.animation = "slideIn 0.4s ease-in-out forwards";
      white.classList.add("active");
      setIsSidebarActive(true);
    }
  };

  return (
    <SidebarContext.Provider value={{ isSidebarActive, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
