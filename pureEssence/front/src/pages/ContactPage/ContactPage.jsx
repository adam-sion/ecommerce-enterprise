import styled from "styled-components";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";
import Heading from "../../components/utils/Heading/heading";
import CustomButton from "../../components/utils/Button/Button";
import {
  AiOutlineClockCircle,
  AiOutlineEnvironment,
  AiOutlinePhone,
} from "react-icons/ai";

// Styled Components
const ContactPageContainer = styled.section`
  background: linear-gradient(135deg, var(--light-grey-color), #fff);
  position: relative;
  margin-bottom: var(
    --spacing-xxxl
  ); // Adding extra bottom padding for a more balanced layout
`;

const Wrapper = styled.div`
  max-width: var(--max-width-screen);
  margin: 5rem auto;
  padding: 0 var(--spacing-md);

  @media (max-width: 768px) {
    padding: 0 var(--spacing-sm);
  }
`;

const FlexContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: var(--spacing-xxl);
  margin-bottom: var(--spacing-xxl);

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-lg);
  }
`;

const ContactFormContainer = styled.div`
  flex: 1;
  background: white;
  border-radius: var(--border-radius-medium);
  z-index: 2;
  max-width: 35rem;
  margin-bottom: 3.5rem;
`;

const Form = styled.form`
  margin: 0 auto;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-medium);
  font-family: var(--font-primary);

  p {
    font-size: var(--font-size-body);
    color: var(--dark-grey-color);
    margin-bottom: var(--spacing-lg);
  }
`;

const InfoArea = styled.div`
  flex: 1;
  background: white;
  border-radius: var(--border-radius-medium);
  color: var(--dark-grey-color);
  max-width: 35rem;
  padding: var(--spacing-lg);
  @media (max-width: 1200px) {
    width: 100%;
  }
  .info-item {
    display: flex;
    align-items: center;
    margin-bottom: var(--spacing-md);
    font-size: var(--font-size-body);
    font-family: var(--font-secondary);

    svg {
      margin-right: var(--spacing-md);
      color: var(--primary-color-dark-3);
      font-size: var(--font-size-h5);
    }

    span {
      color: var(--text-color);
    }
  }

  @media (max-width: 768px) {
    margin-bottom: var(--spacing-lg);
  }
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 300px;
  margin: var(--spacing-xl) 0;
  border-radius: var(--border-radius-medium);
  overflow: hidden;
  box-shadow: var(--shadow-large);

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  margin-bottom: var(--spacing-md);
  border: none;
  border-bottom: 2px solid var(--light-grey-color);
  font-size: var(--font-size-body);
  color: var(--text-color);
  background: none;
  transition: border-color var(--transition-quick);

  &:focus {
    outline: none;
    border-bottom: 2px solid var(--primary-color);
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  margin-bottom: var(--spacing-md);
  border: none;
  border-bottom: 2px solid var(--light-grey-color);
  font-size: var(--font-size-body);
  color: var(--text-color);
  background: none;
  height: 150px;
  resize: none;
  transition: border-color var(--transition-quick);

  &:focus {
    outline: none;
    border-bottom: 2px solid var(--primary-color);
  }
`;
const AdditionalInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xxl);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-large);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  position: relative;

  .info-block {
    width: 100%; /* Ensure it takes the full width of the grid cell */
    max-width: 100%; /* Prevent it from exceeding the grid cell's width */
    padding: var(--spacing-lg);
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(10px);
    border-radius: var(--border-radius-medium);
    box-shadow: var(--shadow-small);
    display: flex;
    align-items: center;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
    position: relative;
    margin: 0 auto;

    @media (max-width: 780px) {
      width: 100%;
      max-width: 22rem;
      display: block;
    }

    .icon-circle {
      top: -10px;
      left: -30px;
      z-index: -1;
      position: absolute;
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background: var(--primary-color-dark-3);
      box-shadow: 0 0 0 0 var(--primary-color);
      transition: box-shadow 0.5s ease;

      svg {
        color: white;
        font-size: 1.5rem;
      }
    }

    &:hover .icon-circle {
      box-shadow: 0 0 20px 5px var(--primary-color);
    }

    span {
      margin-left: var(--spacing-lg);
      color: var(--text-color);
      font-size: var(--font-size-body);
      line-height: 1.8;
      flex: 1;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);

    .info-block {
      padding: var(--spacing-md);
      text-align: center;
      flex-direction: column;

      .icon-circle {
        margin-bottom: var(--spacing-md);
      }

      span {
        margin-left: 0;
        font-size: var(--font-size-body-sm);
      }
    }
  }
`;

// Main Component
const ContactPage = () => {
  const latitude = 37.7749;
  const longitude = -122.4194;
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.1242362191035!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1619430307215!5m2!1sen!2sin`;

  return (
    <ContactPageContainer>
      <Breadcrumb
        next="Shop"
        imageUrl="/breadcrumb/natural.jpeg"
        title="Contact"
      />
      <Wrapper>
        <FlexContent>
          <ContactFormContainer>
            <Form>
              <Heading as="h2">Contact Form</Heading>
              <p>
                Feel free to contact us anytime. We will get back to you as soon
                as we can!
              </p>
              <StyledInput type="text" placeholder="Name" />
              <StyledInput type="email" placeholder="Email" />
              <StyledTextarea placeholder="Message"></StyledTextarea>
              <CustomButton size="extra-small">Send Message</CustomButton>
            </Form>
          </ContactFormContainer>
          <InfoArea>
            <Heading as="h2">Contact Information</Heading>
            <div className="info-item">
              <IoIosCall />
              <span>+33 123 456 789</span>
            </div>
            <div className="info-item">
              <MdEmail />
              <span>info@contactme.me</span>
            </div>
            <div className="info-item">
              <FaLocationPin />
              <span>123 Main Street, Anytown, USA Zip: 12345</span>
            </div>
          </InfoArea>
        </FlexContent>
        <MapWrapper>
          <iframe title="Map" src={mapUrl} loading="lazy"></iframe>
        </MapWrapper>

        <AdditionalInfo>
          <div className="info-block">
            <div className="icon-circle">
              <AiOutlineClockCircle />
            </div>
            <div>
              <Heading as="h3">Opening Hours</Heading>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          <div className="info-block">
            <div className="icon-circle">
              <AiOutlineEnvironment />
            </div>
            <div>
              <Heading as="h3">Multiple Locations</Heading>
              <p>Main Office: 123 Main Street, Anytown, USA</p>
              <p>Branch Office: 456 Another St, Sometown, USA</p>
            </div>
          </div>
          <div className="info-block">
            <div className="icon-circle">
              <AiOutlinePhone />
            </div>
            <div>
              <Heading as="h3">Quick Contact</Heading>
              <p>Email: support@contactme.me</p>
              <p>Phone: +33 123 456 789</p>
            </div>
          </div>
        </AdditionalInfo>
      </Wrapper>
    </ContactPageContainer>
  );
};

export default ContactPage;
