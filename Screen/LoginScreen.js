import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import ChatSreen from './ChatSreen';
import {ListView} from 'deprecated-react-native-listview';

export default class LoginScreen extends Component {
  state = {
    name: '',
    password: '',
  };
  continue = () => {
    this.props.navigation.navigate('Chat', {name: this.state.name});
  };
  render() {
    return (
      <View style={styles.main}>
        <StatusBar hidden={true} />
        <View style={styles.circle} />
        <View style={{marginTop: 64}}>
          <Image
            style={{width: 100, height: 100, alignSelf: 'center'}}
            source={{
              uri:
                'https://raw.githubusercontent.com/DesignIntoCode/ChatApp/master/assets/chat.png',
            }}
          />
        </View>
        <View style={{marginHorizontal: 32}}>
          <Text style={styles.header}>ID</Text>
          <TextInput
            style={styles.input}
            placeholder="NguyenChiBao"
            onChange={name => {
              this.setState({name});
            }}
            onBlur={Keyboard.dismiss}
            returnKeyType={'done'}
            value={this.state.name}
          />
          <Text style={styles.header}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="password"
            secureTextEntry={true}
            onChange={password => {
              this.setState({password});
            }}
            onBlur={Keyboard.dismiss}
            returnKeyType={'done'}
            value={this.state.password}
          />
          <View style={{alignItems: 'flex-end', marginTop: 64}}>
            <TouchableOpacity style={styles.continue} onPress={this.continue}>
              <Icon name="arrow-right" size={25} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F4F5F7',
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: '#fff',
    position: 'absolute',
    left: -120,
    top: -20,
  },
  header: {
    fontWeight: '800',
    fontSize: 30,
    marginTop: 32,
  },
  input: {
    marginTop: 20,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#BAB7CA',
    borderRadius: 30,
    paddingHorizontal: 16,
    color: '#514E5A',
  },
  continue: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: '#9075E3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
