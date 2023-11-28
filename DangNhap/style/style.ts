import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#3498db',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 80,
    paddingBottom: 20,
  },
  item: {
    padding: 20,
    width: '100%',
    height: 260,
    borderRadius: 10,
    backgroundColor: '#d9ebf8',
    marginTop: '50%',
  },
  title: {
    fontSize: 32,
    fontWeight: '400',
  },
  username: {
    fontSize: 16,
  },
  password: {
    fontSize: 16,
  },
  ml_20: {
    marginLeft: 20,
  },
  mb_40: {
    marginBottom: 40,
  },
  btn: {
    backgroundColor: '#2196f3',
    width: '100%',
    borderRadius: 5,
    height: 42,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
  },
  text_btn: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
  },
})
