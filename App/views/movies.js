import React from 'react';
import { Image, FlatList, StyleSheet, Text, View, Button } from 'react-native';

/**
 * 为了避免骚扰，我们用了一个样例数据来替代Rotten Tomatoes的API
 * 请求，这个样例数据放在React Native的Github库中。
 * 当然，由于众所周知的原因，这个地址可能国内访问也比较困难。
 */
const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center'
  },
  year: {
    textAlign: 'center'
  },
  list: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF'
  }
});

function renderLoadingView() {
  return (
    <View style={styles.container}>
      <Text>正在加载电影数据……</Text>
    </View>
  );
}

function renderMovie({ item }) {
  // { item }是一种“解构”写法，请阅读ES2015语法的相关文档
  // item也是FlatList中固定的参数名，请阅读FlatList的相关文档
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.posters.thumbnail }} style={styles.thumbnail} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.year}>{item.year}</Text>
      </View>
    </View>
  );
}

export default class MoviesScreen extends React.Component {
  static navigationOptions = {
    title: 'Movies'
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false
    };
    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { data } = this.state;
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
        this.setState({
          data: data.concat(responseData.movies),
          loaded: true
        });
      });
  }

  render() {
    const { loaded, data } = this.state;
    const { navigation } = this.props;

    if (!loaded) {
      return renderLoadingView();
    }

    return (
      <View>
        <Button title="Go to Movies... again" onPress={() => navigation.navigate('Movies')} />
        <Button title="Go to Details... again" onPress={() => navigation.push('Details')} />
        <Button title="Go to Hello" onPress={() => navigation.navigate('Hello')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <FlatList data={data} renderItem={renderMovie} style={styles.list} />
      </View>
    );
  }
}
