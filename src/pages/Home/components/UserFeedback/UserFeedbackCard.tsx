import { UserFeedback } from '../../../../types/mockdata';
import { assets } from '../../../../assets/assets';
import Image from '../../../../components/ImageComponent/Image';

interface UserFeedbackCardProps {
  feedback: UserFeedback;
}

const UserFeedbackCard = ({ feedback }: UserFeedbackCardProps) => {
  const { name, avatar, feedback: userFeedbackText } = feedback;


  return (
    <div className="section-user-card-item">
      <div className="user-name">
        <div className="virgol">
          <Image src={assets.virgol} alt="virgol" />
        </div>
        <div className="avatar-name">
          <Image src={avatar} alt="avatar" />
          <span>{name}</span>
        </div>
      </div>
      <div className="user-feedback">
        <p>{userFeedbackText}</p>
        {/* <div className="user-feedback-actions">
          <button 
            className={`feedback-like-button ${isLiked ? 'is-liked' : ''}`}
            onClick={handleLike}
            aria-label={isLiked ? "Unlike this feedback" : "Like this feedback"}
          >
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default UserFeedbackCard;