import dataServices from './services/data';
import { createContext, useEffect, useState } from 'react';
import { currentUser } from './services/auth';
import { currentUserBookmarks } from './services/bookmarks';
const Context = createContext();

function ContextProvider(props) {
  const [siteData, setSiteData] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [currentToken, setCurrentToken] = useState(() =>
    localStorage.getItem('token')
  );
  const [userBookmarks, setUserBookmarks] = useState(null);

  useEffect(() => {
    if (currentToken) {
      const getCurrentUser = async () => {
        try {
          const user = await currentUser();
          setLoggedInUser(user);
          setUserBookmarks(await currentUserBookmarks(user._id));
        } catch (error) {
          alert(error);
        }
      };
      getCurrentUser();
    }

  }, [currentToken]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await dataServices.getAll();
        setSiteData(data);
      } catch (error) {
        alert(error);
      }
    };
    loadData();
  }, []);

  function getMediaTypeArray(type, searchTerm = '') {
    const condition = searchTerm === '';
    if (type === 'trending') {
      return siteData.filter((item) => item.isTrending);
    } else if (type === 'movies') {
      return filterForType('Movie');
    } else if (type === 'series') {
      return filterForType('TV Series');
    } else if (type === 'bookmarked-movies') {
      return filterForBookmarkedType('Movie');
    } else if (type === 'bookmarked-series') {
      return filterForBookmarkedType('TV Series');
    } else if (type === 'bookmarked-all') {
      return filterForAllBookmarked();
    } else if (type === 'all') {
      return condition
        ? siteData.filter((item) => !item.isTrending)
        : siteData.filter((item) => searchFilter(item.title));
    }
    function filterForType(category) {
      return condition
        ? siteData.filter((item) => item.category === category)
        : siteData.filter(
            (item) => item.category === category && searchFilter(item.title)
          );
    }

    function filterForBookmarkedType(category) {
      return siteData.filter(
        (item) => item.category === category && didUserBookmark(item._id)
      );
    }
    function filterForAllBookmarked() {
      return siteData.filter(
        (item) => didUserBookmark(item._id) && searchFilter(item.title)
      );
    }

    function didUserBookmark(mediaId) {
      return (
        doesBookmarkExist(mediaId) && doesBookmarkExist(mediaId).isBookmarked
      );
    }

    function searchFilter(item) {
      return item.toLowerCase().includes(searchTerm.trim().toLowerCase());
    }
  }
  function doesBookmarkExist(mediaId) {
    return userBookmarks.find((bookmark) => bookmark.media === mediaId);
  }

  async function toggleBookmark(mediaId, navigate) {
    if (!loggedInUser) {
      navigate('/login', { replace: true });
      return;
    }

    const newBookmark = {
      isBookmarked: true,
      media: mediaId,
      user: loggedInUser._id,
    };
    const response = await dataServices.update(mediaId, newBookmark);
    setSiteData((prevData) =>
      prevData.map((item) => {
        return item._id === mediaId ? response : item;
      })
    );
    setUserBookmarks((prevData) => {
      return prevData.find((item) => item.media === mediaId)
        ? prevData.map((item) => {
            return item.media === mediaId
              ? {
                  ...item,
                  isBookmarked: !item.isBookmarked,
                }
              : item;
          })
        : [
            ...prevData,
            response.bookmarks.find(
              (bookmark) => bookmark.user === loggedInUser._id
            ),
          ];
    });
  }

  function setToken() {
    setCurrentToken(localStorage.getItem('token'));
  }

  function logout() {
    localStorage.removeItem('token');
    setCurrentToken(null);
    setLoggedInUser(null);
    setUserBookmarks(null);
  }

  return (
    <Context.Provider
      value={{
        siteData,
        getMediaTypeArray,
        toggleBookmark,
        loggedInUser,
        setToken,
        logout,
        userBookmarks,
        doesBookmarkExist,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
