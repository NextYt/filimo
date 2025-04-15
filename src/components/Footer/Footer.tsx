import { assets } from "../../assets/assets";
import Button from "../Button/Button";
import Image from "../ImageComponent/Image";
import { useContentSelector } from "../../context";
import "../../style/footer.css";

const Footer = () => {
  // Using only content selector for data sharing
  const footerLinks = useContentSelector(context => context.state.footerLinks || []);
  const socialMedia = useContentSelector(context => context.state.socialMedia || []);

  // Function to handle scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer>
      <div className="footer-link">
        <ul>
          <li className="footer-link-item arrow-top-footer scroll-top">
            <Button onClick={handleScrollToTop}>
              <Image src={assets.arrowTop} alt="Scroll to top" />
            </Button>
          </li>
          
          {/* Main footer links */}
          {footerLinks.map((link, index) => (
            <li key={index} className={link.className || ''}>
              <Button ButtonElement="a" href={link.href}>
                {link.icon && <Image src={link.icon} alt={link.text} />}
                <span>{link.text}</span>
              </Button>
              
              {/* Dropdown menu if present */}
              {link.dropdownLinks && link.dropdownLinks.length > 0 && (
                <div className="hidden-menu hidden-menu-footer">
                  <ul className="hidden-menu-nav-footer">
                    {link.dropdownLinks.map((dropdownLink, dropdownIndex) => (
                      <li key={dropdownIndex} className="hidden-menu-item-footer">
                        <Button ButtonElement="a" href={dropdownLink.href}>
                          <span>{dropdownLink.text}</span>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Social media section */}
      <div className="social-media">
        <ul>
          <li className="footer-link-item dropDown-footer dropDown-footer-link">
            <Button ButtonElement="a" href="">
              <Image
                src={assets.caretDown}
                className="w-6 h-6 text-[#959595]"
                alt="arrow-top-svg"
              />
              <div className="footer-social-media-responsive">
                {socialMedia.slice(0, 4).map((social, index) => (
                  <Image key={index} src={social.icon} alt={social.name} />
                ))}
              </div>
              <span className="social-media-footer-920">Social Media</span>
            </Button>
            {/* Social media dropdown menu */}
            <div className="hidden-menu hidden-menu-footer">
              <ul className="hidden-menu-nav-footer">
                {socialMedia.map((social, index) => (
                  <li key={index} className="hidden-menu-item hidden-menu-item-footer">
                    <Button ButtonElement="a" href={social.href}>
                      <Image src={social.icon} alt={social.name} />
                      <span>{social.name}</span>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
