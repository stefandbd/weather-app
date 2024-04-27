import {InfoText} from '@screens/details-screen/details-screen.style';
import React, {ReactNode, useState} from 'react';
import {View, Text, TouchableWithoutFeedback, Animated} from 'react-native';

type CollapsibleProps = {
  children: ReactNode;
  title: string;
};

const CollapsibleView = ({title, children}: CollapsibleProps) => {
  const [collapsed, setCollapsed] = useState(true);
  const [animation] = useState(new Animated.Value(0));

  const toggleCollapse = () => {
    if (collapsed) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }).start();
    }
    setCollapsed(!collapsed);
  };

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, title.length / 1.4],
  });

  return (
    <View>
      {collapsed && (
        <TouchableWithoutFeedback onPress={toggleCollapse}>
          <View>
            <InfoText numberOfLines={2}>{title.replace(/\n/g, '')}</InfoText>
          </View>
        </TouchableWithoutFeedback>
      )}
      <Animated.View style={{height: heightInterpolate}}>
        <TouchableWithoutFeedback onPress={toggleCollapse}>
          {children}
        </TouchableWithoutFeedback>
      </Animated.View>
    </View>
  );
};

export default CollapsibleView;
