import React, { useState } from "react";
import styled from "styled-components";
import { UpArrow } from "styled-icons/boxicons-solid";

const AccordionContentArea = styled.article`
border: 1px solid rgba(0, 0, 0, 0.125);
padding: 0.75rem 1.25rem;
max-height: ${({ isExpanded }) => (isExpanded ? "150px" : "0px")};
transition: max-height 0.3s ease;
overflow: hidden;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  transition: transform 0.3s ease;
  &.rotate {
    transform: rotate(180deg);
  }
`;

export default function Slide({ isExpanded, setIsExpanded, isAccordion, expansionState, setExpansionState }) {
  const [isRotated, setIsRotated] = useState(false);

  function handleAccordionClick() {
    setIsExpanded(!isExpanded);
    setIsRotated(!isRotated);
    setExpansionState({ ...expansionState, [isAccordion]: !isExpanded });
  }


  return (
    <div>
      <Button
        onClick={handleAccordionClick}
        className={isRotated ? "rotate" : ""}
      >
        <UpArrow size={24} />
      </Button>
      <AccordionContentArea isExpanded={isExpanded}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
      It was popularised in the 1960s with the release of Letraset sheets containing 
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </AccordionContentArea>
  
    </div>
  );
}