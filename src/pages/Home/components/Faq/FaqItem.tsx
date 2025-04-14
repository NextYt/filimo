import { FaqItem as FaqItemType } from "../../../../types/mockdata";
import { assets } from "../../../../assets/assets";
import Image from "../../../../components/ImageComponent/Image";
import { useSectionsSelector } from "../../../../context";

interface FaqItemProps {
  faqItem: FaqItemType;
}

const FaqItem = ({ faqItem }: FaqItemProps) => {
  const { state, dispatch } = useSectionsSelector(context => context);
  const { expandedFaqId } = state;
  
  const { id, question, answer } = faqItem;
  const isOpen = expandedFaqId === id;

  const toggleOpen = () => {
    dispatch({ type: 'TOGGLE_FAQ', payload: id });
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
            // add a style when user click rotate the icon
            style={isOpen ? { transform: "rotate(45deg)" } : {}}
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
