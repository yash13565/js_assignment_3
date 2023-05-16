//                                       Closures

// Closure is often used in programming languages to create functions that can remember and use variables 
// from their parent scope, even when they are called or executed in a different context.It allows for flexible
//  and modular coding by encapsulating data and functionality together.


                //                     Example
                

// function createCounter() {
//     let counter = 0;
  
//     function increment() {
//       counter++;
//       console.log(counter);
//     }
  
//     return increment;
//   }
  
//   const myCounter = createCounter();
//   myCounter(); // Output: 1
//   myCounter(); // Output: 2
//   myCounter(); // Output: 3
  



// (1).
// import React, { useState } from 'react';

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setTimeout(() => {
//       // This is an example of closure
//       setCount(prevCount => prevCount + 1);
//     }, 1000);
//   };

//   return (
//     <div>
//       <h2>Counter</h2>
//       <p>Count: {count}</p>
//       <button onClick={handleClick}>Increment</button>
//     </div>
//   );
// };

// export default Counter;

// In this example, we have a Counter component that displays a count value and a button. When the button is clicked, it calls the handleClick function. Inside the handleClick function, there is a setTimeout function that increments the count state variable after a delay of 1 second.

// Here's where closure comes into play. The handleClick function is defined within the Counter component and has access to the count state variable through closure. When the setTimeout callback is executed, it still has access to the count variable because it "remembers" its lexical scope, even after the handleClick function has finished executing. Therefore, it can update the count state using the setCount function.

// This example demonstrates how closure allows the inner function (the setTimeout callback) to access the variables of its outer function (the handleClick function) even after the outer function has completed its execution.

// (2).
// import React, { useState } from 'react';

// const ShoppingCart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     const updatedCart = [...cartItems, item];
//     setCartItems(updatedCart);
//   };

//   const displayCart = () => {
//     console.log(cartItems);
//   };

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <button onClick={() => addToCart('Item 1')}>Add to Cart</button>
//       <button onClick={() => addToCart('Item 2')}>Add to Cart</button>
//       <button onClick={displayCart}>Display Cart</button>
//     </div>
//   );
// };

// export default ShoppingCart;
// In this example, we have a ShoppingCart component that allows users to add items to their cart. The cartItems state variable is an array that holds the items in the cart.

// The addToCart function is called when the user clicks the "Add to Cart" button. It takes an item parameter and updates the cartItems state by adding the item to the existing array using the spread syntax.

// The displayCart function is called when the user clicks the "Display Cart" button. It logs the cartItems array to the console.

// Here's where closure comes into play. Both the addToCart and displayCart functions have access to the cartItems variable through closure. Even though these functions are defined outside the useState hook, they remember their lexical scope and can access the cartItems variable. This allows them to update the cart items or display them when invoked.

// In this example, closure enables the functions to maintain a reference to the cartItems variable even after the initial render of the ShoppingCart component, ensuring that the correct state data is accessed and manipulated.

// (3).
// import React, { useState } from 'react';

// const UserProfile = () => {
//   const [userId, setUserId] = useState(null);
//   const [userData, setUserData] = useState(null);

//   const login = (id) => {
//     setUserId(id);
//     // Simulating an API call to fetch user data
//     setTimeout(() => {
//       const fetchedData = { id, name: 'John Doe', email: 'john.doe@example.com' };
//       setUserData(fetchedData);
//     }, 1000);
//   };

//   const logout = () => {
//     setUserId(null);
//     setUserData(null);
//   };

//   return (
//     <div>
//       {!userId ? (
//         <button onClick={() => login(123)}>Login</button>
//       ) : (
//         <>
//           <h2>Welcome, User {userId}!</h2>
//           <p>Name: {userData?.name}</p>
//           <p>Email: {userData?.email}</p>
//           <button onClick={logout}>Logout</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default UserProfile;

// In this example, we have a UserProfile component that allows users to log in and view their profile information. The userId state variable holds the current user's ID, and the userData state variable holds their profile data.

// The login function is called when the user clicks the "Login" button. It takes an id parameter and updates the userId state with the provided ID. Then, it simulates an API call using setTimeout to fetch the user's data. Once the data is fetched, it updates the userData state with the fetched data.

// The logout function is called when the user clicks the "Logout" button. It resets the userId and userData states to null.

// Here's where closure comes into play. The setTimeout callback function inside the login function has access to the userId state variable through closure. Even though the setTimeout function is asynchronous and executed after the login function has completed, the callback function still retains access to the userId value when it eventually executes. This ensures that the fetched data is associated with the correct user.

// In this example, closure enables the setTimeout callback function to "remember" the userId value from the outer login function, allowing it to update the correct user's profile information when the asynchronous API call completes.

// (4).
// import React, { useState } from 'react';

// const BlogEditor = () => {
//   const [postId, setPostId] = useState(null);
//   const [postContent, setPostContent] = useState('');

//   const createPost = () => {
//     const newPostId = generateUniqueId();
//     setPostId(newPostId);
//     setPostContent('');
//   };

//   const editPost = (content) => {
//     setPostContent(content);
//   };

//   const generateUniqueId = () => {
//     // Simulating unique ID generation
//     return Math.random().toString(36).substr(2, 9);
//   };

//   return (
//     <div>
//       {!postId ? (
//         <>
//           <textarea value={postContent} onChange={(e) => editPost(e.target.value)} />
//           <button onClick={createPost}>Create Post</button>
//         </>
//       ) : (
//         <>
//           <h2>Post ID: {postId}</h2>
//           <p>Content: {postContent}</p>
//         </>
//       )}
//     </div>
//   );
// };

// export default BlogEditor;

// In this example, we have a BlogEditor component that allows users to create and edit blog posts. The postId state variable holds the ID of the current post, and the postContent state variable holds the content of the post.

// The createPost function is called when the user clicks the "Create Post" button. It generates a unique ID for the new post using the generateUniqueId function, sets the postId state with the new ID, and clears the postContent.

// The editPost function is called when the user modifies the content of the textarea. It updates the postContent state with the new content.

// The generateUniqueId function generates a unique ID for the blog post. In this example, we simulate it by generating a random alphanumeric string.

// Here's where closure comes into play. The createPost function has access to the generateUniqueId function through closure. Even though generateUniqueId is defined outside the createPost function, createPost retains access to it and can invoke it to generate a unique ID.

// In this example, closure allows the createPost function to "remember" and access the generateUniqueId function defined in its outer scope, enabling it to generate a unique ID for each new blog post.

// (5).

// import React, { useState } from 'react';

// const PlaylistManager = () => {
//   const [playlists, setPlaylists] = useState([]);

//   const createPlaylist = (name) => {
//     const newPlaylistId = generateUniqueId();
//     const newPlaylist = {
//       id: newPlaylistId,
//       name,
//       songs: [],
//     };
//     setPlaylists([...playlists, newPlaylist]);
//   };

//   const addSongToPlaylist = (playlistId, song) => {
//     const updatedPlaylists = playlists.map((playlist) => {
//       if (playlist.id === playlistId) {
//         return {
//           ...playlist,
//           songs: [...playlist.songs, song],
//         };
//       }
//       return playlist;
//     });
//     setPlaylists(updatedPlaylists);
//   };

//   const generateUniqueId = () => {
//     // Simulating unique ID generation
//     return Math.random().toString(36).substr(2, 9);
//   };

//   return (
//     <div>
//       <h2>Playlist Manager</h2>
//       <button onClick={() => createPlaylist('My Playlist')}>Create Playlist</button>
//       {playlists.map((playlist) => (
//         <div key={playlist.id}>
//           <h3>{playlist.name}</h3>
//           <button onClick={() => addSongToPlaylist(playlist.id, 'New Song')}>Add Song</button>
//           <ul>
//             {playlist.songs.map((song, index) => (
//               <li key={index}>{song}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PlaylistManager;

// In this example, we have a PlaylistManager component that allows users to create playlists and add songs to them. The playlists state variable is an array that holds the playlists.

// The createPlaylist function is called when the user clicks the "Create Playlist" button. It generates a unique ID for the new playlist using the generateUniqueId function, creates a new playlist object with the provided name and an empty array of songs, and updates the playlists state by adding the new playlist.

// The addSongToPlaylist function is called when the user clicks the "Add Song" button for a specific playlist. It finds the playlist with the provided ID in the playlists array, adds the new song to its songs array, and updates the playlists state with the updated array.

// The generateUniqueId function generates a unique ID for the playlist. In this example, we simulate it by generating a random alphanumeric string.

// Here's where closure comes into play. Both the createPlaylist and addSongToPlaylist functions have access to the generateUniqueId function through closure. Even though generateUniqueId is defined outside these functions, they retain access to it and can invoke it to generate a unique ID for the new playlist.

// In this example, closure allows the createPlaylist and addSongToPlaylist functions to "remember" and access the generateUniqueId function defined in their outer scope, enabling them to generate unique IDs for each new playlist.

