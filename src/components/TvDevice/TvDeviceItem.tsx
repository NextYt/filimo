import { TvDevice } from '../../data/mockData';
import Image from '../../components/ImageComponent/Image';

interface TvDeviceItemProps {
  tvDevice: TvDevice;
  isLastItem?: boolean;
}

const TvDeviceItem = ({ tvDevice, isLastItem = false }: TvDeviceItemProps) => {
  const { icon, title, description, className } = tvDevice;
  
  return (
    <div className="section-user" style={isLastItem ? { marginBottom: '64px' } : {}}>
      <div className={`pc-icon ${className || ''}`}>
        <Image src={icon} alt={title} />
      </div>
      <div className="section-text">
        <span className="section-pc-title"> {title}</span>
        <span className="section-pc-describe">
          {description}
        </span>
      </div>
    </div>
  );
};

export default TvDeviceItem;