import React, { useState, useEffect } from "react";

const HappyClients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch('http://15.206.178.245:5000/api/clients/getClients')
      .then(response => response.json())
      .then(data => {
        setClients(data);
        console.log(data)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Happy Clients
          </h2>
        </div>

      

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3   xl:grid-cols-5 gap-8">
          {clients.map((client) => (
            <div key={client.id || client._id} className="px-5 py-3 bg-white rounded-md shadow-md">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <img 
                  src={client.imageUrl} 
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {client.description}
              </p>
              
              <h3 className="text-blue-600 font-bold mb-1">
                {client.name}
              </h3>
              <p className="text-gray-500 text-sm">
                {client.designation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HappyClients;