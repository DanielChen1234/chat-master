export const ownUserMessage = (user_email, message, isOwnUser) => ({
    type: 'ADD_USER_MESSAGE',
    payload: {
        user_email, 
        message, 
        isOwnUser
    }
})
