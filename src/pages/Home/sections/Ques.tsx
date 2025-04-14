import "../../../style/Home/section.ques.css";
import { useSectionsSelector } from "../../../context";
import FaqItem from "../components/Faq/FaqItem";

const Ques = () => {
  // Using our sections context instead of direct import
  const faqSection = useSectionsSelector(context => context.state.faqSection);
  
  const { title, subtitle, questions } = faqSection;
  
  return (
    <section className="section-ques">
      <div className="section-ques-inner">
        <div className="section-ques-text">
          <h3 className="ques-title">{title}</h3>
          <span>{subtitle}</span>
        </div>
        <div className="section-ques-list">
          {questions.map((question) => (
            <FaqItem key={question.id} faqItem={question} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ques;
