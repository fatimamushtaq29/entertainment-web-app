import axios from 'axios';

const baseUrl = '/api/bookmarks';

// async function createNewBookmark(newBookmark) {
//     const response = await axios.post(baseUrl, newBookmark)
//     return response.data
// }

// async function updateBookmark(id) {
//     const response = await axios.patch(`${baseUrl}/${id}`)
//     return response.data
// }

async function currentUserBookmarks(userId) {
  const response = await axios.get(`${baseUrl}/${userId}`);
  return response.data;
}

export { currentUserBookmarks };
