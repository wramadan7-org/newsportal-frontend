import React, { Component } from 'react'
import {
  View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView
} from 'react-native'

// import imagepicker
import ImagePicker from 'react-native-image-picker'

const options = {
  title: 'Select Avatar',
  chooseFromLibraryButtonTitle: 'Choose photo from library'
}

class CreateNews extends Component {

  constructor(props) {
    super(props)
    this.state ={
      avatar: null,
      pic: null
    }
  }

  takePicture = () => {
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response)

      if (response.didCancel) {
        console.log('user cancelled image picker')
      } else if (response.error) {
        console.log('Image error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        const source = {uri: response.uri}
        this.setState({avatar: source})
      }

    })
  }

  takeFromLibrary = () => {
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response)

      if (response.didCancel) {
        console.log('user cancelled image picker')
      } else if (response.error) {
        console.log('Image error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        const source = {uri: response.uri}
        this.setState({avatar: source})
      }
    })
  }

  render () {
    return (
        <View style={styles.parent}>
          <ScrollView>
            <View style={styles.header}>
              <Text style={styles.textHeader}>
                Create Your News
              </Text>
            </View>
            <View style={styles.viewTitle}>
              <Text>
                Title
              </Text>
              <TextInput style={styles.textTitle} />
            </View>
            <View style={styles.viewTextArea}>
              <Text>
                News
              </Text>
              <TextInput multiline={true} style={styles.textArea} />
            </View>
            <View style={styles.viewImgNews}>
              <Image source={this.state.avatar === null ? ' ' : this.state.avatar } style={styles.imgNews} />
            </View>
            <TouchableOpacity onPress={this.takeFromLibrary} style={styles.viewChosePicture}>
              <Text style={styles.textChoose}>Choose picture</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCreate}>
              <Text style={styles.textBtn}>CREATE</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    padding: 20
  },
  header: {
    height: 80
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'times new roman'
  },
  viewTitle: {
    marginVertical: 20,
    borderWidth: 1
  },
  textTitle: {
    // height: 10,
    borderBottomWidth: 1,
    fontFamily: 'times news roman',
    fontSize: 20
  },
  viewTextArea: {
    marginVertical: 20,
    borderWidth: 1,
    borderBottomWidth: 2,
    height: 200
  },
  textArea: {
    // borderBottomWidth: 1,
    fontSize: 15,
    fontFamily: 'times news roman',
    // height: 200,
    
  },
  viewChosePicture: {
    backgroundColor: 'grey',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100
  },
  textChoose: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  btnCreate: {
    height: 50,
    backgroundColor: 'grey',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  textBtn: {
    color: 'white',
    fontFamily: 'times new roman',
    fontSize: 20,
    fontWeight: 'bold'
  },
  viewImgNews: {
    marginVertical: 30
  },
  imgNews: {
    width: 100,
    height: 100
  }
})

export default CreateNews
