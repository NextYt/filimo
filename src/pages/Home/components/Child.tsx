import "../../../style/Home/section-child.css";
import Image from "../../../components/ImageComponent/Image";
import { assets } from "../../../assets/assets";
import Button from "../../../components/Button/Button";

const Child = () => {
  return (
    <section className="section-child">
      <div className="section-child-gradient"></div>
      <div className="section-child-def">
        <div className="child-layout">
          <div className="child-layout-img">
            <Image src={assets.bgKids} alt="bg-kids" />
          </div>
          <div className="section-child-text">
            <span className="section-child-text-tilte">
              A diverse world of children's movies and cartoons
            </span>
            <div className="responsive-child-img">
              <Image src={assets.tomJerry} alt="tom-jerry" width="350px" />
            </div>
            <p className="section-child-text-describe">
              Filimo Kids provides the opportunity to create a safe space for
              children to watch content suitable for their age, meaning they can
              watch content specific to their age and not have access to other
              movies and series.
            </p>
            <div className="section-child-text-btn">
              <Button className="btn child-btn-1">Create Filimo Kids</Button>
              <Button className="btn child-btn-2">Watch Filimo Kids</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Child;
