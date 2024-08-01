import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#704c3c] p-5">
      <nav className="text-white font-aclonica">
        <Link to="/" className="mr-9">
          Home
        </Link>
        <Link to="/">My Favorite Diary</Link>
      </nav>
    </div>
  );
};

export default Header;
