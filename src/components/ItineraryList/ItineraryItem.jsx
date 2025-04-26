const ItineraryItem = ({ trip, onClick }) => {
    console.log('ItineraryItem trip:', trip);
    return (
      <div 
        className="bg-white p-4 mb-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
        onClick={onClick}
      >
        <h2 className="text-lg font-semibold">{trip.title}</h2>
        <p className="text-gray-500">{trip.date}</p>
      </div>
    );
  };
  
  export default ItineraryItem;
  