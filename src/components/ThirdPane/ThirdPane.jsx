const ThirdPane = ({ closePane }) => {
    return (
      <div className="w-1/3 p-6 bg-gray-100 border-l relative">
        <button 
          className="absolute top-4 right-4 text-red-600"
          onClick={closePane}
        >
          ❌
        </button>
        <h2 className="text-xl font-bold mb-4">Third Pane Details</h2>
        <p>This is your third pane content. You can put maps, expenses, anything here.</p>
      </div>
    );
  };
  
  export default ThirdPane;
  