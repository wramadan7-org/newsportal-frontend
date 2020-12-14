import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

// import actions
import actionsNews from '../redux/actions/news';
// import default image
import emptyImage from '../default-image/empty.jpg';
// env
import {APP_PORT} from '@env';
// moment
import moment from 'moment';

const DetailNews = ({route, navigation}) => {
  const dispatch = useDispatch();
  const detailState = useSelector((state) => state.news);
  // console.log(route.params);

  React.useEffect(() => {
    dispatch(actionsNews.detailNews(route.params));
    console.log(detailState.detail.photo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params]);

  return (
    <View style={styles.parent}>
      <ScrollView>
        {detailState.detail && detailState.detail !== undefined && (
          <>
            <View>
              <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>{detailState.detail.title}</Text>
              </View>
              <View style={styles.viewCategory}>
                <Text style={styles.textCategory}>
                  {detailState.detail.category}
                </Text>
              </View>
              <View style={styles.viewImage}>
                <Image
                  style={styles.image}
                  source={
                    detailState.detail.image === null
                      ? emptyImage
                      : {uri: `${APP_PORT}${detailState.detail.image}`}
                  }
                />
              </View>
              <View style={styles.writend}>
                <View style={styles.viewProfileWriter}>
                  <Image
                    style={styles.photo}
                    source={
                      detailState.detail.User === null
                        ? emptyImage
                        : detailState.detail.User.photo === null ||
                          detailState.detail.User.photo.length <= 0
                        ? emptyImage
                        : {uri: `${APP_PORT}${detailState.detail.User.photo}`}
                    }
                  />
                </View>
                <Text style={styles.writer}>
                  {detailState.detail.User !== null
                    ? detailState.detail.User.name
                      ? detailState.detail.User.name.split(' ').length > 2
                        ? detailState.detail.User.name
                            .split(' ')[0]
                            .concat(' ')
                            .concat(detailState.detail.User.name.split(' ')[1])
                        : detailState.detail.User.name
                      : detailState.detail.User.name
                    : 'Unknow'}
                </Text>
                <Text style={styles.created}>
                  {moment(detailState.detail.createdAt).format('ll')}
                </Text>
                <Text> . </Text>
                <Text style={styles.reading}>
                  {Math.ceil(detailState.detail.news.length / 60)} min read
                </Text>
              </View>
              <View style={styles.viewNews}>
                <Text style={styles.news}>{detailState.detail.news}</Text>
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    padding: 10,
  },
  viewTitle: {
    marginVertical: 10,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'times new roman',
  },
  viewImage: {
    backgroundColor: 'grey',
    height: 200,
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  writend: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  writer: {
    fontStyle: 'italic',
    fontSize: 15,
    marginRight: 10,
  },
  created: {
    fontStyle: 'italic',
    fontSize: 15,
    color: 'grey',
  },
  viewNews: {
    marginVertical: 30,
  },
  news: {
    fontFamily: 'times new roman',
    fontSize: 15,
    lineHeight: 30,
  },
  viewProfileWriter: {
    width: 50,
    height: 50,
    backgroundColor: 'grey',
    borderRadius: 100,
    marginRight: 10,
  },
  reading: {
    color: 'grey',
    fontSize: 15,
    fontStyle: 'italic',
  },
  image: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 100,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default DetailNews;
