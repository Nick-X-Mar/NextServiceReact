import React from 'react';
// import AppointmentForm from "../components/appointment_form/appointmentForm";

const ServiceHistory = () => {
  const isLoggedin = !!localStorage.getItem("token");

  return (
    <div>
      <h2>Service History</h2>
      {isLoggedin ? (
        // <AppointmentForm />
        <p>Test</p>
      ) : (
        <p>To see this section, you need to be logged in.</p>
      )}
    </div>
  );
};

export default ServiceHistory;
