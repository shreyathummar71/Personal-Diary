import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-primary p-5 text-white font-aclonica">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start">
          <img src="images/logo.png" className="w-[10%]" alt="footer logo" />
          <nav className="text-white ml-9">
            <Link to="/" className="mr-9 w-full float-start">
              Home
            </Link>
            <Link to="/" className="w-full float-start">
              My Favorite Diary
            </Link>
          </nav>
        </div>
        <div>
          <img
            src="images/Instagran.png"
            className="float-start h-9 w-9"
            alt="Instagram"
          />
          <img
            src="images/Facebook.png"
            className="float-start ml-4 h-9 w-9"
            alt="Facebook"
          />
          <img
            src="images/Pinterest.png"
            className="float-start ml-4 h-9 w-9"
            alt="Pinterest"
          />
        </div>
      </div>
      <div className="text-center">
        Copyright © 2024. All Rights Reserved My Diary
      </div>
    </div>
  );
};

export default Footer;
