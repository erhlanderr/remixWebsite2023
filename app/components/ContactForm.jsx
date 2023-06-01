import React, { useContext, useState } from "react";
import useToggle from "./../hooks/useToggle";
import EmailModal from "./EmailModal";
import contactContext from "./../hooks/contactContext";
import SectionWrappedGrid from "./SectionWrappedGrid";

function ContactForm({
  hasSectionWrapper,
  isOffset,
}) {
  const [isOn, toggleIsOn] = useToggle();
  const [errors, setErrors] = useState({});
  const [modalContext, setModalContext] = useState({});

  const globalContext = useContext(contactContext);

  const openModal = () => {
    setModalContext({
      title: "Thank you",
      message: "We will reply as quickly as possible to your enquiry",
    });
    toggleIsOn();
  };

  const closeModal = () => {
    toggleIsOn();
    const timer = setTimeout(() => {
      setModalContext({});
    }, 1000);
    return () => clearTimeout(timer);
  };

  const validate = () => {
    let errors = {};
    let isValid = true;

    if (!globalContext.input["emailName"]) {
      isValid = false;
      errors["emailName"] = "Please enter your name.";
    }

    if (!globalContext.input["emailAddress"]) {
      isValid = false;
      errors["emailAddress"] = "Please enter your email address.";
    }

    if (typeof globalContext.input["emailAddress"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(globalContext.input["emailAddress"])) {
        isValid = false;
        errors["emailAddress"] = "Please enter valid email address.";
      }
    }

    if (!globalContext.input["emailMessage"]) {
      isValid = false;
      errors["emailMessage"] = "Please enter your enquiry.";
    }

    setErrors(errors);

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      fetch("/contact-us", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(globalContext.input),
      })
        .then((res) => res.json())
        .then(async (res) => {
          const resData = await res;
          if (resData.status === "success") {
            setModalContext({
              title: "Thank you",
              message: "We will reply as quickly as possible to your enquiry",
            });
            openModal();
            globalContext.setInput({});
          } else if (resData.status === "fail") {
            setModalContext({
              title: "Sorry",
              message:
                "The message was unable to be sent at the moment, please try calling us instead",
            });
            openModal();
            globalContext.setInput({});
          }
        });
    }
  };

  const ContactUsForm = () => {
    return (
      <>
        <EmailModal
          modalIsOn={isOn}
          modalCopy={modalContext}
          modalClose={() => closeModal()}
        />
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="column"
          id="contact-form"
          method="post"
        >
          <div>
            <div className="columns is-block">
              <div className="column">
                <div className="columns">
                  <div className="column is-half">
                    <field className="field has-help">
                      <div className="control is-expanded">
                        <input
                          type="text"
                          name="emailName"
                          id="name"
                          placeholder={
                            !globalContext.input.emailName
                              ? "Enter name"
                              : globalContext.input.emailName
                          }
                          className="input form-control"
                          onChange={(event) =>
                            globalContext.handleChange(event)
                          }
                        />
                      </div>
                      <div
                        className={`help has-warning has-text-left has-text-danger ${
                          errors.emailName ? "is-active" : ""
                        }`}
                      >
                        {errors.emailName}
                      </div>
                    </field>
                  </div>
                  <div className="column is-half">
                    <field className="field has-help">
                      <div className="control is-expanded">
                        <input
                          type="text"
                          id="email"
                          name="emailAddress"
                          placeholder={
                            !globalContext.input.emailAddress
                              ? "Email *"
                              : globalContext.input.emailAddress
                          }
                          className="input form-control"
                          onChange={(event) =>
                            globalContext.handleChange(event)
                          }
                        />
                      </div>
                      <div
                        className={`help has-warning has-text-left has-text-danger ${
                          errors.emailAddress ? "is-active" : ""
                        }`}
                      >
                        {errors.emailAddress}
                      </div>
                    </field>
                  </div>
                </div>
              </div>
              <div className="column">
                <field className="field has-help">
                  <div className="control is-expanded">
                    <input
                      type="text"
                      id="subject"
                      name="emailSubject"
                      placeholder={
                        !globalContext.input.emailSubject
                          ? "Subject"
                          : globalContext.input.emailSubject
                      }
                      className="input form-control"
                      onChange={(event) => globalContext.handleChange(event)}
                    />
                  </div>
                </field>
              </div>
              <div className="column">
                <field className="field has-help">
                  <div className="control is-expanded">
                    <textarea
                      rows="10"
                      id="message"
                      name="emailMessage"
                      placeholder={
                        !globalContext.input.emailMessage
                          ? "Send us your enquiry..."
                          : globalContext.input.emailMessage
                      }
                      className="textarea form-control"
                      onChange={(event) => globalContext.handleChange(event)}
                    ></textarea>
                  </div>
                  <div
                    className={`help has-warning has-text-left has-text-danger ${
                      errors.emailMessage ? "is-active" : ""
                    }`}
                  >
                    {errors.emailMessage}
                  </div>
                </field>
              </div>
              <div className="column is-full">
                <div className="columns">
                  <div className="column has-text-centered">
                    <button className="button is-medium" type="submit">
                      Send your enquiry
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  };

  return (
    <>
      {hasSectionWrapper ? (
        <SectionWrappedGrid isOffset={isOffset}>
          <ContactUsForm  />
        </SectionWrappedGrid>
      ) : (
        <ContactUsForm  />
      )}
    </>
  );
}

export default ContactForm;
