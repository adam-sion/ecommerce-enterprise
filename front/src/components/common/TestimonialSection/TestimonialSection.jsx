import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FaStar } from "react-icons/fa";
import "@splidejs/react-splide/css";
import Heading from "../../utils/Heading/heading";
import {
  Author,
  CarouselTextContainer,
  CarouselWrapper,
  ContentWrapper,
  ImageGrid,
  Particles,
  Stars,
  TestimonialImage,
  TestimonialSection,
  TestimonialText,
} from "./TestimonialSection.styles";
import { useRef, useState } from "react";

const testimonials = [
  {
    text: "Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id. Pellentesque habitant morbi tristique senectus.",
    author: "Alice Johnson",
    img: "/people/1.jpg",
  },
  {
    text: "Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id. Pellentesque habitant morbi tristique senectus.",
    author: "Sara Doe",
    img: "/people/2.jpg",
  },
  {
    text: "Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id. Pellentesque habitant morbi tristique senectus.",
    author: "Emma Smith",
    img: "/people/3.jpg",
  },
  {
    text: "Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id. Pellentesque habitant morbi tristique senectus.",
    author: "Mary Johnson",
    img: "/people/4.jpg",
  },
  {
    text: "Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id. Pellentesque habitant morbi tristique senectus.",
    author: "Emily Davis",
    img: "/people/5.jpg",
  },
  {
    text: "Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id. Pellentesque habitant morbi tristique senectus.",
    author: "Sophia Brown",
    img: "/people/6.jpg",
  },
];

const imagePositions = [
  { size: "100px", $top: "10%", $left: "10%" },
  { size: "150px", $top: "30%", $left: "50%" },
  { size: "80px", $top: "70%", $left: "20%" },
  { size: "120px", $top: "50%", $left: "70%" },
  { size: "100px", $top: "20%", $left: "80%" },
  { size: "140px", $top: "75%", $left: "60%" },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const splideRef = useRef(null);

  const handleMove = (index) => {
    setActiveIndex(index);
  };

  const handleImageClick = (index) => {
    if (splideRef.current) {
      splideRef.current.go(index);
    }
  };

  return (
    <TestimonialSection>
      <Particles>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Particles>
      <ContentWrapper>
        <Heading as="h4" $colorText="black">
          Testimonials
        </Heading>
        <Heading as="h2" $marginBottom="1.4rem">
          Our Happy Customers
        </Heading>
        <Stars>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </Stars>
        <CarouselWrapper>
          <Splide
            ref={splideRef}
            onMoved={(splide) => handleMove(splide.index)}
            options={{
              type: "loop",
              perPage: 1,
              autoplay: true,
              interval: 3000,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SplideSlide key={index}>
                <CarouselTextContainer>
                  <TestimonialText>{testimonial.text}</TestimonialText>
                  <Author>{testimonial.author}</Author>
                </CarouselTextContainer>
              </SplideSlide>
            ))}
          </Splide>
        </CarouselWrapper>
      </ContentWrapper>
      <ImageGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialImage
            key={index}
            src={testimonial.img}
            {...imagePositions[index % imagePositions.length]}
            $active={index === activeIndex ? "true" : "false"}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </ImageGrid>
    </TestimonialSection>
  );
};

export default Testimonials;
