import React from 'react';

const Location = () => {
   return (
      <div className="location_wrapper">

         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.4790885375473!2d-64.35579254891337!3d-33.12277608077518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2001372f08a1d%3A0xf420106a443fa5f1!2sPescaderia+El+Dorado+Suc%2C+Rio+Cuarto%2C+Cordoba!5e0!3m2!1ses-419!2sar!4v1546000208474"
            width="100%"
            height="500px"
            frameBorder="0"
            allowFullScreen></iframe>

         <div className="location_tag">
            <div>Location</div>
         </div>

      </div>
   );
};

export default Location;