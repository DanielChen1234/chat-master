export const Types = {
    ADD_USER_MESSAGE: 'ADD_USER_MESSAGE',
    ADD_MESSAGE: 'ADD_MESSAGE'
}


export const ownUserMessage = (user_email, message, isOwnUser) => ({
    type: Types.ADD_USER_MESSAGE,
    payload: {
        user_email, 
        message, 
        isOwnUser
    }
})
