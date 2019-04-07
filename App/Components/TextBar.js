import React, { Component } from 'react'
import {StyleSheet, View, TextInput, Button} from 'react-native'
import {connect} from 'react-redux'
import {ownUserMessage} from '../Actions/index'

class TextBar extends Component {

  constructor(){
    super()
    this.state = {
      textMessage: ''
    }
  }

  newMessage = (evt) => {
    this.setState({textMessage: evt})
  }

  messageSubmit = (evt) => {
    const {textMessage} = this.state
    this.props.ownUserMessage('daniel.chen@gmail.com', textMessage, true)
    this.setState({textMessage: ''})
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row', width: '100%', marginTop: 30}}>
          <TextInput
            value={this.state.textMessage}
            onChangeText={(evt) => this.newMessage(evt)}
            multiline={true}
            style={{height: Math.max(35, 0)}}
            placeholder="enter text here"
          />

          <Button
            title='send'
            style={{position: 'absolute', alignSelf: 'flex-end'}}
            onPress={(evt) => this.messageSubmit(evt)}
          />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  ownUserMessage: (user_email, message, isOwnUser) => dispatch(ownUserMessage(user_email, message, isOwnUser))
})

export default connect(null, mapDispatchToProps)(TextBar)
