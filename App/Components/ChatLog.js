import React from 'react'
import { View, FlatList, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import ChatMessage from './ChatMessage'
import TextBar from './TextBar'

const ChatLog = ({ chats }) => {

  return (
      <View style={{flex: 1, flexDirection: 'column', width: '100%', marginTop: 30}} >
        <View style={{position: 'relative'}}>
          <FlatList
            data={chats}
            renderItem = {({item, index}) => <ChatMessage key={item.user_email} chatMessage={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <View style={{position: 'absolute', bottom: 30}}>
          <TextBar />
        </View>
      </View>
  )
}

ChatLog.propTypes = {
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      user_email: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default ChatLog


