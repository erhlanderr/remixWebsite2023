import React from "react";
import SectionWrappers from "../components/sectionWrappers";
import DropDown from "./DropDown";
import Grid from "./partials/Grid";
import ContactForm from "./ContactForm";
import SectionTitle from "./partials/SectionTitle";

const SectionWrappedDropDownContactForm = ({
  sectionCustomClasses,
  textAlignment,
  sectionSize,
  sectionIsEqual,
  title,
  subtitle,
  dropdownBackground,
  dropdownHeaderColour,
  padlessBottom,
  hasDropDown,
  contactTitle,
  contactSubtitle,
}) => {
  return (
    <SectionWrappers
      sectionSize={sectionSize}
      sectionIsEqual={sectionIsEqual}
      sectionCustomClasses={sectionCustomClasses ? sectionCustomClasses : ""}
      textAlignment={textAlignment ? textAlignment : ""}
      noContainer={true}
      padlessBottom={true}
    >
      {hasDropDown ? (
        <DropDown
          title={title}
          subtitle={subtitle}
          dropdownHeaderColour={dropdownHeaderColour}
          dropdownBackground={dropdownBackground}
        />
      ) : (
        <Grid multiline={true} isOffset={true}>
          <SectionTitle title={contactTitle}>
            <p>Send us an enquiry to get the ball rolling.</p>
          </SectionTitle>
          <ContactForm
            dropdownHeaderColour={dropdownHeaderColour}
            dropdownBackground={dropdownBackground}
          />
        </Grid>
      )}
    </SectionWrappers>
  );
};

export default SectionWrappedDropDownContactForm;
