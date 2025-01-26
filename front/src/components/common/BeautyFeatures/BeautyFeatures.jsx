import { useEffect, useRef } from "react";
import beautyImage from "../../../assets/img/presentation/moisturizer.jpeg";
import WomanSvg from "../../../assets/icons/woman.svg?react";
import Hydration from "../../../assets/icons/hydration.svg?react";
import Natural from "../../../assets/icons/natural.svg?react";
import Natural2 from "../../../assets/icons/natural2.svg?react";
import EcoCare from "../../../assets/icons/eco-care.svg?react";
import Approved from "../../../assets/icons/approved.svg?react";
import Heading from "../../utils/Heading/heading";
import CustomButton from "../../utils/Button/Button";
import {
  CircleWrapper,
  Column1,
  Column2,
  Container,
  ContainerCol1,
  Feature,
  Features,
  Footer,
  ImageContainer,
  InnerCircle,
  RotatingSVG,
  Section,
  SVGContainer,
  Text,
  Title,
} from "./BeautyFeatures.styles";

const BeautyFeatures = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".feature").forEach((item, index) => {
              setTimeout(() => {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
              }, index * 300); // Adjust delay as needed
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <Section>
      <Container ref={sectionRef}>
        <Column1>
          <ContainerCol1>
            <CircleWrapper>
              <SVGContainer>
                <RotatingSVG
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 600 600"
                >
                  <defs>
                    <path
                      d="M50,300c0-137,113-250,250-250s250,113,250,250s-113,250-250,250S50,437,50,300"
                      id="textcircle"
                    />
                  </defs>
                  <text dy="0" textLength="640">
                    <textPath xlinkHref="#textcircle">
                      Experience True Nature
                    </textPath>
                  </text>
                </RotatingSVG>
              </SVGContainer>
              <InnerCircle>
                <ImageContainer>
                  <img src={beautyImage} alt="Natural Beauty Product" />
                </ImageContainer>
              </InnerCircle>
            </CircleWrapper>
          </ContainerCol1>
        </Column1>
        <Column2>
          <Title as="h2" $marginBottom="1.4rem">
            Experience True Nature
          </Title>
          <Heading
            as="h4"
            $marginBottom="1.4rem"
            $colorText="var(--primary-color-dark-4)"
          >
            Top-Quality Natural Care
          </Heading>
          <Text>
            Dive into our exquisite range of natural skincare products, designed
            to enhance your natural beauty. Enjoy the blend of purity and luxury
            with every use.
          </Text>

          <Features>
            <Feature className="feature">
              <Hydration />
              <div>
                <Heading as="h6" $colorText="var(--primary-color-dark-4)">
                  Instant Nourishment
                </Heading>
                <p>Feel the immediate hydration and softness.</p>
              </div>
            </Feature>
            <Feature className="feature">
              <Natural />
              <div>
                <Heading as="h6" $colorText="var(--primary-color-dark-4)">
                  Natural Extracts
                </Heading>
                <p>Harness the power of natural extracts for glowing skin.</p>
              </div>
            </Feature>
            <Feature className="feature">
              <EcoCare />
              <div>
                <Heading as="h6" $colorText="var(--primary-color-dark-4)">
                  Eco-Friendly
                </Heading>
                <p>Our products are kind to both your skin and the planet.</p>
              </div>
            </Feature>
            <Feature className="feature">
              <Natural2 />
              <div>
                <Heading as="h6" $colorText="var(--primary-color-dark-4)">
                  Chemical-Free
                </Heading>
                <p>Free from harmful chemicals, safe for daily use.</p>
              </div>
            </Feature>
            <Feature className="feature">
              <Approved />
              <div>
                <Heading as="h6" $colorText="var(--primary-color-dark-4)">
                  Dermatologist Approved
                </Heading>
                <p>Tested and approved by leading dermatologists.</p>
              </div>
            </Feature>
            <Feature className="feature">
              <WomanSvg />
              <div>
                <Heading as="h6" $colorText="var(--primary-color-dark-4)">
                  Gentle Formulas
                </Heading>
                <p>Perfect for all skin types, including sensitive skin.</p>
              </div>
            </Feature>
          </Features>
          <Footer>
            <CustomButton size="small">Get in Touch</CustomButton>
          </Footer>
        </Column2>
      </Container>
    </Section>
  );
};

export default BeautyFeatures;
