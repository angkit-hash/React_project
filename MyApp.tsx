import React from 'react'

import {
  View,
  Text,
  SafeAreaView,
  useColorScheme,
  StyleSheet
} from 'react-native'

function MyApp(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  return (


    <View style={styles.container}>
      <Text style={ isDarkMode? styles.whiteText : styles.darkText}>Complete the basic setup</Text>
    </View>

  )


}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    alignItems: 'flex-end',
    justifyContent : 'center'
  },
  whiteText: {

    color: '#FFFFFF',
  },
  darkText: {

    color: '#000000',
  }
}
)


export default MyApp;