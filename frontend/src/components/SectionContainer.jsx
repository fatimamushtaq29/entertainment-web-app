import useIsThereSearchTerm from '../customHooks/useIsThereSearchTerm';
import Heading from './Heading';
import MediaIcon from './media/MediaIcon';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Context } from '../Context';

export default function SectionContainer({ headingText, mediaType }) {
  const TRENDING = 'trending';
  const { searchTerm, isThereSearchTerm } = useIsThereSearchTerm();
  const { getMediaTypeArray } = useContext(Context);
  const mediaArray = !isThereSearchTerm
    ? getMediaTypeArray(mediaType)
    : getMediaTypeArray(mediaType, searchTerm);

  let containerClassName =
    'grid grid-cols-2 gap-x-[clamp(0.9375rem,0.0429rem+3.8168vw,1.875rem)] gap-y-[clamp(1rem,0.5229rem+2.0356vw,1.5rem)] px-[clamp(1rem,0.5229rem+2.0356vw,1.5rem)] md:grid-cols-3 md:px-[clamp(1.5rem,0.6429rem+1.7857vw,2.25rem)] md:gap-y-[clamp(1.5rem,0.9286rem+1.1905vw,2rem)] xl:grid-cols-4';
  if (mediaType === TRENDING) {
    containerClassName =
      'grid grid-flow-col auto-cols-[clamp(15rem,_1.2834rem_+_58.5242vw,_29.375rem)] gap-[clamp(1rem,-0.4313rem+6.1069vw,2.5rem)] overflow-x-auto scrollbar px-[clamp(1rem,0.5229rem+2.0356vw,1.5rem)] md:px-[clamp(1.5rem,0.6429rem+1.7857vw,2.25rem)] xl:auto-cols-[clamp(26rem,-1.0000rem+33.7500vw,29.375rem)] 1xl:auto-cols-[clamp(29.375rem,2.8571rem+29.4643vw,50rem)]';
  }
  return (
    <div className="space-y-6">
      <Heading
        headingText={
          isThereSearchTerm
            ? `Found ${mediaArray.length ? mediaArray.length : 'no'} ${
                mediaArray.length > 1 ? 'results' : 'result'
              } for '${searchTerm.trim()}'`
            : headingText
        }
      />
      <div className={containerClassName}>
        <MediaIcon
          mediaArray={mediaArray}
          mediaType={mediaType}
          TRENDING={TRENDING}
        />
      </div>
    </div>
  );
}

SectionContainer.propTypes = {
  mediaType: PropTypes.oneOf([
    'all',
    'trending',
    'movies',
    'series',
    'bookmarked-movies',
    'bookmarked-series',
    'bookmarked-all',
  ]),
};
