import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

// import actions
import actionsNews from '../redux/actions/news';
// import default image
import emptyImage from '../default-image/empty.jpg';
// env
// import {APP_PORT} from '@env';
import APP_PORT from '../consta/config';
// moment
import moment from 'moment';

const DetailNews = ({route, navigation}) => {
  const dispatch = useDispatch();
  const detailState = useSelector((state) => state.news);
  const {token} = useSelector((state) => state.auth);
  // console.log(route.params);

  React.useEffect(() => {
    dispatch(actionsNews.detailNews(token, route.params));
    console.log(detailState.dataDetailNews);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params]);

  return (
    <View style={styles.parent}>
      <ScrollView>
        {detailState.isLoading && (
          <View style={styles.viewIndicator}>
            <ActivityIndicator
              size="large"
              color="blue"
              style={styles.indicator}
            />
          </View>
        )}
        {detailState.dataDetailNews &&
          detailState.dataDetailNews !== undefined && (
            <>
              <View>
                <View style={styles.viewTitle}>
                  <Text style={styles.textTitle}>
                    {detailState.dataDetailNews.title}
                  </Text>
                </View>
                <View style={styles.viewCategory}>
                  <Text style={styles.textCategory}>
                    {detailState.dataDetailNews.category}
                  </Text>
                </View>
                <View style={styles.viewImage}>
                  <Image
                    style={styles.image}
                    source={
                      detailState.dataDetailNews?.image === null
                        ? emptyImage
                        : detailState.dataDetailNews.image?.length
                        ? {
                            uri: `${APP_PORT}/${detailState.dataDetailNews?.image}`,
                          }
                        : emptyImage
                    }
                  />
                </View>
                <View style={styles.writend}>
                  <View style={styles.viewProfileWriter}>
                    <Image
                      style={styles.photo}
                      source={
                        detailState.dataDetailNews?.User === null
                          ? emptyImage
                          : detailState.dataDetailNews.User?.photo
                          ? {
                              uri: `${APP_PORT}/${detailState.dataDetailNews.User.photo}`,
                            }
                          : emptyImage
                      }
                    />
                  </View>
                  <Text style={styles.writer}>
                    {detailState.dataDetailNews?.User !== null
                      ? detailState.dataDetailNews.User?.name
                        ? detailState.dataDetailNews.User?.name.split(' ')
                            .length > 2
                          ? detailState.dataDetailNews.User?.name
                              .split(' ')[0]
                              .concat(' ')
                              .concat(
                                detailState.dataDetailNews.User?.name.split(
                                  ' ',
                                )[1],
                              )
                          : detailState.dataDetailNews.User?.name
                        : detailState.dataDetailNews.User?.name
                      : 'Unknow'}
                  </Text>
                  <Text style={styles.created}>
                    {moment(detailState.dataDetailNews.createdAt).format('ll')}
                  </Text>
                  <Text> . </Text>
                  <Text style={styles.reading}>
                    {Math.ceil(detailState.dataDetailNews.news?.length / 60)}{' '}
                    min read
                  </Text>
                </View>
                <View style={styles.viewNews}>
                  <Text style={styles.news}>
                    {detailState.dataDetailNews.news}
                  </Text>
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
  viewIndicator: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    // borderWidth: 1,
    height: '100%',
  },
  indicator: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default DetailNews;
