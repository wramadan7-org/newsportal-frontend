import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  // ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  SafeAreaView,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
// import actions
import newsActions from '../redux/actions/news';
// import redux
import {useSelector, useDispatch} from 'react-redux';
// env
// import {APP_PORT} from '@env';
const APP_PORT = 'http://192.168.1.39:8080';
// emptyImage
import emptyImage from '../default-image/empty.jpg';

const Item = ({
  title,
  news,
  category,
  photo,
  name,
  user,
  deleted,
  edit,
  details,
  id,
  image,
}) => (
  <TouchableOpacity key={id} style={styles.cardNews} onPress={details}>
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
          source={image === null ? emptyImage : {uri: `${APP_PORT}/${image}`}}
          style={styles.imgNews}
        />
      </View>
    </View>
    <View style={styles.viewForViewDelete}>
      <View style={styles.viewBtnEditDelete}>
        <TouchableOpacity onPress={edit}>
          <Text style={styles.textBtn}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={deleted}>
          <Text style={styles.textBtn}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
);

const MyNews = ({navigation}) => {
  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.auth);
  const myNewsState = useSelector((state) => state.news);
  const createState = useSelector((state) => state.news);
  const updateState = useSelector((state) => state.news);
  const deleteState = useSelector((state) => state.news);
  console.log(myNewsState.dataUpdateNews);

  const [fetching, setFetching] = React.useState(false);

  React.useEffect(() => {
    dispatch(newsActions.getMyNews(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    createState.dataCreateNews,
    deleteState.dataDeleteNews,
    updateState.dataUpdateNews,
  ]);

  // BTN DELETE
  const dispatchDelete = async (id) => {
    await dispatch(newsActions.deleteNews(token, id));
    await dispatch(newsActions.getMyNews(token));
  };

  // ALERT DELETE PRESS
  const deleteMyNews = (id) => {
    Alert.alert('Warning!', 'Are you sure want to delete this news ?', [
      {
        text: 'NO',
        onPress: () => console.log('Cancel press'),
      },
      {
        text: 'YES',
        onPress: () => dispatchDelete(id),
      },
    ]);
  };

  // RENDER ITEM
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      news={item.news}
      category={item.category}
      name={item.User.name}
      image={item.image}
      photo={item.User.photo}
      user={item.User}
      details={() => navigation.navigate('Detail', item.id)}
      deleted={() => deleteMyNews(item.id)}
      edit={() => navigation.navigate('EditNews', item.id)}
    />
  );

  // PULL TO REFRESH
  const onRefresh = async () => {
    console.log('refresh');
    setFetching(true);
    await dispatch(newsActions.getMyNews(token));
    setFetching(false);
  };

  return (
    <>
      <SafeAreaView>
        {myNewsState.isLoading ? (
          <View style={styles.viewIndicator}>
            <ActivityIndicator
              size="large"
              color="blue"
              style={styles.indicator}
            />
          </View>
        ) : (
          <FlatList
            style={styles.flat}
            data={myNewsState.dataMyNews}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={myNewsState}
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
    height: 200,
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
});

export default MyNews;
