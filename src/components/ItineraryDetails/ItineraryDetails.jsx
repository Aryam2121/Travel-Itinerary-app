const ItineraryDetails = ({ trip, openThirdPane }) => {
    console.log('ItineraryDetails trip:', trip);
    console.log('openThirdPane function:', openThirdPane);
    return (
      <div className="w-1/3 p-6 bg-white border-l">
        <h2 className="text-2xl font-bold mb-2">{trip.title}</h2>
        <p className="text-gray-500 mb-4">{trip.description}</p>
        <button 
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={openThirdPane}
        >
          View More Details
        </button>
      </div>
    );
  };
  
  export default ItineraryDetails;
  