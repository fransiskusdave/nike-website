import { footerLogo } from "../assets/images";
import { copyrightSign } from "../assets/icons";
import { socialMedia, footerLinks } from "../constants";

const Footer = () => {
  return (
    <div className="max-container w-full">
      <div className="flex justify-between flex-wrap max-lg:flex-col gap-20">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="Footer Logo" width={150} height={46} />
            <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect Size in Store. Get Rewards
            </p>
            <div className="flex items-center gap-5 mt-8">
              {socialMedia.map((media) => (
                <div
                  key={media.alt}
                  className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                >
                  <img src={media.src} alt={media.alt} width={24} height={24} />
                </div>
              ))}
            </div>
          </a>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.title}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {footerLink.title}
              </h4>
              <ul>
                {footerLink.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                  >
                    <a href="">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center pt-5 border-t border-slate-gray">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="Copyright Sign"
            width={20}
            height={20}
            className="rounded-full object-contain m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
