import React, { useEffect } from 'react';
import axios from 'axios';

const LandingPage = () => {

  useEffect(() => {

    // (async () => {
    //   try {
    //     const response = await axios.get('/api/hello');
    //     console.log(response.data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // })();

    axios.get('/api/hello')
    .then(response => { console.log(response) })

  }, []);

  return (
    <div>
      LandingPage
    </div>
  );
};

export default LandingPage;