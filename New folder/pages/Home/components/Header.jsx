const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="font-medium normal-case text-xl">TokPlay</a>
      </div>
      <div className="flex-none">
        <button className="btn">Login</button>
      </div>
    </div>
  );
};

export default Header;
