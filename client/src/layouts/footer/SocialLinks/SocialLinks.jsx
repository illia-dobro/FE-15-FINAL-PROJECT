import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoYoutube,
  BiLogoTwitter,
} from "react-icons/bi";

function SocialLinks() {
  return (
    <div className="flex gap-3 pt-10 pb-9 justify-center sm:justify-start">
      <a href="#" className="flex w-9 h-9  rounded-full bg-primary justify-center items-center">
        <BiLogoFacebook size={20} color='#555555' className="hover:fill-gray-950 transition-colors"/>
      </a>
      <a href="#" className="flex w-9 h-9 rounded-full bg-primary justify-center items-center">
        <BiLogoInstagram size={20} color='#555555' className="hover:fill-gray-950 transition-colors"/>
      </a>
      <a href="#"  className="flex w-9 h-9  rounded-full bg-primary justify-center items-center">
        <BiLogoYoutube size={20} color='#555555' className="hover:fill-gray-950 transition-colors"/>
      </a>
      <a href="#"  className="flex w-9 h-9  rounded-full bg-primary justify-center items-center">
        <BiLogoTwitter size={20} color='#555555' className="hover:fill-gray-950 transition-colors"/>
      </a>
    </div>
  );
}

export default SocialLinks;
