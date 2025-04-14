import { assets } from "../../../../assets/assets";
import Image from "../../../../components/ImageComponent/Image";
const SectionDetailList = ({ text }: { text: string }) => {
  return (
    <div className="section-detail-list-item">
      <Image
        src={assets.checkmark}
        className="text-green-500"
        alt="checkmark"
      />
      <span className="text-sm md:text-base">{text}</span>
    </div>
  );
};

export default SectionDetailList;
