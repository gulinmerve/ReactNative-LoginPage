import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
      <Image
        source = {require('./images/shopping.png')}
        style={{width: 250, height: 250, marginLeft: 70, marginBottom: 70}}/>
        <View>
          <TextInput style={styles.inputContainer}
            keyboardType="email-address"
            placeholder="E-posta giriniz.."
          />
          <TextInput style={styles.inputContainer}
            keyboardType="email-address"
            placeholder="Şifregiriniz.."
          />
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.textStyle}>Giriş Yap</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.textStyle}>Kayıt Ol</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#80CBC4',
    justifyContent: 'center'
  },
  inputContainer: {
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonContainer: {
    width: 250,
    backgroundColor: '#546E7A', 
    padding: 10,
    margin: 5,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center'
  }
});

