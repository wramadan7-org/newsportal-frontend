import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';

// import imagepicker
import ImagePicker from 'react-native-image-picker';
// import dispatch and selector
import {useSelector, useDispatch} from 'react-redux';
// import action
import newsActions from '../redux/actions/news';

// import component
// import CustomInput from '../component/CustomInput';

const CreateNews = ({navigation}) => {
  const [avatar, setAvatar] = React.useState(null);
  const [sourceImage, setSourceImage] = React.useState(null);

  const chooseImage = () => {
    let options = {
      title: 'Select Avatar',
      cameraType: 'front',
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        // eslint-disable-next-line no-alert
        alert(response.customButton);
      } else {
        const source = {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        };
        console.log(source);
        setAvatar(source.uri);
        setSourceImage(source);
        // const dataFm = new FormData();
        // dataFm.append('image', source);
        // dispatch(profileAction.updatePhotoProfile(token, dataFm));
      }
    });
  };

  const newsValidation = yup.object().shape({
    title: yup.string().required('Title is required'),
    news: yup.string().required('News is required'),
    category: yup.string().required('Category is required'),
  });

  const dispatch = useDispatch();
  // selector
  const {token} = useSelector((state) => state.auth);

  const createNews = async (values) => {
    const image = avatar;
    const data = {
      ...values,
      image: avatar,
    };
    if (image === null) {
      const created = await dispatch(newsActions.createNews(token, values));
      await dispatch(newsActions.getNews());
      if (created && created.action.payload.data.success) {
        Alert.alert('Success', 'News has been added', [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Home'),
          },
        ]);
      } else {
        Alert.alert('Fail', 'Fail to add news');
      }
    } else {
      const dataFm = new FormData();
      dataFm.append('title', values.title);
      dataFm.append('news', values.news);
      dataFm.append('category', values.category);
      dataFm.append('image', sourceImage);
      const created = await dispatch(
        newsActions.createImageNews(token, dataFm),
      );
      await dispatch(newsActions.getNews());
      if (created && created.action.payload.data.success) {
        Alert.alert('Success', 'News has been added', [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Home'),
          },
        ]);
      } else {
        Alert.alert('Fail', 'Fail to add news');
      }
    }
    console.log(data);
    console.log(sourceImage);
  };

  return (
    <View style={styles.parent}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Create Your News</Text>
        </View>
        <Formik
          validationSchema={newsValidation}
          initialValues={{
            title: '',
            news: '',
            category: '',
          }}
          onSubmit={(values) => createNews(values)}>
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            errors,
            values,
            touched,
            isValid,
          }) => (
            <>
              <View style={styles.viewTitle}>
                <Text>Title</Text>
                <TextInput
                  style={styles.textTitle}
                  onChangeText={handleChange('title')}
                  onBlur={handleBlur('title')}
                  placeholder="Enter title"
                />
              </View>
              {errors.title && touched.title && (
                <Text style={styles.errorText}>{errors.title}</Text>
              )}
              <View style={styles.viewTextArea}>
                <Text>News</Text>
                <TextInput
                  style={styles.textArea}
                  onChangeText={handleChange('news')}
                  onBlur={handleBlur('news')}
                  placeholder="Enter your news"
                  multiline={true}
                />
              </View>
              {errors.news && touched.news && (
                <Text style={styles.errorText}>{errors.news}</Text>
              )}
              <View style={styles.viewCategory}>
                <Text>Category</Text>
                <TextInput
                  style={styles.textCategory}
                  onChangeText={handleChange('category')}
                  onBlur={handleBlur('category')}
                  placeholder="Enter category"
                />
              </View>
              {errors.category && touched.category && (
                <Text style={styles.errorText}>{errors.category}</Text>
              )}
              {avatar === null ? (
                <View />
              ) : (
                <View style={styles.viewImgNews}>
                  <Image source={{uri: avatar}} style={styles.imgNews} />
                </View>
              )}
              <TouchableOpacity
                onPress={chooseImage}
                style={styles.viewChosePicture}>
                <Text style={styles.textChoose}>Choose picture</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnCreate} onPress={handleSubmit}>
                <Text style={styles.textBtn}>CREATE</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    padding: 20,
  },
  header: {
    height: 80,
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'times new roman',
  },
  viewTitle: {
    padding: 10,
    marginVertical: 20,
    borderWidth: 1,
    borderBottomWidth: 2,
  },
  textTitle: {
    // height: 10,
    fontFamily: 'times new roman',
    fontSize: 20,
  },
  viewTextArea: {
    padding: 10,
    marginVertical: 20,
    borderWidth: 1,
    borderBottomWidth: 2,
    height: 200,
  },
  textArea: {
    // borderBottomWidth: 1,
    fontSize: 15,
    fontFamily: 'times new roman',
    // height: 200,
  },
  viewCategory: {
    padding: 10,
    marginVertical: 20,
    borderWidth: 1,
    borderBottomWidth: 2,
  },
  textCategory: {
    fontSize: 14,
    fontFamily: 'times new roman',
  },
  viewChosePicture: {
    backgroundColor: 'grey',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  textChoose: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  btnCreate: {
    height: 50,
    backgroundColor: 'grey',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  textBtn: {
    color: 'white',
    fontFamily: 'times new roman',
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewImgNews: {
    marginVertical: 30,
  },
  imgNews: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  errorText: {
    fontSize: 13,
    color: 'red',
  },
});

export default CreateNews;
