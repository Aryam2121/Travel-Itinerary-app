import { trips } from '../../services/mockData'; // Ensure mockData is imported correctly
import ItineraryItem from './ItineraryItem';

const ItineraryList = ({ setSelectedTrip }) => {
    console.log('setSelectedTrip received in ItineraryList:', setSelectedTrip); // Log to verify
  
    return (
      <div className="w-1/3 p-4 overflow-y-auto">
        {trips.map((trip) => (
          <ItineraryItem 
            key={trip.id} 
            trip={trip} 
            onClick={() => setSelectedTrip(trip)} // Set the selected trip
          />
        ))}
      </div>
    );
  };
  
  export default ItineraryList;
  
