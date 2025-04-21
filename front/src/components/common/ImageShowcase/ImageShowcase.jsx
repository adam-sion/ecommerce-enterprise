import { useEffect, useState } from "react";
import styled from "styled-components";
import { slideInUp } from "../../utils/Animations/animations";

// Styled Components
const ImgGallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const MainImageWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  border-radius: 12px;
  overflow: hidden;
  transition:
    transform 0.4s ease-in-out,
    box-shadow 0.4s ease-in-out;
  animation: ${slideInUp} 0.5s ease-in-out;
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Thumbnails = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const Thumbnail = styled.div`
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
  box-shadow: ${({ $isActive }) =>
    $isActive
      ? "0 0 8px rgba(233, 30, 99, 0.5)"
      : "0 2px 8px rgba(0, 0, 0, 0.1)"};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.5)};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    opacity: 0.8;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

const ImageShowcase = ({ images, product }) => {
  const [mainImage, setMainImage] = useState(images[0].image);
  const [activeThumbnailId, setActiveThumbnailId] = useState(images[0].id);

  const handleThumbnailSelect = (id) => {
    const selectedImage = images.find((img) => img.id === id);
    if (selectedImage) {
      setMainImage(selectedImage.image);
      setActiveThumbnailId(id);
    }
  };

  useEffect(() => {
    if (!images.find((img) => img.image === mainImage)) {
      setMainImage(images[0].image);
      setActiveThumbnailId(images[0].id);
    }
  }, [images, mainImage]);

  return (
    <ImgGallery>
      <MainImageWrapper key={mainImage}>
        <MainImage
          src={`${mainImage}`}
          alt="Main product"
        />
      </MainImageWrapper>
      
        <Thumbnails>
        {images.map((img) => (
          <Thumbnail
            key={img.id}
            $isActive={activeThumbnailId === img.id}
            onMouseEnter={() => handleThumbnailSelect(img.id)}
            onClick={() => handleThumbnailSelect(img.id)}
          >
            <img
              src={`${img.image}`}
              alt={`Thumbnail ${img.id}`}
            />
          </Thumbnail>
        ))}
      </Thumbnails>
    </ImgGallery>
  );
};

export default ImageShowcase;
