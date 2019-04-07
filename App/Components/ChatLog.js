import React from 'react'
import { View, FlatList, StyleSheet, ScrollView} from 'react-native'
import PropTypes from 'prop-types'
import ChatMessage from './ChatMessage'
import TextBar from './TextBar'

const ChatLog = ({ chats }) => {

  if(chats.length >= 2){
    let finalEmail = chats[chats.length-1]
    let penultimateEmail = chats[chats.length-2]

    if(finalEmail.user_email === penultimateEmail.user_email){
      finalEmail.user_email_match_prev = true
    }
  }

  return (
      <View style={{flex: 1, flexDirection: 'column', width: '100%', marginTop: 30}} >
        <ScrollView 
          style={{position: 'relative'}}
          ref={ref => this.scrollView = ref}
          onContentSizeChange={(contentWidth, contentHeight) => {       
            scrollView.scrollToEnd({animated: true});
          }}
        >
          <FlatList
            data={chats}
            renderItem = {({item, index}) => <ChatMessage key={item.user_email} chatMessage={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>

        <View style={{position: 'absolute', bottom: 20}}>
          <TextBar />
        </View>

      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

ChatLog.propTypes = {
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      user_email: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default ChatLog
