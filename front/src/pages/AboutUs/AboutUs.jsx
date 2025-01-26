import { FaLeaf, FaSeedling, FaWater, FaSun } from "react-icons/fa";
import Heading from "../../components/utils/Heading/heading";
import CustomButton from "../../components/utils/Button/Button";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import seo from "/aboutUs/seo.png";
import iOSDeveloper from "/aboutUs/iOSDeveloper.png";
import leadDesigner from "/aboutUs/leadDesigner.png";
import marketingDirector from "/aboutUs/marketingDirector.png";
import projectManager from "/aboutUs/projectManager.png";
import softwareEngineer from "/aboutUs/softwareEngineer.png";
import parallaxImage from "/aboutUs/parallax-image.jpeg";
import {
  ContentWrapper,
  CoreValuesGrid,
  FlexContainer,
  Header,
  HistorySection,
  IconWrapper,
  ImageColumn,
  OurVisionSection,
  Paragraph,
  Section,
  SocialIcons,
  TeamMemberCard,
  TextColumn,
  Timeline,
  TimelineItem,
  TimelineLine,
  ValueItem,
  ValueText,
} from "./AboutUs.styles";
import Breadcrumb2 from "../../components/common/Breadcrumb/Breadcrumb2";
import Testimonials from "../../components/common/TestimonialSection/TestimonialSection";

const AboutUs = () => {
  return (
    <>
      <Breadcrumb2 next="About Us" title="About Us" maxWidth="1600px" />
      <Section>
        <FlexContainer>
          <TextColumn>
            <Heading as="h1">Meet Our Team of Innovators</Heading>
            <p>
              We are a dynamic group of professionals passionate about
              delivering excellence. Our team comprises experts from various
              fields, all working together to create solutions that make a
              difference.
            </p>
            <CustomButton size="small">Join Our Team</CustomButton>
          </TextColumn>
          <ImageColumn>
            <TeamMemberCard>
              <img src={seo} alt="John Doe" />
              <h3>John Doe</h3>
              <p>CEO & Founder</p>
              <SocialIcons className="social-icons">
                <a href="#" aria-label="Twitter">
                  <FaXTwitter />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="#" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </SocialIcons>
            </TeamMemberCard>
            <TeamMemberCard>
              <img src={iOSDeveloper} alt="Ivan Mathews" />
              <h3>Ivan Mathews</h3>
              <p>iOS Developer</p>
              <SocialIcons className="social-icons">
                <a href="#" aria-label="Twitter">
                  <FaXTwitter />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="#" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </SocialIcons>
            </TeamMemberCard>
          </ImageColumn>
        </FlexContainer>
      </Section>

      <Section>
        <ContentWrapper>
          <Header>Our Core Values</Header>
          <Paragraph>
            At the heart of our company lies a commitment to integrity,
            innovation, and collaboration. These values are essential to
            delivering the best natural beauty products and services to our
            clients.
          </Paragraph>
          <CoreValuesGrid>
            <ValueItem>
              <IconWrapper>
                <FaLeaf size={50} />
              </IconWrapper>
              <ValueText>Integrity in everything we do</ValueText>
            </ValueItem>
            <ValueItem>
              <IconWrapper>
                <FaSeedling size={50} />
              </IconWrapper>
              <ValueText>Innovation driving our solutions</ValueText>
            </ValueItem>
            <ValueItem>
              <IconWrapper>
                <FaWater size={50} />
              </IconWrapper>
              <ValueText>Collaboration across all teams</ValueText>
            </ValueItem>
            <ValueItem>
              <IconWrapper>
                <FaSun size={50} />
              </IconWrapper>
              <ValueText>Customer satisfaction as our top priority</ValueText>
            </ValueItem>
          </CoreValuesGrid>
        </ContentWrapper>
      </Section>

      <HistorySection>
        <ContentWrapper>
          <Header>Our History</Header>
          <Paragraph>
            Since our inception, we have pushed the boundaries of what's
            possible. From a small startup to a global leader, our journey has
            been marked by unwavering dedication to quality, innovation, and
            customer satisfaction.
          </Paragraph>
          <Timeline>
            <TimelineLine />
            <TimelineItem>2005: Company founded in a small garage</TimelineItem>
            <TimelineItem>
              2010: Launched our first innovative product
            </TimelineItem>
            <TimelineItem>2015: Expanded to international markets</TimelineItem>
            <TimelineItem>2020: Achieved global leader status</TimelineItem>
            <TimelineItem>2023: Celebrated 18 years of excellence</TimelineItem>
          </Timeline>
        </ContentWrapper>
      </HistorySection>

      <Section>
        <Header>Meet More of Our Team</Header>
        <FlexContainer direction="row">
          <TeamMemberCard>
            <img src={marketingDirector} alt="Sarah Taylor" />
            <h3>Sarah Taylor</h3>
            <p>Marketing Director</p>
            <SocialIcons className="social-icons">
              <a href="#" aria-label="Twitter">
                <FaXTwitter />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </SocialIcons>
          </TeamMemberCard>
          <TeamMemberCard>
            <img src={leadDesigner} alt="Lulu Lee" />
            <h3>Lulu Lee</h3>
            <p>Lead Designer</p>
            <SocialIcons className="social-icons">
              <a href="#" aria-label="Twitter">
                <FaXTwitter />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </SocialIcons>
          </TeamMemberCard>
          <TeamMemberCard>
            <img src={projectManager} alt="Emily Davis" />
            <h3>Emily Davis</h3>
            <p>Project Manager</p>
            <SocialIcons className="social-icons">
              <a href="#" aria-label="Twitter">
                <FaXTwitter />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </SocialIcons>
          </TeamMemberCard>
          <TeamMemberCard>
            <img src={softwareEngineer} alt="Gertrude Brown" />
            <h3>Gertrude Brown</h3>
            <p>Software Engineer</p>
            <SocialIcons className="social-icons">
              <a href="#" aria-label="Twitter">
                <FaXTwitter />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </SocialIcons>
          </TeamMemberCard>
        </FlexContainer>
      </Section>

      <OurVisionSection
        bgImage={parallaxImage}
        bgImageStyle={{
          objectFit: "cover", // Cover to maintain the aspect ratio
          objectPosition: "top", // Center the image
        }}
      >
        <div>
          <ContentWrapper>
            <Header $color="var(--primary-color-light-2)">Our Vision</Header>
            <Paragraph $color="var(--primary-color-light-7)" $marginBottom="0">
              We aim to create innovative solutions that enhance lives and build
              a sustainable future. Our team is dedicated to pushing the
              boundaries of technology, design, and customer service to make a
              positive impact on the world.
            </Paragraph>
          </ContentWrapper>
        </div>
      </OurVisionSection>
      <Testimonials />
    </>
  );
};

export default AboutUs;
