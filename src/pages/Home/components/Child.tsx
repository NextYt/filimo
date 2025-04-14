import "../../../style/Home/section-child.css";
import Image from "../../../components/ImageComponent/Image";
import { CHILD_SECTION, ChildButton } from "../../../data/mockData";
import Button from "../../../components/Button/Button";

const Child = () => {
  const { title, description, mainImage, responsiveImage, buttons } =
    CHILD_SECTION;

  return (
    <section className="section-child">
      <div className="section-child-gradient"></div>
      <div className="section-child-def">
        <div className="child-layout">
          <div className="child-layout-img">
            <Image src={mainImage} alt="bg-kids" />
          </div>
          <div className="section-child-text">
            <span className="section-child-text-tilte">{title}</span>
            <div className="responsive-child-img">
              <Image src={responsiveImage} alt="tom-jerry" width="350px" />
            </div>
            <p className="section-child-text-describe">{description}</p>
            <div className="section-child-text-btn">
              {buttons.map((button: ChildButton, index: number) => (
                <Button key={index} className={button.className}>
                  {button.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Child;
