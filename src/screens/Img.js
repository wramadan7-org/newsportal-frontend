import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

class Img extends Component {
  render () {
    return (
         <View style={{ width: 50, height: 50, flexDirection: 'row' }}>
            <View>
               <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://reactjs.org/logo-og.png' }} />
            </View>
            {/* <Text>HOALAAAA</Text> */}
         </View>
    )
  }
}

export default Img
