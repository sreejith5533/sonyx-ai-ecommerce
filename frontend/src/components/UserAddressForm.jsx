import { useState } from "react";
import API from "../services/axios";
import * as bootstrap from "bootstrap";
function UserAddressForm({
  formData,
  setFormData,
  editingAddressId,
  setEditingAddressId,
  getAddress,
}) {
  const validate = () => {
    const errors = {};

    const phoneRegex = /^\d{10}$/;
    const pincodeRegex = /^\d{6}$/;

    if (!formData.full_name.trim()) {
      errors.fullname = "Full name is required";
    }

    if (!phoneRegex.test(formData.phone)) {
      errors.phone = "Phone number must be 10 digits";
    }

    if (!formData.house_name.trim()) {
      errors.house_name = "House name is required";
    }

    if (!formData.street_address.trim()) {
      errors.street_address = "Street address is required";
    }

    if (!formData.city.trim()) {
      errors.city = "City is required";
    }

    if (!formData.state.trim()) {
      errors.state = "State is required";
    }

    if (!pincodeRegex.test(formData.pincode)) {
      errors.pincode = "Pincode must be 6 digits";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();

    if (Object.keys(errors).length > 0) {
      console.log(errors);
      return;
    }

    try {
      if (editingAddressId) {
        await API.put(`/account/addresses/${editingAddressId}/`, formData);
      } else {
        const response = await API.post("/account/addaddress/", formData);
        console.log(response.data);

        setFormData({
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
      }
    } catch (err) {
      console.log("Status:", err.response.status);
      console.log("Errors:", err.response.data);
    }

    await getAddress();

    setEditingAddressId(null);

    setFormData({
      full_name: "",
      phone: "",
      house_name: "",
      street_address: "",
      city: "",
      state: "",
      pincode: "",
      country: "",
      landmark: "",
      address_type: "home",
      is_default: false,
    });

    const modal = bootstrap.Modal.getInstance(
      document.getElementById("myModal"),
    );
    modal.hide();
  };

  return (
    <div class="modal fade" id="myModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">User Address Form </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div class="modal-body">
            <form className="address-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div class="mb-3">
                    <label>Full Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Full Name"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone">Mobile Number:</label>
                  <input
                    type="tel"
                    placeholder="Mobile number"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="house_name">
                  House / Flat / Apt No :
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="House / Flat / Apt No"
                  name="house_name"
                  value={formData.house_name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="street_address">Street / Area :</label>
                <input
                  type="text"
                  placeholder="Stree / Area"
                  className="form-control"
                  name="street_address"
                  value={formData.street_address}
                  onChange={handleChange}
                />
              </div>
              <div className="row mb-3">
                <div className="col-md-3">
                  <label className="form-label" htmlFor="city">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label" htmlFor="state">
                    State
                  </label>
                  <input
                    type="text"
                    placeholder="state"
                    className="form-control"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label" htmlFor="pincode">
                    Pincode
                  </label>
                  <input
                    type="text"
                    placeholder="pincode"
                    className="form-control"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label" htmlFor="country">
                    Country
                  </label>
                  <input
                    type="text"
                    placeholder="country"
                    className="form-control"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="landmark">
                  Landmark
                </label>
                <input
                  type="text"
                  placeholder="Landmark"
                  className="form-control"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Address Type</label>

                <div className="gap-3 address-type-div">
                  <button
                    type="button"
                    className={`btn btn-outline-secondary address-btn ${formData.address_type === "home" ? "active" : ""}`}
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        address_type:
                          prev.address_type === "home" ? "" : "home",
                      }))
                    }
                  >
                    Home
                  </button>

                  <button
                    type="button"
                    className={`btn btn-outline-secondary address-btn ${formData.address_type === "work" ? "active" : ""}`}
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        address_type:
                          prev.address_type === "work" ? "" : "work",
                      }))
                    }
                  >
                    Work
                  </button>

                  <button
                    type="button"
                    className={`btn btn-outline-secondary address-btn ${formData.address_type === "other" ? "active" : ""}`}
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        address_type:
                          prev.address_type === "other" ? "" : "other",
                      }))
                    }
                  >
                    Other
                  </button>
                </div>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="is_default"
                  name="is_default"
                  checked={formData.is_default}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      is_default: e.target.checked,
                    }))
                  }
                />

                <label className="form-check-label" htmlFor="is_default">
                  Set as primary shipping address
                </label>
              </div>
              <div className="d-flex justify-content-end gap-2 mt-4">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>

                <button type="submit" className="btn btn-success">
                  Save Address
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAddressForm;
