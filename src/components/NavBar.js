const NavBar = () => {
  return (
    <div className="bg-neutral-600 shadow-lg p-3 rounded-xl">
      <ul className="flex space-x-5 row-auto text-white p-1">
        <li>
          <a href="#">Log</a>
        </li>
        <li>
          <a href="#">Users</a>
        </li>
        <li>
          <a href="#">Add</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
