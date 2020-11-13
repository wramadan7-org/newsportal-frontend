import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native'
import { Form } from 'native-base'
import { connect } from 'react-redux'

// import actions
import registerActions from '../redux/actions/auth'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      alertMsg: ''
    }
  }

  // doRegister = (e) => {
  //   e.preventDefault()
  //   const { isSuccess,alertMsg} = this.props.registerState
  //   const {name, email, password} = this.state
  //   if (name === '' && email === '' && password === '') {
  //     Alert.alert('Fill all column')
  //   } else  {
  //     const data = {
  //       name, email, password
  //     }
  //     // console.log('wawawaww',alertMsg)
  //     // console.log(isSuccess)
  //     this.props.goRegister(data)
  //   }
  // }

  // showAlert= () => {
  //   const {alertMsg} = this.props.registerState
  //   if (alertMsg !== this.state.alertMsg) {
  //     this.setState({alertMsg})
  //     Alert.alert(alertMsg)
  //     // console.log('alert')
  //   }
  // }

  // componentDidUpdate() {
  //   // console.log(this.props.registerState)
  //   this.showAlert()
  // }

  render () {
    return (
      <ScrollView style={styles.parent}>
         <Text style={styles.header}>REGISTER</Text>
         <View style={styles.viewGroupInput}>
            <Form>
            <View style={styles.viewInput}>
               <Text style={styles.label}>Name</Text>
               <TextInput placeholder='Name' />
               {/* onChangeText={name => this.setState({ name })} */}
            </View>

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

            <TouchableOpacity style={styles.link} onPress={() => this.props.navigation.navigate('Login')}>
               <Text style={styles.textLink}>Already have a account ?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
            {/* onPress={this.doRegister} */}
               <Text style={styles.textBtn}>REGISTER</Text>
            </TouchableOpacity>
            </Form>
         </View>
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
//   registerState: state.register
// })

// const mapDispatchToProps = {
//   goRegister: registerActions.register
// }

export default Register
