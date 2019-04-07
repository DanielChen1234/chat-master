import chatSaga from './chats'
import {all} from 'redux-saga/effects'

function* rootSaga(){
  yield all([
    ...chatSaga
  ])
}

export default rootSaga