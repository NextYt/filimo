import { useState } from "react";
import { FaqItem as FaqItemType } from "../../data/mockData";
import { assets } from "../../assets/assets";
import Image from "../ImageComponent/Image";

interface FaqItemProps {
  faqItem: FaqItemType;
}

const FaqItem = ({ faqItem }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { question, answer } = faqItem;

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="section-ques-box"
      style={{ cursor: "pointer" }}
      onClick={toggleOpen}
    >
      <div className="section-ques-box-text">
        <div className={`plus-icon ${isOpen ? "plus-icon-open" : ""}`} style={{ cursor: "pointer" }}>
          <Image
            src={assets.plus}
            className="text-yellow-600 plus-icon-image"
            alt="plus"
          />
        </div>
        <span>{question}</span>
      </div>
      {isOpen && answer && (
        <div className="section-ques-answer pt-4">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
