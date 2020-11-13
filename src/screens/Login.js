import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Alert } from 'react-native'
import { Form } from 'native-base'

// import action
import loginActions from '../redux/actions/auth'

// import connect
import { connect } from 'react-redux'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      alertMsg: ''
    }
  }

  // componentDidMount () {
  //   console.log('login',this.props.auth)
  // }

  // doLogin = (e) => {
  //   e.preventDefault()
  //   const {email, password} = this.state
  //   const data = {
  //     email, password
  //   }
  //   if (email === '') {
  //     Alert.alert('Email wrong')
  //   } else if (password === '') {
  //     Alert.alert('Password wrong')
  //   } else {
  //     this.props.goLogin(data)
  //   }

  // }

  // showAlert= () => {
  //   const {alertMsg} = this.props.auth
  //   if (alertMsg !== this.state.alertMsg) {
  //     this.setState({alertMsg})
  //     Alert.alert(alertMsg)
  //     // console.log('alert')
  //   }
  // }

  // componentDidUpdate() {
  //   this.showAlert()
  // }

  render () {
    return (
      <ScrollView style={styles.parent}>
         {/* <ScrollView> */}
            <Text style={styles.header}>LOGIN</Text>
            <View style={styles.viewGroupInput}>
              <Form>
               <View style={styles.viewInput}>
                  <Text style={styles.label}>Email</Text>
                  <TextInput placeholder='Email' />
                  {/* onChangeText={email => this.setState({ email })} */}
               </View>

               <View style={styles.viewInput}>
                  <Text style={styles.label}>Password</Text>
                  <TextInput placeholder='Password' secureTextEntry />
                  {/* onChangeText={password => this.setState({ password })} */}
               </View>

               <TouchableOpacity style={styles.link} >
               {/* onPress={() => this.props.navigation.navigate('Register')} */}
                  <Text style={styles.textLink}>Forgot your password ?</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Home')}>
               {/* onPress={this.doLogin} */}
                  <Text style={styles.textBtn}>LOGIN</Text>
               </TouchableOpacity>
               </Form>
            </View>
         {/* </ScrollView> */}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    padding: 10
  },
  header: {
    fontSize: 60,
    fontWeight: 'bold'
  },
  viewGroupInput: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 20
  },
  viewInput: {
    height: 75,
    // elevation: 1,
    //  borderWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    borderRadius: 3,
    padding: 5,
    justifyContent: 'center',
    marginVertical: 20
  },
  label: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 12
  },
  link: {
    alignItems: 'flex-end'
  },
  textLink: {
    fontSize: 15
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
    fontWeight: 'bold'
  }
})

// const mapStateToProps = state => ({
//   auth: state.auth
// })

// const mapDispatchToProps = {
//   goLogin: loginActions.login
// }

export default Login
