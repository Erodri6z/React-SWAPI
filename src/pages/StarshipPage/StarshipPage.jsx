import { useState, useEffect } from 'react'
import { getStarship } from '../../services/sw-api'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const StarshipPage = () => {
    const [starshipDetails, setStarshipDetails] = useState({})
    const location = useLocation()
    
    useEffect(() => {
      const fetchDetails = async () => {
        const starshipDetails = await getStarship(location.state.starship.url)
        setStarshipDetails(starshipDetails)
      }
      fetchDetails()
      
    }, [location.state.starship.url])

    
  return (
    <>
      <h2>Starship Page Component</h2>
      {starshipDetails ?
      <>
        <div className="starshipdetails-container">
          <div>Name: {starshipDetails.name}</div>
          <div>Model: {starshipDetails.model} </div>
          <div>Pilot:</div>
          {starshipDetails.pilots?.length ?
          <>
            {pilotsObject.map(names =>
              <div key={pilots.names}>
                <h4>{pilot.names}</h4>
              </div>
              )}
          </>
          :
          <p>No Pilots</p>
          }
          <div><Link to='/'>Return</Link></div>
        </div>
      </>
      :
      <>
        <p>Loading Starship...</p>
      </>
      }
   </>
  );
}
 
export default StarshipPage;
