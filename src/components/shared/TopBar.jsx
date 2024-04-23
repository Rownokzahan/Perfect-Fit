const TopBar = () => {
  return (
    <div className="py-3 px-[3%] border-b bg-white flex justify-end gap-6">
      <img
        src="https://randomuser.me/api/portraits/women/82.jpg"
        alt=""
        className="w-10 rounded-full border"
      />
      <button className="py-2 px-4 bg-primary-black rounded text-primary-white font-semibold">
        Logout
      </button>
    </div>
  );
};

export default TopBar;
