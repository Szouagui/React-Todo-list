import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems((prevItems) => [...prevItems, newItem]);
      setNewItem("");
    }
  };

  const handleDeleteItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <form className="new-item-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </div>

        <button className="btn" onClick={handleAddItem}>
          Add
        </button>
      </form>

      <h1 className="header">Todo list</h1>
      <ul className="list">
        {items.map((item, index) => (
          <li key={index}>
            <label>
              <input type="checkbox" />
              {item}
            </label>
            <button
              className="btn btn-danger delete-btn"
              onClick={() => handleDeleteItem(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
