/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react'
import { style } from './style/style'
import { Button, Text, TouchableOpacity, View } from 'react-native'
class App extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.item}>
          <Text style={[style.title, style.mb_40]}>Đăng Nhập</Text>
          <Text style={[style.username, style.mb_40, style.ml_20]}>
            Tên đăng nhập
          </Text>
          <Text style={[style.password, style.ml_20]}>Mật khẩu</Text>
          <TouchableOpacity style={[style.btn]}>
            <Text style={style.text_btn}>Đăng Nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
export default App
