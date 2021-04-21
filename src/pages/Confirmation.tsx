import React from 'react'
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'

import { SafeAreaView } from '../components/SafeAreaView'
import { Button } from '../components/Button'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function Confirmation() {
  return (
    <SafeAreaView>
      <View style={styles.content}>
        <Text style={styles.emoji}>😄</Text>

        <Text style={styles.title}>Prontinho</Text>

        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas {'\n'}
          plantinhas com muito cuidado.
        </Text>

        <View style={styles.footer}>
          <Button title="Começar" />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 30
  },

  emoji: {
    fontSize: 78
  },

  title: {
    fontSize: 22,
    fontFamily: fonts.heading,
    lineHeight: 38,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 15
  },

  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    textAlign: 'center',
    paddingVertical: 10,
    color: colors.heading
  },

  footer: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 20
  }
})
