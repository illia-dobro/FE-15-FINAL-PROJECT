import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoYoutube,
  BiLogoTwitter,
} from "react-icons/bi";

function SocialLinks() {
  return (
    <div className="flex gap-3 px-14 pt-10 pb-9">
      <div className="flex w-11 h-11 rounded-full bg-primary justify-center items-center">
        <BiLogoFacebook size={20} />
      </div>
      <div className="flex w-11 h-11 rounded-full bg-primary justify-center items-center">
        <BiLogoInstagram size={20} />
      </div>
      <div className="flex w-11 h-11 rounded-full bg-primary justify-center items-center">
        <BiLogoYoutube size={20} />
      </div>
      <div className="flex w-11 h-11 rounded-full bg-primary justify-center items-center">
        <BiLogoTwitter size={20} />
      </div>
    </div>
  );
}

export default SocialLinks;
