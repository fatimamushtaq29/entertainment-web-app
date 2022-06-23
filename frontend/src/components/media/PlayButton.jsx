import { ReactComponent as IconPlay } from '../../images/icon-play.svg';

export default function PlayButton() {
  return (
    <div
      className="hidden items-center space-x-[18px] rounded-[28.5px]
                  bg-white/25 w-[117px] p-[9px] absolute top-[50%] left-[50%]
                    translate-x-[-50%] translate-y-[-50%] group-hover:flex"
    >
      <IconPlay />
      <span className="font-medium text-lg leading-tight">Play</span>
    </div>
  );
}
