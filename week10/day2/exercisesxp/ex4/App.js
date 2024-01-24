import React from "react";

const App = () => {
  const apiUrl = "https://webhook.site/e3ffeffb-8770-4fe3-ab2f-6de486c98934"; 
  
  const fetchData = async () => {
    const dataToSend = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers if required
        },
        body: JSON.stringify(dataToSend),
      });

      const responseData = await response.json();
      console.log("Response from the server:", responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};

export default App;