import React, { ReactNode } from 'react'
import {
  Platform,
  SafeAreaView as NativeSafeAreaView,
  StatusBar,
  StyleSheet
} from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

interface SafeAreaViewProps {
  children: ReactNode
}

export function SafeAreaView({ children, ...rest }: SafeAreaViewProps) {
  return (
    <NativeSafeAreaView style={styles.container} {...rest}>
      {children}
    </NativeSafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})
