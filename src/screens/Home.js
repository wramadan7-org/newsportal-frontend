import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

// import actions
import actionNews from '../redux/actions/news';
// import moment
import momet from 'moment';
// import default image
import emptyImage from '../default-image/empty.jpg';
// env
import {APP_PORT} from '@env';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const newsState = useSelector((state) => state.news);
  React.useEffect(() => {
    dispatch(actionNews.getNews());
    // console.log(newsState.data.map((o) => o.User.name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView style={styles.parent}>
      {newsState.data &&
        newsState.data.length &&
        newsState.data.map((o) => (
          <TouchableOpacity
            key={o.id}
            style={styles.cardNews}
            onPress={() => navigation.navigate('Detail', o.id)}>
            <View style={styles.viewNews}>
              <View style={styles.viewTextNews}>
                <Text style={styles.titleNews}>{o.title}</Text>
                <Text style={styles.subtitle}>
                  {o.news.length > 27
                    ? o.news.slice(0, 27).concat(' ...')
                    : o.title}
                </Text>
                <View style={styles.viewCreateAndDate}>
                  <View>
                    <Text style={styles.createdBy}>
                      {o.User === null
                        ? 'Unknow'
                        : o.User.name
                        ? o.User.name.split(' ').length > 2
                          ? o.User.name
                              .split(' ')[0]
                              .concat(' ')
                              .concat(o.User.name.split(' ')[1])
                          : o.User.name
                        : 'isi'}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.dot}> . </Text>
                  </View>
                  <View>
                    <Text style={styles.dateCreate}>
                      {Math.ceil(o.news.length / 60)} min read
                    </Text>
                    {/* <Text style={styles.dateCreate}>6 min read</Text> */}
                  </View>
                </View>
              </View>
              <View style={styles.viewImg}>
                <Image
                  source={
                    o.image === null
                      ? emptyImage
                      : {uri: `${APP_PORT}${o.image}`}
                  }
                  // source={{uri: 'https://reactjs.org/logo-og.png'}}
                  style={styles.imgNews}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    //  justifyContent: 'center',
    //  alignItems: 'center',
    padding: 15,
    //  backgroundColor: 'black'
  },
  viewImg: {
    flex: 3,
    padding: 5,
    justifyContent: 'center',
    //  borderWidth: 1
  },
  imgNews: {
    height: 120,
    borderRadius: 10,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  cardNews: {
    // borderWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
    borderColor: 'gray',
    //  width: 355,
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
    // marginVertical: 10
  },
  viewNews: {
    flexDirection: 'row',
  },
  viewTextNews: {
    flex: 5,
    height: 140,
    padding: 5,
    //  borderWidth: 1
  },
  titleNews: {
    height: 50,
    fontWeight: '800',
    fontSize: 20,
    color: 'black',
    fontFamily: 'times news roman',
    //  borderWidth: 1
  },
  subtitle: {
    //  flex: 1,
    height: 19,
    fontSize: 15,
    fontFamily: 'times news roman',
    marginVertical: 10,
  },
  viewCreateAndDate: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 20,
    // justifyContent: 'space-between'
  },
  createdBy: {
    color: 'gray',
  },
  dot: {
    color: 'gray',
  },
  dateCreate: {
    color: 'gray',
  },
});
export default Home;
