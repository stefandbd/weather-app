// Draggable.tsx
import React, {ReactNode} from 'react';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Sizes from '@theming/Sizes';

interface DraggableProps {
  children: ReactNode;
}

const Draggable: React.FC = ({children}: DraggableProps) => {
  const savedImgCoordinates = useSharedValue({x: 0, y: 0});
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const minTop = 0; // Minimum top position (100px from top)

  const panGesture = Gesture.Pan()
    .activateAfterLongPress(500)
    .onUpdate(e => {
      const nextTranslateY = e.translationY + savedImgCoordinates.value.y;
      translateY.value = Math.min(
        Math.max(nextTranslateY, minTop),
        Sizes.screen.height,
      );
      translateX.value = e.translationX + savedImgCoordinates.value.x;
    })
    .onEnd(e => {
      savedImgCoordinates.value = {
        x: translateX.value,
        y: translateY.value,
      };
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}, {translateY: translateY.value}],
  }));

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[animatedStyle]}>{children}</Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default Draggable;
