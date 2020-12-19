import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  // ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

// import actions
import actionNews from '../redux/actions/news';
import searchActions from '../redux/actions/search';
// import moment
// import momet from 'moment';
// import default image
import emptyImage from '../default-image/empty.jpg';
// env
import {APP_PORT} from '@env';
// focus
import {useIsFocused} from '@react-navigation/native';

const Item = ({id, title, news, category, user, image, onPress}) => (
  <>
    <TouchableOpacity key={id} style={styles.cardNews} onPress={onPress}>
      <View style={styles.viewNews}>
        <View style={styles.viewTextNews}>
          <Text style={styles.titleNews}>{title}</Text>
          <Text style={styles.subtitle}>
            {news.length > 50 ? news.slice(0, 50).concat(' ...') : news}
          </Text>
          <View style={styles.viewCreateAndDate}>
            <View>
              <Text style={styles.createdBy}>
                {user === null
                  ? 'Unknow'
                  : user.name
                  ? user.name.split(' ').length > 2
                    ? user.name
                        .split(' ')[0]
                        .concat(' ')
                        .concat(user.name.split(' ')[1])
                    : user.name
                  : 'isi'}
              </Text>
            </View>
            <View>
              <Text style={styles.dot}> . </Text>
            </View>
            <View>
              <Text style={styles.dateCreate}>
                {Math.ceil(news.length / 60)} min read
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.viewImg}>
          <Image
            source={image === null ? emptyImage : {uri: `${APP_PORT}${image}`}}
            style={styles.imgNews}
          />
        </View>
      </View>
    </TouchableOpacity>
  </>
);

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.auth);
  const newsState = useSelector((state) => state.news);
  const createState = useSelector((state) => state.news);
  const updateState = useSelector((state) => state.news);
  const deleteState = useSelector((state) => state.news);
  const searchState = useSelector((state) => state.search);

  const [fetching, setFetching] = React.useState(false);

  const isFocused = useIsFocused();

  React.useEffect(() => {
    dispatch(actionNews.getNews(token));
    console.log('search', searchState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    createState.dataCreateNews,
    deleteState.dataDeleteNews,
    updateState.dataUpdateNews,
    searchState.searchPublic,
  ]);

  React.useEffect(() => {
    if (isFocused) {
      dispatch(searchActions.clearSearch(token));
      // dispatch(actionNews.getNews(token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  const renderItem = ({item}) => (
    <Item
      title={item.title}
      news={item.news}
      category={item.category}
      image={item.image}
      id={item.id}
      user={item.User !== null ? item.User : 'Unknow'}
      onPress={() => navigation.navigate('Detail', item.id)}
    />
  );

  // PULL TO REFRESH
  const onRefresh = async () => {
    console.log('refresh');
    setFetching(true);
    await dispatch(actionNews.getNews(token));
    setFetching(false);
  };

  return (
    <>
      <SafeAreaView>
        {searchState.isSearch && searchState.searchPublic?.length > 0 && (
          <FlatList
            style={styles.flat}
            data={searchState.searchPublic}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            // extraData={newsState.dataUpdate}
            refreshControl={
              <RefreshControl refreshing={fetching} onRefresh={onRefresh} />
            }
          />
        )}
        {searchState.isSearch && searchState.searchPublic === undefined && (
          <View style={styles.viewNotFound}>
            <Text>Not found</Text>
          </View>
        )}
        {/* {searchState.isSearch && searchState.isLoading && (
          <View style={styles.viewIndicator}>
            <ActivityIndicator
              size="large"
              color="blue"
              style={styles.indicator}
            />
          </View>
        )} */}
        {/* {!searchState.isSearch && newsState.isLoading && (
          <View style={styles.viewIndicator}>
            <ActivityIndicator
              size="large"
              color="blue"
              style={styles.indicator}
            />
          </View>
        )} */}
        {!searchState.isSearch && !newsState?.isLoading && (
          <FlatList
            style={styles.flat}
            data={newsState.dataNews}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            // extraData={newsState.dataUpdate}
            refreshControl={
              <RefreshControl refreshing={fetching} onRefresh={onRefresh} />
            }
          />
        )}
      </SafeAreaView>
    </>
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
    height: 220,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    // marginVertical: 10
  },
  viewNews: {
    flexDirection: 'row',
  },
  viewTextNews: {
    flex: 5,
    height: 140,
    padding: 5,
    //   borderWidth: 1,
  },
  titleNews: {
    height: 50,
    fontWeight: '800',
    fontSize: 20,
    color: 'black',
    fontFamily: 'times news roman',
    //  borderWidth: 1,
  },
  subtitle: {
    //  flex: 1,
    height: 60,
    fontSize: 15,
    fontFamily: 'times news roman',
    marginVertical: 10,
    //  borderWidth: 1,
  },
  viewCreateAndDate: {
    //  flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 20,
    //  borderWidth: 1,
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
  viewForViewDelete: {
    height: 30,
    alignItems: 'flex-end',
  },
  viewBtnEditDelete: {
    flexDirection: 'row',
    width: 150,
    justifyContent: 'space-around',
  },
  textBtn: {
    color: '#778899',
    fontWeight: 'bold',
    fontSize: 15,
    fontStyle: 'italic',
  },
  flat: {
    // borderWidth: 1,
    marginBottom: 50,
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
  viewNotFound: {
    // flex: 1,
    marginVertical: 40,
    // borderWidth: 1,
    // alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
export default Home;
