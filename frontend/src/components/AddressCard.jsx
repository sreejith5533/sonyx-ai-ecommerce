import API from "../services/axios";
import { useEffect, useState } from "react";

function AddressCard({
  address,
  setFormData,
  setEditingAddressId,
  selectable = false,
  selected = false,
  onSelect,
}) {
  const handleEdit = async (address) => {
    setEditingAddressId(address.id);
    setFormData(address);
  };

  return (
    <div className="address-card card">
      <div className="address-header">
        <div className="address-type mb-2">
          {selectable && (
            <input
              type="radio"
              name="address"
              value={address.id}
              className="checked-input"
              checked={selected}
              onChange={onSelect}
            />
          )}
          <span className="active badge">
            <i className="fa-solid fa-location-dot"></i>
            <span>{address.address_type}</span>
          </span>
        </div>
        {!selectable && (
          <div className="address-edit-delete">
            <button
              className="edit-btn"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
              onClick={() => handleEdit(address)}
            >
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
            <button>
              <i className="fa-regular fa-trash-can"></i>
            </button>
          </div>
        )}
      </div>
      <h4 className="address-name">{address.full_name}</h4>
      <p className="address-number">{address.phone}</p>
      <p className="address-address mt-3">
        {address.house_name}, {address.street_address}, {address.landmark},{" "}
        {address.city}, {address.state}, {address.pincode}, {address.country}
      </p>
      <div className="address-line"></div>
    </div>
  );
}

export default AddressCard;
