import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import AsyncStorage from '@react-native-async-storage/async-storage'

import userImg from '../assets/gustavo.jpeg'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function Header() {
  const [userName, setUserName] = useState<string>()

  async function loadStorageUserName() {
    const user = await AsyncStorage.getItem('@plantmanager:user')
    setUserName(user || '')
  }

  useEffect(() => {
    loadStorageUserName()
  }, [userName])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>

      <Image source={userImg} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
    marginTop: getStatusBarHeight()
  },

  greeting: {
    fontSize: 32,
    fontFamily: fonts.text,
    color: colors.heading
  },

  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    lineHeight: 40,
    color: colors.heading
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 40
  }
})
