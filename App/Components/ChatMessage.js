import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import PropTypes from 'prop-types'
import GravatarApi from 'gravatar-api'

const ChatMessage = ({ chatMessage }) => {
  const avatarUrl = GravatarApi.imageUrl({
                      email: chatMessage.user_email,
                      parameters: { size: "50", "d": "monsterid"},
                    }).replace('http', 'https')

  const censorString = chatMessage.message.split(' ').reduce((acc, word) => {
                          return acc + ' ' + (word.length === 4 ? '****' : word)
                       }, '')

  const userName = chatMessage.user_email_match_prev === true ? null : chatMessage.user_email

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  today = `${mm}/${dd}/${yyyy}`
  
  let rowDirection = {}
  rowDirection.flexDirection = chatMessage.isOwnUser === true ? 'row' : 'row-reverse'

  return (
    <View style={[styles.messageBlock, rowDirection]}>
      {userName !== null ? <Text style={styles.textDisplayUserName}>{`${userName} ${today}`} </Text> : null}
      <Text style={styles.textMessage}>{censorString.trim()}</Text>
      <Image style={styles.roundedProfileImage}
             source={{uri: avatarUrl}} />
    </View>
  )
}

const styles = StyleSheet.create({
  messageBlock: {
    flex: 1,
    alignSelf: 'flex-end',
    height: 60,
    maxHeight: 60,
  },
  roundedProfileImage: {
    width:50,
    height:50,
    borderWidth:3,
    borderColor:'black',
    borderRadius:25
  },
  textDisplayUserName: {
    flexWrap: 'wrap',
    width: '20%'
  },
  textMessage: {
    flex: 1,
    flexWrap: 'wrap', 
    width: '70%'
  }
})

ChatMessage.propTypes = {
  chatMessage: PropTypes.object.isRequired,
}

export default ChatMessage
