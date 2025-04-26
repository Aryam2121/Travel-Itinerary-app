const Button = ({ children, onClick, className = "", type = "button", icon = null }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`flex items-center justify-center gap-2 bg-[#EEF2FF] hover:bg-[#dbe0ff] text-blue-700 font-semibold text-sm px-4 py-2 rounded-lg transition-all duration-200 ${className}`}
      >
        {icon && <span>{icon}</span>}
        {children}
      </button>
    );
  };
  
  export default Button;
  