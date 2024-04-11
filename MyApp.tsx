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
      <Text >Hello World !!</Text>
      {/* <Text>Hello World !!</Text>
      <Text>Hello World !!</Text> */}
    </View>

  )


}

const styles = StyleSheet.create(


  {

    container: {

      flex: 1,
      alignItems: 'flex-end'
    }

  }
)


export default MyApp;