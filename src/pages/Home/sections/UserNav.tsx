import "../../../style/Home/section-user.css";
import UserFeedbackCard from "../components/UserFeedback/UserFeedbackCard";
import { useSectionsSelector } from "../../../context";

const UserNav = () => {
  // Using our sections context instead of direct import
  const userFeedbackSection = useSectionsSelector(context => context.state.userFeedbackSection);
  
  const { title, userFeedbacks } = userFeedbackSection;

  return (
    <section className="section-user-nav">
      <div className="section-user-dev">
        <div className="section-user-text">
          <div>
            <span className="text-base md:text-2xl">{title}</span>
          </div>
          <div className="move-button">
            <div
              className="swiper-icon next-icon free-movie-swiper feedback-swiper"
              style={{ cursor: "pointer" }}
            ></div>
            <div
              className="swiper-icon before-icon free-movie-swiper feedback-swiper"
              style={{ cursor: "pointer" }}
            ></div>
          </div>
        </div>
        <div className="section-user-card-list">
          {userFeedbacks.map((feedback) => (
            <UserFeedbackCard key={feedback.id} feedback={feedback} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserNav;
