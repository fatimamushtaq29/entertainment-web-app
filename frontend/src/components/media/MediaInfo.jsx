import DotSpan from './DotSpan';
import { ReactComponent as IconCategoryTVSeries } from '../../images/icon-category-tv.svg';
import { ReactComponent as IconCategoryMovie } from '../../images/icon-category-movie.svg';

export default function MediaInfo({
  TRENDING,
  mediaType,
  category,
  rating,
  title,
  year,
}) {
  let infoContainerClasses =
    'space-y-[clamp(0.25rem,0.1904rem+0.2545vw,0.3125rem)] mt-2';
  let infoTextSize = 'text-[clamp(0.6875rem,0.5682rem+0.5089vw,0.8125rem)]';
  let titleTextSize = 'text-[clamp(0.875rem,0.6365rem+1.0178vw,1.125rem)]';
  if (mediaType === TRENDING) {
    infoContainerClasses =
      'absolute space-y-[clamp(0.1875rem,0.3096rem+-0.2545vw,0.25rem)] bottom-4 left-4';
    infoTextSize = 'text-[clamp(0.75rem,0.5711rem+0.7634vw,0.9375rem)]';
    titleTextSize = 'text-[clamp(0.9375rem,0.4008rem+2.2901vw,1.5rem)]';
  }
  return (
    <div className={`${infoContainerClasses}`}>
      <div
        className={`flex items-center space-x-2 opacity-75 font-light leading-tight ${infoTextSize}`}
      >
        <span>{year}</span>
        <DotSpan />
        <div className="flex items-center space-x-1.5">
          {category === 'Movie' ? (
            <IconCategoryMovie />
          ) : (
            <IconCategoryTVSeries />
          )}
          <span>{category}</span>
        </div>
        <DotSpan />
        <span>{rating}</span>
      </div>
      <h3 className={`font-medium leading-tight ${titleTextSize}`}>{title}</h3>
    </div>
  );
}
