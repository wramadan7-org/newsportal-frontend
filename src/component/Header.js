import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Text,
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import searchActions from '../redux/actions/search';

function Header() {
  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.auth);
  const searchState = useSelector((state) => state.search);

  console.log(searchState);

  const [btnSearch, setBtnSearch] = React.useState(false);
  const [search, setSearch] = React.useState('');

  const handleSearch = async (values) => {
    // console.log(values);
    await dispatch(searchActions.searchPublicNews(token, values));
    setBtnSearch(false);
    // await dispatch(searchActions.clearSearch(token));
  };
  return (
    <>
      {btnSearch ? (
        <>
          <View style={styles.grup}>
            <View style={styles.viewSearch}>
              <TextInput
                onChangeText={(values) => setSearch(values)}
                placeholder="Search"
              />
            </View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => handleSearch(search)}>
              <Icons name="search" size={20} />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <View style={styles.parent}>
            <View style={styles.viewTitle}>
              <Text style={styles.title}>Home</Text>
            </View>
            <View style={styles.viewIcon}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => console.log('klik')}>
                <Icons name="bell" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => setBtnSearch(true)}>
                <Icons name="search" size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    // width: 80,
    flex: 1,
    marginRight: 20,
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
  },
  viewTitle: {
    height: 50,
    width: 100,
    // borderWidth: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  viewSearch: {
    backgroundColor: 'lightgrey',
    flex: 1,
  },
  viewIcon: {
    width: 100,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  btn: {
    width: 50,

    justifyContent: 'center',
    alignItems: 'flex-end',
    // borderWidth: 1,
  },
  grup: {
    flexDirection: 'row',
  },
});

export default Header;
