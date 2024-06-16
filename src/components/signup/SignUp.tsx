import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>네이버</Text>
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
        style={styles.input}
        placeholder="[선택] 이메일주소"
        value={email}
        onChangeText={setEmail}
      />
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
      <View style={styles.genderContainer}>
        <TouchableOpacity onPress={() => setGender('남자')}>
          <Text
            style={gender === '남자' ? styles.genderSelected : styles.gender}>
            남자
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setGender('여자')}>
          <Text
            style={gender === '여자' ? styles.genderSelected : styles.gender}>
            여자
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setGender('선택안함')}>
          <Text
            style={
              gender === '선택안함' ? styles.genderSelected : styles.gender
            }>
            선택안함
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="휴대전화번호"
        value={phone}
        onChangeText={setPhone}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>가입하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  gender: {
    fontSize: 16,
  },
  genderSelected: {
    fontSize: 16,
    color: 'blue',
  },
  signUpButton: {
    backgroundColor: 'aliceblue',
    padding: 10,
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#333',
    fontSize: 16,
  },
});

export default SignUpPage;
