import { FaqItem as FaqItemType } from "../../../../types/mockdata";
import { assets } from "../../../../assets/assets";
import Image from "../../../../components/ImageComponent/Image";
import { useSectionsSelector } from "../../../../context";
import "../../../../style/Home/faq-item.css";

interface FaqItemProps {
  faqItem: FaqItemType;
}

const FaqItem = ({ faqItem }: FaqItemProps) => {
  const { state, dispatch } = useSectionsSelector((context) => context);
  const { expandedFaqId } = state;

  const { id, question, answer } = faqItem;
  const isOpen = expandedFaqId === id;

  const toggleOpen = () => {
    dispatch({ type: "TOGGLE_FAQ", payload: id });
  };

  return (
    <div
      className="section-ques-box"
      style={{ cursor: "pointer" }}
      onClick={toggleOpen}
    >
      <div className="section-ques-box-text">
        <div
          className={`plus-icon ${isOpen ? "plus-icon-open" : ""}`}
          style={{ cursor: "pointer" }}
        >
          <Image
            src={assets.plus}
            style={
              isOpen
                ? {
                    transform: "rotate(45deg)",
                    transition: "transform 0.3s ease-in-out",
                  }
                : { transition: "transform 0.3s ease-in-out" }
            }
            className="text-yellow-600 plus-icon-image"
            alt="plus"
          />
        </div>
        <span className={`${isOpen ? "text-yellow-600" : ""}`}>{question}</span>
      </div>
      <div
        className={`section-ques-answer ${
          isOpen ? "section-ques-answer-open" : "section-ques-answer-closed"
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
