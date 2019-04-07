import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import ConnectedChatLog from './Containers/ConnectedChatLog'
import SimpleChatApp from './Reducers'
import SimpleChatSaga from './Sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  SimpleChatApp,
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(SimpleChatSaga)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.safeArea}>
           <ConnectedChatLog />
         </SafeAreaView>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})