import React from "react";
import { Swipeable } from "react-native-gesture-handler";

const SwipeableGesture = ({
  leftActionHandler,
  rightActionHandler,
  swipeFromLeftOpen,
  swipeFromRightOpen,
  children,
}) => (
  <Swipeable
    renderLeftActions={leftActionHandler ? leftActionHandler : null}
    renderRightActions={rightActionHandler ? rightActionHandler : null}
    onSwipeableRightOpen={swipeFromRightOpen ? swipeFromRightOpen : null}
    onSwipeableLeftOpen={swipeFromLeftOpen ? swipeFromLeftOpen : null}
  >
    {children}
  </Swipeable>
);

export default SwipeableGesture;
