import { useContext } from 'react';
import { Context } from '../../Context';
import PlayButton from './PlayButton';
import MediaInfo from './MediaInfo';
import { ReactComponent as IconBookmarkEmpty } from '../../images/icon-bookmark-empty.svg';
import { ReactComponent as IconBookmarkFull } from '../../images/icon-bookmark-full.svg';
import { useNavigate } from 'react-router-dom';

export default function MediaIcon({ mediaArray, TRENDING, mediaType }) {
  const navigate = useNavigate();
  const { userBookmarks, doesBookmarkExist, toggleBookmark, isLoading } =
    useContext(Context);
  const bookmarkClasses = `absolute top-2 right-2 stroke-[1.5px] ${
    isLoading && 'pointer-events-none'
  }`;
  const aspectRatioClasses =
    mediaType === TRENDING
      ? 'aspect-[1.71] sm:aspect-[2.04]'
      : 'aspect-[1.49] md:aspect-[1.57] xl:aspect-[1.61] 2xl:aspect-[1.7]';
  const mediaElements = mediaArray.map(
    ({ _id, category, rating, thumbnail, title, year }) => {
      const isBookmarked =
        userBookmarks && doesBookmarkExist(_id)
          ? doesBookmarkExist(_id).isBookmarked
          : false;
      const imageUrl =
        mediaType === TRENDING
          ? `url(${thumbnail.trending.large})`
          : `url(${thumbnail.regular.large})`;
      const mediaInfoElement = (
        <MediaInfo
          TRENDING={TRENDING}
          mediaType={mediaType}
          category={category}
          rating={rating}
          title={title}
          year={year}
        />
      );
      return (
        <div key={title}>
          <div
            style={{ backgroundImage: imageUrl }}
            className={`group relative bg-cover bg-center-center rounded-lg
                    bg-black/0 hover:bg-black/50 hover:bg-blend-multiply ${
                      isLoading ? 'cursor-wait' : 'cursor-pointer'
                    } transition duration-[250ms] ${aspectRatioClasses}`}
          >
            {isBookmarked ? (
              <IconBookmarkFull
                className={`${bookmarkClasses} group-bookmarkfull`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleBookmark(_id, navigate);
                }}
              />
            ) : (
              <IconBookmarkEmpty
                className={`${bookmarkClasses} hover:stroke-[2px]`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleBookmark(_id, navigate);
                }}
              />
            )}
            <PlayButton />
            {mediaType === TRENDING && mediaInfoElement}
          </div>
          {mediaType !== TRENDING && mediaInfoElement}
        </div>
      );
    }
  );
  return <>{mediaElements}</>;
}
