import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseProductQtity,
  decreaseProductQtity,
  getCurrentQtityById,
} from "../../../features/shoppingCart/shoppingCartSlice";
import { Button, Container, Display, Icon } from "./Counter.styles";

const Counter = ({
  size = "normal",
  color,
  productId,
  quantity,
  onQuantityChange,
}) => {
  const dispatch = useDispatch();
  const currentQtity = useSelector(getCurrentQtityById(productId)) || 1; 
  const [localCount, setLocalCount] = useState(quantity || 1);

  useEffect(() => {
    if (quantity !== undefined) {
      setLocalCount(quantity);
    }
  }, [quantity]);

  const handleCountChange = (newCount) => {
    if (onQuantityChange) {
      onQuantityChange(newCount);
    } else {
      if (newCount > currentQtity) {
        dispatch(increaseProductQtity(productId));
      } else {
        dispatch(decreaseProductQtity(productId));
      }
    }
  };

  const count = quantity !== undefined ? localCount : currentQtity;

  return (
    <Container>
      <Button
        size={size}
        $color={color}
        onClick={() => handleCountChange((count)=> count = Math.max(1, count-1))}
      >
        <Icon size={size}>
          <FaChevronLeft />
        </Icon>
      </Button>
      <Display size={size} $color={color}>
        {count}
      </Display>
      <Button
        size={size}
        $color={color}
        onClick={() => handleCountChange(count + 1)}
      >
        <Icon size={size}>
          <FaChevronRight />
        </Icon>
      </Button>
    </Container>
  );
};

export default Counter;

/**
 * A customizable counter with increment/decrement buttons.
 * Supports "small" and "normal" sizes.
 *
 * Props:
 * - size: The size of the counter ("small" or "normal").
 * - color: The color of the counter buttons.
 * - productId: (Optional) If provided, the counter will use Redux to manage state globally.
 * - quantity: (Optional) Initial quantity for local state management.
 * - onQuantityChange: (Optional) Callback function to handle quantity changes in local mode.
 *
 * Example Usage:
 *
 * // Global Mode (using Redux)
 * <Counter color="black" size="small" productId="123" />
 *
 * // Local Mode (without Redux)
 * <Counter color="black" size="normal" quantity={5} onQuantityChange={setCounter} />
 */
