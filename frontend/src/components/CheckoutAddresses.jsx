import AddressCard from "./AddressCard";
import { useEffect, useState } from "react";
import API from "../services/axios";

function CheckoutAddresses() {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const getAddress = async () => {
    try {
      const response = await API.get("/account/addresses/");
      setAddresses(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAddress();
  }, []);

  return (
    <>
      <h2 className="shipping-address-title">Shipping Address</h2>
      <div className="row g-3">
        {addresses.map((address, index) => (
          <div className="col-md-6" key={index}>
            <AddressCard address={address} selectable={true} selected={selectedAddress === address.id} onSelect={() => setSelectedAddress(address.id)} />
          </div>
        ))}
      </div>
    
    </>
  );
}

export default CheckoutAddresses;
