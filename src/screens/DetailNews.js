import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';

// import actions
import actionsNews from '../redux/actions/news';

const DetailNews = ({route, navigation}) => {
  console.log(route.params);
  return (
    <View style={styles.parent}>
      <ScrollView>
        <View>
          <View style={styles.viewTitle}>
            <Text style={styles.textTitle}>
              Ini Judul Berita Yoooooooo Beritaaaaaaaaa
            </Text>
          </View>
          <View style={styles.viewCategory}>
            <Text style={styles.textCategory}>Category</Text>
          </View>
          <View style={styles.viewImage}>
            <Text>Image</Text>
          </View>
          <View style={styles.writend}>
            <View style={styles.viewProfileWriter}>{/* <Image  /> */}</View>
            <Text style={styles.writer}>Wahyu Ramadan</Text>
            <Text style={styles.created}>12 Mart 2020</Text>
            <Text> . </Text>
            <Text style={styles.reading}>20 min read</Text>
          </View>
          <View style={styles.viewNews}>
            <Text style={styles.news}>
              Odwadawdasdmakdkwlkaw, adwkadwlkawdladklawdssssskakaka.
              Wakdkkwffkslannnc kakksllwd. Opdalkksmdwnwdkn ndwjnawkndakjw
              ndajndawkk
            </Text>
          </View>
        </View>
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
});

export default DetailNews;
