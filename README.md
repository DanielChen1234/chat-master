I had fun working on this!

For the list, I used Flatlist per your suggestion. I believe that the items that are not able to be seen (either at the front or back of the list) are not loaded to save performance. It is an effective way to render list, especially in a chat app.

Handling text growth in both the rendered FlatList and the text entry were handled using a text wrap.

The algorithm used to "censor" four letter words was placed in the ChatMessage component. It seems to be the proper location due to the component receiving the user object with a message. I decided to use an array method to assist in the algo. I used the method 'split' to turn the string into an array. From there, I ran the 'reduce' method partnered with a ternary to check if the string's length was equal to four. If so, I would concat '****' to the accumulator.

The algorithim I used to group messages together if the message was from one user was handled in ChatLog. It was the logical place due the Chats array being present there. For a sanity check, I used a conditional to check if the array length was at least two or greater. Then I checked if the last object and the penultimate object shared the same username. If so, I would pass a boolean to ChatMessage, which would then conditionally render the username. The same applies to the date.

AutoScroll for new messages was handled using ScrollView and refs, using its built-in scrollToEnd. The methods with be paired with AutoScroll's prop onContentSizeChange, which, as the name suggests, scans for changes in length to the messages array.

Compatiablity for iPhone X was implemented using SafeAreaView and wrapping it around the the root index.js file.

npm install & npm run ios


