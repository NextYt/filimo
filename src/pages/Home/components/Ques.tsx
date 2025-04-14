import '../../../style/Home/section.ques.css';
import { assets } from '../../../assets/assets';
import Image from '../../../components/ImageComponent/Image';

// translate to english

const Ques = () => {
  return (
    <section className="section-ques">
      <div className="section-ques-inner">
        <div className="section-ques-text">
          <h3 className="ques-title">Frequently Asked Questions</h3>
          <span>Maybe some questions are common for you</span>
        </div>
        <div className="section-ques-list">
          <div className="section-ques-box" style={{cursor: "pointer"}}>
            <div className="section-ques-box-text">
              <div className="plus-icon" style={{cursor: "pointer"}}>
                <Image src={assets.plus} className="text-yellow-600" alt="plus" />
              </div>
              <span>Can I download movies from Filimo?</span>
            </div>
          </div>
            <div className="section-ques-box" style={{cursor: "pointer"}}>
            <div className="section-ques-box-text">
              <div className="plus-icon">
                <Image src={assets.plus} className="text-yellow-600" alt="plus" />
              </div>
              <span>Is Filimo available outside of Iran?</span>
            </div>
          </div>
          <div className="section-ques-box" style={{cursor: "pointer"}}>
            <div className="section-ques-box-text">
              <div className="plus-icon">
                <Image src={assets.plus} className="text-yellow-600" alt="plus" />
              </div>
              <span>
                Do I need to buy a subscription to watch online movies?
              </span>
            </div>
          </div>
          <div className="section-ques-box" style={{cursor: "pointer"}}>
            <div className="section-ques-box-text">
              <div className="plus-icon ">
                <Image src={assets.plus} className="text-yellow-600" alt="plus" />
              </div>
              <span>
                How can I download the Android or iOS Filimo app?
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ques;
