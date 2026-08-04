import MyAddressHeader from "../components/MyAddressHeader";
import AddressCard from "../components/AddressCard";
import UserAddressForm from "../components/UserAddressForm";
import API from "../services/axios";
import { useEffect, useState } from "react";

function MyAddress() {
  const [addresses, setAddresses] = useState([]);
  const [editingAddressId, setEditingAddressId] = useState(null);

  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    house_name: "",
    street_address: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    landmark: "",
    address_type: "Home",
    is_default: false,
  });

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
    <div className="my-address-page">
      <MyAddressHeader />
      <div className="row mt-5 g-4">
        {addresses.map((address, index) => (
          <div className="col-md-6" key={index}>
            <AddressCard address={address} setFormData={setFormData} setEditingAddressId={setEditingAddressId} />
          </div>
        ))}
      </div>
      <UserAddressForm setFormData={setFormData} formData={formData} editingAddressId={editingAddressId} setEditingAddressId={setEditingAddressId} getAddress={getAddress} />
    </div>
  );
}

export default MyAddress;
