import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+82');

  const countryCodes = [
    {label: 'Korea (Rep. of) +82', value: '+82'},
    {label: 'Japan +81', value: '+81'},
    {label: 'United States +1', value: '+1'},
    // Add more countries as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>네이버</Text>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="아이디"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="비밀번호"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={[styles.input, styles.lastInput]}
          placeholder="[선택] 이메일주소"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="이름"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="생년월일 8자리"
          value={birthday}
          onChangeText={setBirthday}
          keyboardType="numeric"
        />
        <View style={[styles.genderContainer, styles.input]}>
          <TouchableOpacity
            style={[
              styles.genderButton,
              gender === '남자' && styles.genderSelected,
            ]}
            onPress={() => setGender('남자')}>
            <Text style={styles.genderText}>남자</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderButton,
              gender === '여자' && styles.genderSelected,
            ]}
            onPress={() => setGender('여자')}>
            <Text style={styles.genderText}>여자</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderButton,
              gender === '기타' && styles.genderSelected,
            ]}
            onPress={() => setGender('기타')}>
            <Text style={styles.genderText}>기타</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.phoneInputGroup}>
          <RNPickerSelect
            onValueChange={value => setCountryCode(value)}
            items={countryCodes}
            style={pickerSelectStyles}
            value={countryCode}
          />
          <TextInput
            style={[styles.input, styles.phoneNumberInput]}
            placeholder="휴대전화번호"
            value={phone}
            onChangeText={setPhone}
            keyboardType="numeric"
          />
        </View>
      </View>

      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>가입하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6f7',
    padding: 20,
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#03c75a',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  inputGroup: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
    borderColor: '#dadada',
    borderWidth: 1,
  },
  input: {
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#dadada',
  },
  lastInput: {
    borderBottomWidth: 0,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  genderButton: {
    flex: 1,
    height: 30,
    borderColor: '#dadada',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 2,
  },
  genderSelected: {
    borderColor: '#03c75a',
    backgroundColor: '#e8f0fe',
  },
  genderText: {
    fontSize: 16,
    color: '#333',
  },
  phoneInputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#dadada',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  phoneNumberInput: {
    flex: 3,
    height: 50,
    paddingHorizontal: 10,
    fontSize: 16,
    borderLeftWidth: 1,
    borderLeftColor: '#dadada',
    backgroundColor: '#fff',
  },
  signUpButton: {
    backgroundColor: '#03c75a',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    borderColor: '#dadada',
    borderWidth: 1,
    borderRadius: 5,
    color: '#333',
  },
  inputAndroid: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    borderColor: '#dadada',
    borderWidth: 1,
    borderRadius: 5,
    color: '#333',
  },
});

export default SignUpPage;
