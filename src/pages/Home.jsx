import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import ItineraryList from '../components/ItineraryList/ItineraryList';
import ItineraryDetails from '../components/ItineraryDetails/ItineraryDetails';
import ThirdPane from '../components/ThirdPane/ThirdPane';


const Home = () => {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [openThirdPane, setOpenThirdPane] = useState(false);

  return (
    <>
      <Sidebar />
      <div className="flex flex-col flex-1 ml-64">
        {/* Main layout container with space for Sidebar */}
        <Header />
        <div className="flex flex-1 overflow-hidden">
          {/* Left panel for Itinerary List */}
          <div className="w-full lg:w-1/3 p-4">
            <ItineraryList setSelectedTrip={setSelectedTrip} />
          </div>
          {/* Right panel for Itinerary Details and Third Pane */}
          <div className="flex-1 p-4 overflow-auto">
            {selectedTrip && (
              <ItineraryDetails 
                trip={selectedTrip} 
                openThirdPane={() => setOpenThirdPane(true)} 
              />
            )}
            {openThirdPane && (
              <ThirdPane closePane={() => setOpenThirdPane(false)} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
