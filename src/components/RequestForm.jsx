import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";
import "./RequestForm.css";

const RequestForm = () => {
  const { t } = useTranslation(); // i18n hook
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    specialization: "",
    email: "",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/firmst-form/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(t("requestForm.success_message"), { position: "top-center" });
        console.log(data.message); // Handle success response

        // Clear the form data after successful submission
        setFormData({
          name: "",
          phone: "",
          specialization: "",
          email: "",
          acceptTerms: false,
        });
      } else {
        const errorData = await response.json();
        console.error("Error from server:", errorData.message);
        toast.error(t("requestForm.error_message"), { position: "top-center" });
      }
    } catch (err) {
      console.error("Error submitting the form:", err);
      toast.error(t("requestForm.network_error_message"), { position: "top-center" });
    }
  };

  return (
    <section className="request-form-section" id="request-form-section">
      {/* Toast Container for notifications */}
      <ToastContainer />

      <div className="form-container">
        {/* Left Side */}
        <div className="form-left">
          <h2 className="form-heading">{t("requestForm.heading")}</h2>
          <p className="form-description">{t("requestForm.description")}</p>
        </div>

        {/* Right Side: Form */}
        <div className="form-right">
          <form onSubmit={handleSubmit} className="request-form">
            {/* Name Field */}
            <div className="form-group">
              <label>{t("requestForm.name")}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t("requestForm.name")}
              />
            </div>

            {/* Contact Number Field with Country Code */}
            <div className="form-group">
              <label>{t("requestForm.contact")}</label>
              <PhoneInput
                country={"ru"}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputStyle={{
                  width: "100%",
                  height: "40px",
                  fontSize: "16px",
                }}
              />
            </div>

            {/* Specialization of Interest */}
            <div className="form-group">
              <label>{t("requestForm.specialization")}</label>
              <input
                type="text"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                required
                placeholder={t("requestForm.specialization")}
              />
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label>{t("requestForm.email")}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t("requestForm.email")}
              />
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                required
                id="acceptTerms"
              />
              <label htmlFor="acceptTerms">
                {t("requestForm.accept_terms")}{" "}
                <a href="#">{t("requestForm.terms_conditions")}</a>
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-button">
              {t("requestForm.submit")}
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <hr className="footer-line" />
        <p>&copy; 2024 EAFO. Все права защищены.</p>
      </div>
    </section>
  );
};

export default RequestForm;
