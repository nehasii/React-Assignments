import React, { useState } from "react";
import "./FAQ.css";
import {GoTriangleUp,GoTriangleDown } from 'react-icons/go'

export default function Faq() {
  const faqData = [
    {
      id: 1,
      question: " 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      answer: "A: Adipisci mollitia veniam accusantium aliquam tempora ad minima quo soluta tenetur libero commodi dolorem, cumque aliquid. Possimus autem perferendis placeat quibusdam a?",
    },
    {
      id: 2,
      question: "2: Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      answer: "A: Adipisci mollitia veniam accusantium aliquam tempora ad minima quo soluta tenetur libero commodi dolorem, cumque aliquid. Possimus autem perferendis placeat quibusdam a?",
    },
    {
      id: 3,
      question: "3: Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      answer: "A: Adipisci mollitia veniam accusantium aliquam tempora ad minima quo soluta tenetur libero commodi dolorem, cumque aliquid. Possimus autem perferendis placeat quibusdam a?",
    },
  ];

  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (id) => {
    setActiveFaq(id === activeFaq ? null : id);
  };
  console.log("rendered");

  return (
    <div>
      <h1 style={{textAlign:"center", fontSize:"60px", color:"#000"}}>FAQ</h1>
      <h4 style={{textAlign:"center", color:"#000"}}>(Frequently Asked Questions)</h4>
      {faqData.map(({id, question, answer}) => (
        <div key={id} className={`faq-card ${activeFaq === id ? "active" : ""}`}>
          <h3 className="faq-question" >
            {question} 
            <i onClick={() => toggleFaq(id)}>{activeFaq === id? <GoTriangleUp/> : <GoTriangleDown/>}</i>
          </h3>
          <p className="faq-answer">{answer}</p>
          
        </div>
      ))}
    </div>
  )
}