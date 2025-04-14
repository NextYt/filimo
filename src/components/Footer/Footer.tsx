import { assets } from "../../assets/assets";
import Button from "../Button/Button";
import Image from "../ImageComponent/Image";
import "../../style/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-link">
        <ul>
          <li className="footer-link-item arrow-top-footer scroll-top">
            <Image src={assets.arrowTop} alt="arrow-top-svg" />
          </li>
          <li className="footer-link-item">
            <Button ButtonElement="a" href="">
              <Image src={assets.arrowTop} alt="arrow-top-svg" />
            </Button>
          </li>
          <li className="footer-link-item">
            <Button ButtonElement="a" href="">
              <span>Watch on TV</span>
            </Button>
          </li>
          <li className="footer-link-item">
            <Button ButtonElement="a" href="">
              <span>Applications</span>
            </Button>
          </li>
          <li className="footer-link-item footer-disapear-link">
            <Button ButtonElement="a" href="">
              <span>Contact Us</span>
            </Button>
          </li>
          <li className="footer-link-item footer-disapear-link">
            <Button ButtonElement="a" href="">
              <span>Terms</span>
            </Button>
          </li>
          <li className="footer-link-item footer-disapear-link">
            <Button ButtonElement="a" href="">
              <span>Support</span>
            </Button>
          </li>
          <li className="footer-link-item footer-disapear-link">
            <Button ButtonElement="a" href="">
              <span>Join Us</span>
            </Button>
          </li>
          <li className="footer-link-item footer-disapear-link">
            <Button ButtonElement="a" href="">
              <span>Advertise on Filimo</span>
            </Button>
          </li>
          <li className="footer-link-item footer-disapear-link">
            <Button ButtonElement="a" href="">
              <span>Shop</span>
            </Button>
          </li>
          <li className="footer-link-item dropDown-footer dropDown-footer-link footer-disapear-link">
            <Button ButtonElement="a" href="">
              <Image
                src={assets.caretDown}
                className="w-6 h-6 text-[#959595]"
                alt="arrow-top-svg"
              />
              <span>Other Links</span>
            </Button>
            {/* <!--hidden menu--> */}
            <div className="hidden-menu hidden-menu-footer">
              <ul className="hidden-menu-nav-footer">
                <li className="hidden-menu-item hidden-menu-item-footer">
                  <Button ButtonElement="a" href="">
                    Logo
                  </Button>
                </li>
                <li className="hidden-menu-item-footer">
                  <Button ButtonElement="a" href="">
                    Download Movies and Series
                  </Button>
                </li>
              </ul>
            </div>
          </li>
          <li className="footer-link-item dropDown-footer dropDown-footer-link footer-appear-link">
            <Button ButtonElement="a" href="">
              <Image
                src={assets.caretDown}
                className="w-6 h-6 text-[#959595]"
                alt="arrow-top-svg"
              />
              <span>Other Links</span>
            </Button>
            {/* <!--hidden menu--> */}
            <div className="hidden-menu hidden-menu-footer">
              <ul className="hidden-menu-nav-footer">
                <li className="hidden-menu-item hidden-menu-item-footer">
                  <Button ButtonElement="a" href="">
                    Logo
                  </Button>
                </li>
                <li className="hidden-menu-item-footer">
                  <Button ButtonElement="a" href="">
                    Download Movies and Series
                  </Button>
                </li>
                <li className="hidden-menu-item-footer">
                  <Button ButtonElement="a" href="">
                    <span>Contact Us</span>
                  </Button>
                </li>
                <li className="hidden-menu-item-footer">
                  <Button ButtonElement="a" href="">
                    <span>Terms</span>
                  </Button>
                </li>
                <li className="hidden-menu-item-footer">
                  <Button ButtonElement="a" href="">
                    <span>Support</span>
                  </Button>
                </li>
                <li className="hidden-menu-item-footer">
                  <Button ButtonElement="a" href="">
                    <span>Join Us</span>
                  </Button>
                </li>
                <li className="hidden-menu-item-footer">
                  <Button ButtonElement="a" href="">
                    <span>Advertise on Filimo</span>
                  </Button>
                </li>
                <li className="hidden-menu-item-footer">
                  <Button ButtonElement="a" href="">
                    <span>Shop</span>
                  </Button>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
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
                <Image src={assets.youtube} />
                <Image src={assets.telegram} />
                <Image src={assets.twitter} />
                <Image src={assets.instagram} />
              </div>
              <span className="social-media-footer-920">Social Media</span>
            </Button>
            {/* <!--hidden menu--> */}
            <div className="hidden-menu hidden-menu-footer">
              <ul className="hidden-menu-nav-footer">
                <li className="hidden-menu-item hidden-menu-item-footer">
                  <Button ButtonElement="a" href="">
                    <Image src={assets.youtube} />
                    <span>Youtube</span>
                  </Button>
                </li>
                <li className="hidden-menu-item hidden-menu-item-footer">
                  <Button ButtonElement="a" href="">
                    <Image src={assets.telegram} />
                    <span>Telegram</span>
                  </Button>
                </li>
                <li className="hidden-menu-item hidden-menu-item-footer">
                  <Button ButtonElement="a" href="">
                    <Image src={assets.twitter} />
                    <span>Twitter</span>
                  </Button>
                </li>
                <li className="hidden-menu-item-footer hidden-menu-item-footer">
                  <Button ButtonElement="a" href="">
                    <Image src={assets.instagram} />
                    <span>Instagram</span>
                  </Button>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
