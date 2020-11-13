import React from 'react'
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  Image
} from 'react-native'

// import actions
import actionsHome from '../redux/actions/home'

// import moment
import momet from 'moment'

// import redux
import { connect } from 'react-redux'

class Home extends React.Component {
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
                        <Text style={styles.titleNews}>JUDUL INI BRITA</Text>
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
                     </View>
                  </View>
               </TouchableOpacity>

               <TouchableOpacity style={styles.cardNews} onPress={() => this.props.navigation.navigate('Detail') }>
                  <View style={styles.viewNews}>
                     <View style={styles.viewTextNews}>
                        <Text style={styles.titleNews}>JUDUL INI BRITA</Text>
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
                     </View>
                  </View>
               </TouchableOpacity>

               <TouchableOpacity style={styles.cardNews} onPress={() => this.props.navigation.navigate('Detail') }>
                  <View style={styles.viewNews}>
                     <View style={styles.viewTextNews}>
                        <Text style={styles.titleNews}>JUDUL INI BRITA</Text>
                        <View style={styles.viewCreateAndDate}>
                           <View>
                              <Text style={styles.createdBy}>
                                 Wahyu Ramadan
                              </Text>
                           </View>
                              <Text style={styles.dot}> . </Text>
                           <View>
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
                     </View>
                  </View>
               </TouchableOpacity>

               <TouchableOpacity style={styles.cardNews} onPress={() => this.props.navigation.navigate('Detail') }>
                  <View style={styles.viewNews}>
                     <View style={styles.viewTextNews}>
                        <Text style={styles.titleNews}>JUDUL INI BRITA</Text>
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
                     </View>
                  </View>
               </TouchableOpacity>

               <TouchableOpacity style={styles.cardNews} onPress={() => this.props.navigation.navigate('Detail') }>
                  <View style={styles.viewNews}>
                     <View style={styles.viewTextNews}>
                        <Text style={styles.titleNews}>JUDUL INI BRITA</Text>
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
                     </View>
                  </View>
               </TouchableOpacity>

               <TouchableOpacity style={styles.cardNews} onPress={() => this.props.navigation.navigate('Detail') }>
                  <View style={styles.viewNews}>
                     <View style={styles.viewTextNews}>
                        <Text style={styles.titleNews}>JUDUL INI BRITA</Text>
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
    height: 120,
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
  },
  viewTextNews: {
    flex: 5,
    height: 140,
    padding: 5
    //  borderWidth: 1
  },
  titleNews: {
    height: 100,
    //  fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    fontFamily: 'times news roman'
    //  borderWidth: 1
  },
  viewCreateAndDate: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
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
  }
})

// const mapStateToPops = state => ({
//   news: state.home
// })

// const mapDispatchToProps = {
//   getNews: actionsHome.getNews
// }

export default Home
