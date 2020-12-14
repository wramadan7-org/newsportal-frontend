import React from 'react'
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  Image
} from 'react-native'

// import actions
// import actionsHome from '../redux/actions/home'

// import moment
// import momet from 'moment'

// import redux
// import { connect } from 'react-redux'

class MyNews extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       data: []
//     }
//   }

  // componentDidMount () {
  //   this.props.getNews()
  //   console.log(this.props.news)
  //   const { data } = this.props.news
  // }

  render () {
    // const { data, isLoading, isError, alertMsg } = this.props.news
    return (
      <ScrollView style={styles.parent}>
         {/* <ScrollView> */}
            {/* {data.length > 0 && data.map(o => ( */}
               <TouchableOpacity style={styles.cardNews} onPress={() => this.props.navigation.navigate('Detail') }>
                  <View style={styles.viewNews}>
                     <View style={styles.viewTextNews}>
                        <Text style={styles.titleNews}>Warga Seleman Dituding Mencuri Rokok dan Digepuki Warga Hingga Babak Belur Bobrok PolPolannn</Text>
                        {/* <Text style={styles.subtitle}>
                           Jdwndawdawuhdawuidaw daiudhawudhaw daiuwudhauwdh dadhadha ||dwadhauidhuiadhwuidhuiawh alala
                        </Text> */}
                        <View style={styles.viewCreateAndDate}>
                           <View>
                              <Text style={styles.createdBy}>
                                 Wahyu Ramadan
                              </Text>
                           </View>
                           <View>
                              <Text style={styles.dot}> . </Text>
                           </View>
                           <View>
                              <Text style={styles.dateCreate}>
                                 12 Maret
                              </Text>
                           </View>
                        </View>
                     </View>
                     <View style={styles.viewImg}>
                        <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={styles.imgNews} />
                        <View style={styles.actions}>
                           <TouchableOpacity onPress={() => this.props.navigation.navigate('EditNews')}>
                              <Text style={styles.actionsEdit}>Edit</Text>
                           </TouchableOpacity>
                           <TouchableOpacity>
                              <Text style={styles.actionsDelete}>Delete</Text>
                           </TouchableOpacity>
                        </View>
                     </View>
                  </View>
               </TouchableOpacity>

               <TouchableOpacity style={styles.cardNews} onPress={() => this.props.navigation.navigate('Detail') }>
                  <View style={styles.viewNews}>
                     <View style={styles.viewTextNews}>
                        <Text style={styles.titleNews}>Warga Seleman Dituding Mencuri Rokok dan Digepuki Warga Hingga Babak Belur Bobrok PolPolannn</Text>
                        {/* <Text style={styles.subtitle}>
                           Jdwndawdawuhdawuidaw daiudhawudhaw daiuwudhauwdh dadhadha ||dwadhauidhuiadhwuidhuiawh alala
                        </Text> */}
                        <View style={styles.viewCreateAndDate}>
                           <View>
                              <Text style={styles.createdBy}>
                                 Wahyu Ramadan
                              </Text>
                           </View>
                           <View>
                              <Text style={styles.dot}> . </Text>
                           </View>
                           <View>
                              <Text style={styles.dateCreate}>
                                 12 Maret
                              </Text>
                           </View>
                        </View>
                     </View>
                     <View style={styles.viewImg}>
                        <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={styles.imgNews} />
                        <View style={styles.actions}>
                           <TouchableOpacity>
                              <Text style={styles.actionsEdit}>Edit</Text>
                           </TouchableOpacity>
                           <TouchableOpacity>
                              <Text style={styles.actionsDelete}>Delete</Text>
                           </TouchableOpacity>
                        </View>
                     </View>
                  </View>
               </TouchableOpacity>

               <TouchableOpacity style={styles.cardNews} onPress={() => this.props.navigation.navigate('Detail') }>
                  <View style={styles.viewNews}>
                     <View style={styles.viewTextNews}>
                        <Text style={styles.titleNews}>Warga Seleman Dituding Mencuri Rokok dan Digepuki Warga Hingga Babak Belur Bobrok PolPolannn</Text>
                        {/* <Text style={styles.subtitle}>
                           Jdwndawdawuhdawuidaw daiudhawudhaw daiuwudhauwdh dadhadha ||dwadhauidhuiadhwuidhuiawh alala
                        </Text> */}
                        <View style={styles.viewCreateAndDate}>
                           <View>
                              <Text style={styles.createdBy}>
                                 Wahyu Ramadan
                              </Text>
                           </View>
                           <View>
                              <Text style={styles.dot}> . </Text>
                           </View>
                           <View>
                              <Text style={styles.dateCreate}>
                                 12 Maret
                              </Text>
                           </View>
                        </View>
                     </View>
                     <View style={styles.viewImg}>
                        <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={styles.imgNews} />
                        <View style={styles.actions}>
                           <TouchableOpacity>
                              <Text style={styles.actionsEdit}>Edit</Text>
                           </TouchableOpacity>
                           <TouchableOpacity>
                              <Text style={styles.actionsDelete}>Delete</Text>
                           </TouchableOpacity>
                        </View>
                     </View>
                  </View>
               </TouchableOpacity>

               <TouchableOpacity style={styles.cardNews} onPress={() => this.props.navigation.navigate('Detail') }>
                  <View style={styles.viewNews}>
                     <View style={styles.viewTextNews}>
                        <Text style={styles.titleNews}>Warga Seleman Dituding Mencuri Rokok dan Digepuki Warga Hingga Babak Belur Bobrok PolPolannn</Text>
                        {/* <Text style={styles.subtitle}>
                           Jdwndawdawuhdawuidaw daiudhawudhaw daiuwudhauwdh dadhadha ||dwadhauidhuiadhwuidhuiawh alala
                        </Text> */}
                        <View style={styles.viewCreateAndDate}>
                           <View>
                              <Text style={styles.createdBy}>
                                 Wahyu Ramadan
                              </Text>
                           </View>
                           <View>
                              <Text style={styles.dot}> . </Text>
                           </View>
                           <View>
                              <Text style={styles.dateCreate}>
                                 12 Maret
                              </Text>
                           </View>
                        </View>
                     </View>
                     <View style={styles.viewImg}>
                        <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={styles.imgNews} />
                        <View style={styles.actions}>
                           <TouchableOpacity>
                              <Text style={styles.actionsEdit}>Edit</Text>
                           </TouchableOpacity>
                           <TouchableOpacity>
                              <Text style={styles.actionsDelete}>Delete</Text>
                           </TouchableOpacity>
                        </View>
                     </View>
                  </View>
               </TouchableOpacity>

               <TouchableOpacity style={styles.cardNews} onPress={() => this.props.navigation.navigate('Detail') }>
                  <View style={styles.viewNews}>
                     <View style={styles.viewTextNews}>
                        <Text style={styles.titleNews}>Warga Seleman Dituding Mencuri Rokok dan Digepuki Warga Hingga Babak Belur Bobrok PolPolannn</Text>
                        {/* <Text style={styles.subtitle}>
                           Jdwndawdawuhdawuidaw daiudhawudhaw daiuwudhauwdh dadhadha ||dwadhauidhuiadhwuidhuiawh alala
                        </Text> */}
                        <View style={styles.viewCreateAndDate}>
                           <View>
                              <Text style={styles.createdBy}>
                                 Wahyu Ramadan
                              </Text>
                           </View>
                           <View>
                              <Text style={styles.dot}> . </Text>
                           </View>
                           <View>
                              <Text style={styles.dateCreate}>
                                 12 Maret
                              </Text>
                           </View>
                        </View>
                     </View>
                     <View style={styles.viewImg}>
                        <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={styles.imgNews} />
                        <View style={styles.actions}>
                           <TouchableOpacity>
                              <Text style={styles.actionsEdit}>Edit</Text>
                           </TouchableOpacity>
                           <TouchableOpacity>
                              <Text style={styles.actionsDelete}>Delete</Text>
                           </TouchableOpacity>
                        </View>
                     </View>
                  </View>
               </TouchableOpacity>

               <TouchableOpacity style={styles.cardNews} onPress={() => this.props.navigation.navigate('Detail') }>
                  <View style={styles.viewNews}>
                     <View style={styles.viewTextNews}>
                        <Text style={styles.titleNews}>Warga Seleman Dituding Mencuri Rokok dan Digepuki Warga Hingga Babak Belur Bobrok PolPolannn</Text>
                        {/* <Text style={styles.subtitle}>
                           Jdwndawdawuhdawuidaw daiudhawudhaw daiuwudhauwdh dadhadha ||dwadhauidhuiadhwuidhuiawh alala
                        </Text> */}
                        <View style={styles.viewCreateAndDate}>
                           <View>
                              <Text style={styles.createdBy}>
                                 Wahyu Ramadan
                              </Text>
                           </View>
                           <View>
                              <Text style={styles.dot}> . </Text>
                           </View>
                           <View>
                              <Text style={styles.dateCreate}>
                                 12 Maret
                              </Text>
                           </View>
                        </View>
                     </View>
                     <View style={styles.viewImg}>
                        <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={styles.imgNews} />
                        <View style={styles.actions}>
                           <TouchableOpacity>
                              <Text style={styles.actionsEdit}>Edit</Text>
                           </TouchableOpacity>
                           <TouchableOpacity>
                              <Text style={styles.actionsDelete}>Delete</Text>
                           </TouchableOpacity>
                        </View>
                     </View>
                  </View>
               </TouchableOpacity>

            {/* ))} */}

         {/* </ScrollView> */}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    //  justifyContent: 'center',
    //  alignItems: 'center',
    padding: 15
    //  backgroundColor: 'black'
  },
  viewImg: {
    flex: 3,
    padding: 5
    //  borderWidth: 1
  },
  imgNews: {
    height: 110,
    borderRadius: 10,
    resizeMode: 'cover'
  },
  cardNews: {
    // borderWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
    borderColor: 'gray',
    //  width: 355,
    height: 150,
    borderRadius: 10,
    marginBottom: 20
    // marginVertical: 10
  },
  viewNews: {
    flexDirection: 'row'
    //  borderWidth: 1,
    //  flex: 1
  },
  viewTextNews: {
    flex: 5,
    height: 150,
    padding: 5
    //  borderWidth: 1
  },
  titleNews: {
    height: 100,
    //  fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    //  fontStyle: 'italic',
    fontFamily: 'times news roman'
    //  borderWidth: 1
  },
  //   subtitle: {
  //     //  borderWidth: 1,
  //     height: 54,
  //     fontFamily: 'times news roman',
  //     //  color: 'grey',
  //     fontSize: 14
  //   },
  viewCreateAndDate: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
    //  borderWidth: 1

    // justifyContent: 'space-between'
  },
  createdBy: {
    color: 'gray'
  },
  dot: {
    color: 'gray'
  },
  dateCreate: {
    color: 'gray'
  },
  actions: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    //  marginVertical: 10,
    alignItems: 'flex-end'
    //  borderWidth: 1
  },
  actionsEdit: {
    color: '#778899',
    fontSize: 15,
    fontStyle: 'italic'
  },
  actionsDelete: {
    color: 'red',
    fontSize: 15,
    fontStyle: 'italic'
  }
})

// const mapStateToPops = state => ({
//   news: state.home
// })

// const mapDispatchToProps = {
//   getNews: actionsHome.getNews
// }

export default MyNews
