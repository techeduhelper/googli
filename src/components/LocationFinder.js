// "use client";
// import React, { useState, useEffect } from "react";
// import ipstack from "ipstack";
// import dotenv from "dotenv"

// const LocationFinder = () => {

//     const [location, setLocation] = useState(null);

//     useEffect(() => {
//         dotenv.config();
//         const ip = navigator.ip;
//         ipstack.getCountry(ip, {
//             access_key: process.env.LOCATION_ACCESS_API_KEY,
//         }).then((data) => {
//             setLocation(data);
//         });
//     }, []);

//     return (
//         <div>
//             {location && (
//                 <h1>{location.country_name}</h1>
//             )}
//         </div>
//     );
// }

// export default LocationFinder