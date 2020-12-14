import React, { Component } from 'react'
import {
  View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView
} from 'react-native'

// import imagepicker
import ImagePicker from 'react-native-image-picker'
import Animated from 'react-native-reanimated'
import BottomSheet from 'reanimated-bottom-sheet'

const options = {
  title: 'Select Avatar',
  chooseFromLibraryButtonTitle: 'Choose photo from library'
}

class EditNews extends Component {

  constructor(props) {
    super(props)
    this.state ={
      title: '',
      news: '',
      avatar: null
    }
  }

  renderContent = () => {
    <View style={{
      backgroundColor: 'white',
      padding: 16,
      height: 450
    }}>
      <Text>Swip down to close</Text>
    </View>
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

   //  const sheetRef = React.createRef(null)
   //  console.log(sheetRef)

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
              <TextInput style={styles.textTitle} value={this.state.title} onChangeText={title => this.setState({title})} />
            </View>
            <View style={styles.viewTextArea}>
              <Text>
                News
              </Text>
              <TextInput multiline={true} style={styles.textArea} value={this.state.news} onChangeText={news => this.setState({news})} />
            </View>
            {this.state.avatar === null ? (
              <View />
            ) : (
              <View style={styles.viewImgNews}>
                <Image source={this.state.avatar} style={styles.imgNews} />
            </View>
            )}
            <TouchableOpacity onPress={this.takeFromLibrary} style={styles.viewChosePicture}>
              <Text style={styles.textChoose}>Choose picture</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnEdit}>
              <Text style={styles.textBtn}>EDIT</Text>
            </TouchableOpacity>
            {/* <BottomSheet
              ref={sheetRef}
              snapPoints={[450, 300, 0]}
              borderRadius={10}
              renderContent={this.renderContent}
            /> */}
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
  btnEdit: {
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

export default EditNews
