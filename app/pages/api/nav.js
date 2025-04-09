// pages/api/nav.js

export default function handler(req, res) {
    const navItems = [
      { id: 2, title: "Job Applications", target: "/applications", label: "b" },
      { id: 1, title: "Dashboard", target: "/", label: "a" },
    ];
  
    res.status(200).json(navItems);
  }
  