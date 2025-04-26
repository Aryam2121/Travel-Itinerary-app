const Header = () => {
    return (
      <div className="h-16 bg-white shadow-sm flex items-center justify-between px-6">
        <input type="text" placeholder="Search trips..." className="border p-2 rounded-lg w-1/3" />
        <div className="flex items-center gap-4">
          <span>🔔</span>
          <img src="https://via.placeholder.com/32" className="rounded-full" />
        </div>
      </div>
    );
  };
  
  export default Header;
  