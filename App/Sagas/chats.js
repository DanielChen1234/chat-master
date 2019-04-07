import { put, delay, fork, takeLatest} from 'redux-saga/effects'
import lorem from 'lorem-ipsum-react-native'

const emails = [
  'a@b.com',
  'test@rehashstudio.com',
  'steve@jobs.com',
  'hello@world.com',
  'foo@bar.com',
]

function* addChatsSaga() {
  while (true) {
    yield delay(5000)
    const email = emails[Math.floor(Math.random()*emails.length)];
    yield put({
      type: 'ADD_MESSAGE',
      user_email: email,
      message: lorem({
      }),
    })
  }
}

function* userAddToChat(action){
  yield put({
    type: 'ADD_MESSAGE',
    user_email: action.payload.user_email,
    message: action.payload.message
  })
}

function* watchUserAddToChat(){
  yield takeLatest('ADD_USER_MESSAGE', userAddToChat)
}

const chatSaga = [
    fork(addChatsSaga),
    fork(watchUserAddToChat)
]

export default chatSaga
