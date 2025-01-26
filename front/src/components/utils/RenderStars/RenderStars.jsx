import {
  TiStarOutline,
  TiStarHalfOutline,
  TiStarFullOutline,
} from "react-icons/ti";
function RenderStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<TiStarFullOutline key={`full_${i}`} />);
  }

  if (halfStar === 1) {
    stars.push(<TiStarHalfOutline key="half" />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<TiStarOutline key={`empty_${i}`} />);
  }

  return stars;
}
export default RenderStars;
