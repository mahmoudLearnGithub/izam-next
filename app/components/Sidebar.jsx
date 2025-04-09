"use client";
import Script from 'next/script';
import { useEffect, useState, useContext } from "react";
import { SidebarContext } from "./SidebarContext";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { svgContent_5, svgContent_6, svgContent_7 } from "../../public/svg";

const CaretIcon = () => (
  <svg className="caret"
    id="caret-icon" width="14" height="9" viewBox="0 0 14 9" fill="none"
    xmlns="http://www.w3.org/2000/svg"> <path
      d="M1.57999 0.951987L0.519991 2.01299L6.29699 7.79199C6.38956 7.88514 6.49963 7.95907 6.62088 8.00952C6.74213 8.05997 6.87216 8.08594 7.00349 8.08594C7.13482 8.08594 7.26485 8.05997 7.3861 8.00952C7.50735 7.95907 7.61742 7.88514 7.70999 7.79199L13.49 2.01299L12.43 0.952987L7.00499 6.37699L1.57999 0.951987Z"
      fill="black" />
  </svg>
);

const DraggableItem = ({ item, index, moveItem, updateLabel }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ITEM",
    item: { index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: "ITEM",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  }));

  return (
    <li
      ref={(node) => drag(drop(node))}
      className="menu-item toggle-icons"
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "grab",
      }}
    >
      <input
        type="text"
        value={item.label}
        onChange={(e) => updateLabel(index, e.target.value)}
        style={{ border: "none", background: "transparent", width: "100%" }}
      />
    </li>
  );
};

export default function Sidebar() {
  const { isSidebarActive, toggleSidebar } = useContext(SidebarContext);
  const [items, setItems] = useState([
    { id: 1, label: "Dashboard" },
    { id: 2, label: "Application" },
    { id: 3, label: "Qualifications" },
    { id: 4, label: "About" },
    { id: 5, label: "Contact" },
  ]);

  const moveItem = async (fromIndex, toIndex) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      const [movedItem] = updatedItems.splice(fromIndex, 1);
      updatedItems.splice(toIndex, 0, movedItem);

      fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: movedItem.id,
          from: fromIndex,
          to: toIndex,
        }),
      }).catch((err) => console.error('Tracking error:', err));

      return updatedItems;
    });
  };

  const updateLabel = (index, newLabel) => {
    setItems((prevItems) =>
      prevItems.map((item, i) => (i === index ? { ...item, label: newLabel } : item))
    );
  };

  const saveChanges = async () => {
    try {
      const res = await fetch('/api/nav', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(items),
      });
      if (!res.ok) throw new Error('Failed to save nav');
      const saved = await res.json();
      setItems(saved);
    } catch (error) {
      console.error('Save nav error:', error);
    }
  };

  const discardChanges = async () => {
    try {
      const res = await fetch('/api/nav');
      const data = await res.json();
      setItems(data);
    } catch (error) {
      console.error('Error discarding changes:', error);
    }
  };

  return (
    <>
      <Script src="/scripts.js" strategy="afterInteractive" />
      <DndProvider backend={HTML5Backend}>
        <aside className={`sidebar ${isSidebarActive ? "active" : ""}`} id="sidebar">
          <div className="menu-container">
            <button className="back-button" onClick={toggleSidebar}>←</button>
            <span className="menu-text">Menu</span>
            <div className="icons">
              <i id="settings-icon" className="icon gear" dangerouslySetInnerHTML={{ __html: svgContent_5 }} />
              <div id="boolean-icons" className="hidden">
                <i
                  id="false-icon"
                  className="icon false-icon"
                  dangerouslySetInnerHTML={{ __html: svgContent_6 }}
                  onClick={discardChanges}
                  style={{ cursor: "pointer" }}
                />
                <i
                  id="true-icon"
                  className="icon true-icon"
                  dangerouslySetInnerHTML={{ __html: svgContent_7 }}
                  onClick={saveChanges}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                />
              </div>
            </div>
          </div>
          <ul className="menu">
            {items.map((item, index) => (
              <DraggableItem key={item.id} item={item} index={index} moveItem={moveItem} updateLabel={updateLabel} />
            ))}
          </ul>
        </aside>
      </DndProvider>
    </>
  );
}
