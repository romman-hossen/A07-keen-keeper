import React from "react";
import logoXL from "../../assets/images/logo-xl.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";

const Footer = () => {
  return (
    <div className="bg-green-900">
      <div className="container mx-auto text-center">
        <div className="pt-20 pb-10 space-y-6 mx-4">
          <div className="space-y-4">
            <img className="mx-auto" src={logoXL} alt="logo" />
            <p className="text-white/80">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl text-white font-medium">Social Links</h3>
            <div className="flex justify-center gap-3 items-center">
              <a href="https://www.facebook.com/md.romman.7161">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="https://www.instagram.com/">
                <img src={instagram} alt="instagram"/>
              </a>
              <a href="https://x.com/">
                <img src={twitter} alt="twitter" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-b mb-8 border-green-800"></div>
        <div className="flex flex-col gap-6 sm:flex-row sm:mx-6 lg:mx-0 justify-between pb-8 text-white/70">
          <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row gap-6">
            <p>Privacy Policy</p>
            <p>Terms of Service </p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
