import React from 'react'
import {
  View, Text, ScrollView, StyleSheet,
  TouchableOpacity, TextInput, Image, Alert
} from 'react-native'
import { Form } from 'native-base'
import { connect } from 'react-redux'

// import actions
import actionsProfile from '../redux/actions/personal'

// import imagepicker
import ImagePicker from 'react-native-image-picker'

const options = {
  title: 'Select Avatar',
  chooseFromLibraryButtonTitle: 'Choose photo from library'
}

class EditProfile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      birthdate: '',
      email: '',
      password: '',
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


  // componentDidMount () {
  //   this.props.getPersonal(this.props.auth.token)
  //   const { name, email, password, birthdate } = this.state
  //   this.setState({
  //     name: this.props.profile.data[0].name,
  //     birthdate: this.props.profile.data[0].birthdate,
  //     email: this.props.profile.data[0].email,
  //     password: this.props.profile.data[0].password
  //   })
  //   console.log(this.state.name)
  // }

  // goToEdit = (e) => {
  //   e.preventDefault()
  //   const {name, birthdate, email, password} = this.state
  //   const data = {
  //     name, birthdate, email, password
  //   }
  //   const {token} = this.props.auth
  //   if (name === '' && birthdate === '' && email === '' ) {
  //     Alert.alert('Fill all column correctly')
  //   } else {
  //     this.props.updatePersonal(token, data)
  //     Alert.alert(
  //       'Success',
  //       'Profile has been updated',
  //       [
  //         {
  //           text: 'OK',
  //           onPress: () => this.props.navigation.navigate('Profile')
  //         }
  //       ]
  //     )
  //   }
  // }

  render () {
    // const { data, isLoading, isError, alertMsg } = this.props.profile
    return (
      <ScrollView style={styles.parent}>
         <View>
             {/* {!isLoading && !isError && data && data.map(o => ( */}
           <Form>
              <View style={styles.viewPhoto}>
                <Image style={styles.photoProfile} source={this.state.avatar === null ? {uri: 'https://reactjs.org/logo-og.png'} : this.state.avatar} />
                <TouchableOpacity onPress={this.takeFromLibrary}>
                    <Text style={styles.chosePhoto}>Choose photo profile</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.viewGroupInput}>
                {/* <View style={styles.viewInput}>
                    <DatePicker
                      defaultDate={new Date(2020 - 1 - 1)}
                      minimumDate={new Date(1900 - 12 - 12)}
                      maximumDate={new Date(2021 - 12 - 12)}
                      locale={'en'}
                      timeZoneOffsetInMinutes = {undefined}
                      modalTransparent = {false}
                      animationType={'fade'}
                      androidMode={'default'}
                      placeHolderText="Select date"
                      textStyle={{ color: 'green' }}
                      placeHolderTextStyle={{ color: '#d3d3d3' }}
                      onDateChange={this.setDate}
                      disabled={false}
                    />
                </View> */}
                <View style={styles.viewInput}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput style={styles.input} value='Wahyu Ramadan' />
                    {/* onChangeText={name => this.setState({ name })} */}
                </View>

                <View style={styles.viewInput}>
                    <Text style={styles.label}>Birthdate</Text>
                    <TextInput style={styles.input} value='2000-12-12' />
                    {/* onChangeText={birthdate => this.setState({ birthdate })} */}
                </View>

                <View style={styles.viewInput}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.input} value='wramadn1203@gmail.com' />
                    {/* onChangeText={email => this.setState({ email })} */}
                </View>

                <View style={styles.viewInput}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.input} value='123' secureTextEntry />
                    {/* onChangeText={password => this.setState({ password })} */}
                </View>
              </View>

              <TouchableOpacity style={styles.btn} >
              {/* onPress={this.goToEdit} */}
                <Text style={styles.textBtn}>Edit</Text>
              </TouchableOpacity>
           </Form>
             {/* ))} */}
         </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    padding: 20
  },
  viewPhoto: {
    //  borderWidth: 1,
    height: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  photoProfile: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginRight: 10
  },
  chosePhoto: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  viewGroupInput: {
    marginVertical: 20
  },
  viewInput: {
    marginVertical: 10
  },
  label: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 15
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'darkgray'
  },
  btn: {
    marginVertical: 25,
    //  borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'gray'
  },
  textBtn: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
})

// const mapStateToProps = state => ({
//   auth: state.auth,
//   profile: state.personal
// })

// const mapDispatchToProps = {
//   getPersonal: actionsProfile.getPersonal,
//   updatePersonal: actionsProfile.updatePersonal
// }

export default EditProfile
