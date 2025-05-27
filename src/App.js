import { useState } from "react";
import "./index.css";
import { questions } from "./data/questions";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openId, setOpenId] = useState(null);

  const filteredQuestions = selectedCategory === "all" 
    ? questions 
    : questions.filter(q => q.category === selectedCategory);

  const categories = ["all", ...new Set(questions.map(q => q.category))];

  function handleOpen(id) {
    setOpenId(id === openId ? null : id);
  }

  return (
    <div className="app">
      <div className="categories">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="accordion">
        {filteredQuestions.map((el, i) => (
          <AccordionItem 
            title={el.title} 
            text={el.text} 
            num={i} 
            key={el.title}
            isOpen={openId === i}
            onOpen={() => handleOpen(i)}
          />
        ))}
      </div>
    </div>
  );
}

function AccordionItem({ num, title, text, isOpen, onOpen }) {
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={onOpen}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
