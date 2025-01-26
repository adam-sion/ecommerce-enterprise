import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { ImCompass } from "react-icons/im";
import CreditCards from "../../utils/CreditCards/CreditCards";
import ShareSocialMediaIcons from "../../utils/ShareSocialMediaIcons/ShareSocialMediaIcons";
import Row from "../../utils/Row/Row";
import Newsletter from "../Newsletter/Newsletter";
import LogoWebsite from "../../../assets/img/logo-website/pureEssence-logo1.png";
import {
  Container,
  FooterWrapper,
  IconLogo,
  Logo,
  SectionColumn,
  SpanDeveloper,
  SubFooter,
} from "./Footer.styles";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <FooterWrapper>
      <Container>
        <Newsletter />

        <Row type="horizontal" $justifyContent="space-around" $flexWrap>
          <SectionColumn>
            <h3>RESOURCES</h3>
            <ul>
              <li>
                <Link to="/account">
                  <ImCompass /> My account
                </Link>
              </li>
              <li>
                <Link to="/wishlist">
                  <ImCompass /> Wishlist
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <ImCompass /> Cart
                </Link>
              </li>
              <li>
                <Link to="/">
                  <ImCompass /> Support
                </Link>
              </li>
            </ul>
          </SectionColumn>

          <SectionColumn>
            <h3>QUICK LINKS</h3>
            <ul>
              <li>
                <Link to="/">
                  <ImCompass /> Our Story
                </Link>
              </li>
              <li>
                <Link to="/">
                  <ImCompass /> Features
                </Link>
              </li>
              <li>
                <Link to="/">
                  <ImCompass /> Project Detail
                </Link>
              </li>
              <li>
                <Link to="/">
                  <ImCompass /> Points of Sale
                </Link>
              </li>
            </ul>
          </SectionColumn>
          <SectionColumn>
            <h3>ABOUT US</h3>
            <ul>
              <li>
                <Link to="/about-us">
                  <ImCompass /> Company Info
                </Link>
              </li>
              <li>
                <Link to="/">
                  <ImCompass /> Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/">
                  <ImCompass /> Privacy Policy
                </Link>
              </li>
            </ul>
          </SectionColumn>
          <SectionColumn>
            <h3>CONTACT INFORMATION</h3>
            <ul>
              <li className="contact-info">
                <FaPhone color="black" /> +1 (347) 927-396
              </li>
              <li className="contact-info">
                <FaEnvelope color="black" /> support@example.com
              </li>
            </ul>
            <p>
              123 Main Street, Anytown, USA
              <br />
              Zip: 12345
            </p>
          </SectionColumn>
        </Row>

        <IconLogo
          type="horizontal"
          $justifyContent="space-between"
          $alignItems="center"
          $flexWrap
          $flexGap="1rem"
          style={{ marginTop: "2rem" }}
        >
          <Logo>
            <Link to="/">
              <img src={LogoWebsite} alt="logo" />
            </Link>
          </Logo>
          <div>
            <ShareSocialMediaIcons iconColor="red" />
          </div>
        </IconLogo>

        <SubFooter>
          <p>
            © {currentYear} <SpanDeveloper>Koshegio-Themes</SpanDeveloper>. All
            Rights Reserved.
          </p>
          <CreditCards />
        </SubFooter>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
