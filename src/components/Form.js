import React, { useState } from "react";

function Form(props) {
  const [formData, setFormData] = useState({ firstName: "Sylvia", lastName: "Woods" });
  const [submittedData, setSubmittedData] = useState([]);
  const [errorMessages, setErrorMessages] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.firstName.length === 0) {
      setErrorMessages(["First name is required!"]);
    } else {
      setSubmittedData([...submittedData, formData]);
      setFormData({ firstName: "", lastName: "" });
      setErrorMessages([]);
    }
  };

  const listOfSubmissions = submittedData.map((data, index) => (
    <div key={index}>
      {data.firstName} {data.lastName}
    </div>
  ));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" onChange={handleInputChange} value={formData.firstName} />
        <input type="text" name="lastName" onChange={handleInputChange} value={formData.lastName} />
        <button type="submit">Submit</button>
      </form>

      {errorMessages.length > 0 &&
        errorMessages.map((errorMessage, index) => (
          <p key={index} style={{ color: "red" }}>
            {errorMessage}
          </p>
        ))}

      <h3>Submissions</h3>
      {listOfSubmissions}
    </>
  );
}

export default Form;
