import { DeviceItem as DeviceItemType } from '../../../../types/mockdata';
import Image from '../../../../components/ImageComponent/Image';

interface DeviceItemProps {
  device: DeviceItemType;
  className?: string;
}

const DeviceItem = ({ device, className = '' }: DeviceItemProps) => {
  const { icon, title, description } = device;

  return (
    <div className={`section-user ${className}`}>
      <div className={`pc-icon ${title.toLowerCase().includes('mobile') ? 'laptob-icon' : ''}`}>
        <Image src={icon} alt={title} />
      </div>
      <div className="section-text">
        <span className="section-pc-title">{title}</span>
        <span className="section-pc-describe">{description}</span>
      </div>
    </div>
  );
};

export default DeviceItem;