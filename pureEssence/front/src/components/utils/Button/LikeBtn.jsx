import React from "react";
import styled from "styled-components";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toggleLike } from "../../../features/wishList/wishListSlice";

// HeartIcon and OutlineHeartIcon styled components
const HeartIcon = styled(FaHeart)`
  color: var(--primary-color-dark-1);
  z-index: 2;
`;

const OutlineHeartIcon = styled(FaRegHeart)`
  color: var(--primary-color-dark-1);
  z-index: 2;
`;

const LikeBtn = ({ product, WrapperComponent = "div", ...wrapperProps }) => {
  const dispatch = useDispatch();
  const likes = useSelector((state) => state.wishList.likes);
  const isLiked = likes[product.id] || false;
  const [liked, setLiked] = useState(isLiked);

  const handleLikedClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(toggleLike(product.id));
  };

  useEffect(() => {
    setLiked(isLiked);
  }, [isLiked]);

  // Create props to be passed to the wrapper component
  const wrapperPropsWithOnClick = {
    onClick: handleLikedClick,
    ...wrapperProps,
    children: liked ? <HeartIcon /> : <OutlineHeartIcon />,
  };

  // Use React.createElement for both valid elements and component types
  const wrapperElement = React.isValidElement(WrapperComponent)
    ? React.cloneElement(WrapperComponent, wrapperPropsWithOnClick)
    : React.createElement(WrapperComponent, wrapperPropsWithOnClick);

  return wrapperElement;
};

export default LikeBtn;
