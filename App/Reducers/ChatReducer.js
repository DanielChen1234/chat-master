import {Types} from '../Actions/index'

const defaultState = [
  {
    user_email: 'a@b.com',
    message: 'Hello world!',
    isOwnUser: false
  },
]

const chat = (state = defaultState, action) => {
  switch (action.type) {
    case Types.ADD_MESSAGE:
      let { user_email, message, isOwnUser } = action;
      return [
        ...state,
        {
          user_email,
          message,
          isOwnUser
        }
      ]
    default:
      return state
  }
}

export default chat
