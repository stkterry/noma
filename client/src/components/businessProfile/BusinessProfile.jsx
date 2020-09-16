import React, { useState, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { withRouter, Link } from 'react-router-dom';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import LoremParagraph from "../util/LoremParagraph";
import AgreementText from "../util/AgreementText";
import BtnDef from '../buttons/BtnDef';
import Select from "../formComponents/Select";
import { countryList, statesList } from "../util/lists";

const phoneStyle={
  width: "99.5%",
  marginTop: ".8rem",
  marginBottom: ".8rem",
}
const inputStyle={
  border: "none",
  fontSize: "1.6rem",
  width: "100%",
  height:"100%",
  border: "1px solid lightgray",
  borderRadius: ".8rem",
}

const disabledStyle = {
  backgroundColor: "lightGray", borderColor: "gray"
}

const errStyle = {
  borderColor: 'red'
}

const defaultValues = {
  primaryFirstName: "",
  primaryMiddleIni: "",
  primaryLastName: "",
  primaryContactEmail: "",
  primaryContactNum: "",

  businessName: "",
  registrationNum: "",
  businessNum: "",

  businessCountry: "none",
  businessStreetAdr: "",
  businessOptAdr: "",
  businessCity: "",
  businessState: "none",
  businessZip: ""
}

export default withRouter(function BusinessProfile(props) {

  const onSubmit = formData => {
    props.updateProfile({ profileData: formData, userId: props.userId });
    props.history.push("/landing");
  }

  const { watch, register, handleSubmit, setValue, errors } = useForm({ defaultValues });
  
  // Watch for changes to business street address to enable/disable the optional field
  const [opt, setOpt] = useState(true);
  const watchStreetAdr = watch("businessStreetAdr");
  useEffect(() => {
    let avl = !!!watchStreetAdr;
    if (avl) setValue("businessOptAdr", "") 
    setOpt(avl);
  }, [watchStreetAdr]);
  
  // Watch for changes to business country to enable/disable US states listing
  const [stateAvl, setStateAvl] = useState(false);
  const watchCountry = watch("businessCountry");
  useEffect(() => {
    let avl = !(watchCountry === "United States of America (the)");
    if (avl); setValue("businessState", "none");
    setStateAvl(avl);
  }, [watchCountry])
  
  return (
    <div id="form-page">
      <div id="businessProfile">
        <h2 className="logoHead">NOMADORY</h2>
        <form className="form-default" onSubmit={handleSubmit(onSubmit)}>

          <div className="formHead">
            <h2>Tell us about your business</h2>
            <h5>We'll confirm your information and keep your account secure</h5>
          </div>

          <h2 className="blockHead">Primary Contact</h2>
          <div className="formBlock">
            <div className="formBlock-inputs">
            <input
              name="primaryFirstName"
              type="text"
              ref={register}
              placeholder="First name"
              required
            />
            <br />
            <div className="inputOpt">
              <input
                name="primaryMiddleIni"
                type="text"
                ref={register}
                placeholder="Middle initial"
              />
              <h3>(Optional)</h3>
              <br />
            </div>
            <input
              name="primaryLastName"
              type="text"
              ref={register}
              placeholder="Last name"
              required
            />
            <br />
            <input
              name="primaryContactEmail"
              type="text"
              ref={register}
              placeholder="Email"
              required
            />
            <br />
            <PhoneInput
              name="primaryContactNum"
              type="text"
              country={'us' + 'Phone number'}
              inputRef={register({ required: true })}
              placeholder="Phone number"
              containerStyle={phoneStyle}
              inputStyle={inputStyle}
              required
            />
            </div>
            <LoremParagraph />
          </div>

          <h2 className="blockHead">Business Details</h2>
          <div className="formBlock">
            <div className="formBlock-inputs">
              <input
                name="businessName"
                type="text"
                ref={register}
                placeholder="Legal business name"
                required
              />
              <br />
              <input
                name="registrationNum"
                type="number"
                ref={register}
                placeholder="Registration number"
                required
              />
              <br />
              <PhoneInput
                name="businessNum"
                type="text"
                country={'us' + 'Phone number'}
                inputRef={register({ required: true })}
                placeholder="Phone number"
                containerStyle={phoneStyle}
                inputStyle={inputStyle}
              />
            </div>
            <LoremParagraph />
          </div>

          <h2 className="blockHead">Business Address</h2>
          <div className="formBlock">
            <div className="formBlock-inputs">

              <Select 
                name="businessCountry"
                register={register}
                placeholder="Select Country"
                options={countryList}
                required
              />
              <br />
              <input
                name="businessStreetAdr"
                type="text"
                ref={register}
                placeholder="Street address"
                required
              />
              <br />
              <input
                name="businessOptAdr"
                type="text"
                ref={register}
                placeholder="Apt, ste., bldg.,"
                disabled={opt}
                style={ opt ? disabledStyle : {} }
              />
              <br />
              <input
                name="businessCity"
                type="text"
                ref={register}
                placeholder="City"
                required
              />
              <br />
              <Select
                name="businessState"
                register={register}
                placeholder="State"
                options={statesList}
                disabled={stateAvl}
                style={ stateAvl ? disabledStyle : {}}
              />
              <br />
              <input
                name="businessZip"
                type="number"
                ref={register}
                placeholder="Zip code"
                required
              />
              <br />
            </div>
            <LoremParagraph />
          </div>

          <div className="formBlock">
            <div className="formBlock-agreement">
              <input 
                name="userAgreement"
                type="checkbox"
                required
              />
              <AgreementText />
              <br />
            </div>
          </div>

          <div className="formBlock-inputs">
            <BtnDef onClick={handleSubmit}>Agree and Continue</BtnDef>
          </div>
        </form>

      </div>
    </div>
  )

})