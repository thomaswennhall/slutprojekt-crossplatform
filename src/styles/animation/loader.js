import React, { useRef } from 'react'
import { Animated } from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Easing } from 'react-native-reanimated'
const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Loader = ({ size }) => {
  const rotate = new Animated.Value(0)

  //rotate.setValue(45)

  Animated.loop(
    Animated.sequence([
      Animated.spring(rotate, {
        toValue: 1,
        duration: 600,
        easing: Easing.elastic,
        useNativeDriver: true
      }),
      Animated.timing(rotate, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true
      })
    ])
  ).start()

  return (
    <Animated.View
      style={{
        flex: 1,
        transform: [
          {
            rotate
          }
        ]
      }}
    >
      <StyledView>
        <Icon name="hammer" style={{ fontSize: size || 24 }} />
      </StyledView>
    </Animated.View>
  )
}
