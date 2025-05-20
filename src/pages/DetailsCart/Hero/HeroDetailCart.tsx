import { assets } from "../../../assets/assets";
import Button from "../../../components/Button/Button";
import Asset from "../../../components/ImageComponent/Image"; 

const HeroDetailCart = () => {
  return (
    <div className="relative p-4">
      <div className="flex flex-col items-center justify-center gap-4">
        <Asset src={assets.freePoster1} className="rounded-md" />
        <h2 className="text-2xl font-bold text-white">Our film & lqbal</h2>
        <p className="flex items-center gap-2 text-sm font-thin text-amber-500">
          <Asset src={assets.plus15} />
          Suitable for ages 15 and up.
        </p>
        <div className="flex items-center justify-center gap-2 text-white my-4">
          <p className="flex flex-col items-center gap-1 text-sm">
            <Asset src={assets.comment} className="w-4 h-4" />
            commenting
          </p>
          <p className="flex flex-col items-center gap-1 text-sm">
            <Asset src={assets.download} className="w-4 h-4" />
            download
          </p>
          <p className="flex flex-col items-center gap-1 text-sm">
            <Asset src={assets.saveLater} className="w-4 h-4" />
            save later
          </p>
        </div>

        <Button className="w-full bg-green-500 flex items-center justify-center text-white gap-2 rounded-3xl py-2">
          Login and watch
          <Asset src={assets.play} className="w-4 h-4 font-bold" />
        </Button>
      </div>
    </div>
  );
};

export default HeroDetailCart;
