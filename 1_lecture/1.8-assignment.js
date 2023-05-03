/*  Travel Time
Create variables for 
  -distance (kilometers) 
  -speed (km / h)
Calculate and console.log travel time.
*/

const distanceInKm = 10
const speedInKmH = 60

const calculateTravelTime = (distance, speed) => {
  const hours = Math.floor(distance / speed);
  const minutes = Math.ceil(
    (distance % speed) / (speed / 60)
  );
  console.log(`Travel time: ${hours} : ${minutes}`)
}

calculateTravelTime(distanceInKm, speedInKmH)
calculateTravelTime(600, 80)