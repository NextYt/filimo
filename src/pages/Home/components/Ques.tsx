import "../../../style/Home/section.ques.css";
import { FAQ_SECTION } from "../../../data/mockData";
import FaqItem from "../../../components/Faq/FaqItem";

const Ques = () => {
  const { title, subtitle, questions } = FAQ_SECTION;
  
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
