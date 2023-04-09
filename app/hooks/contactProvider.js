import React, { useState } from "react";
import ContactContext from "./../hooks/contactContext";

const ContactProvider = (props) => {
  const [input, setInput] = useState({});

  const handleChange = (event) => {
    input[event.target.name] = event.target.value;
    setInput(input);
  };

  const initialFormValues = {
    input,
    handleChange,
    setInput,
  };
  return (
    <ContactContext.Provider key="contactContext" value={initialFormValues}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
