import React, { useState } from "react";
import { useFormik } from "formik";
import { profileSchema } from "../../../src/schema";
import { Country, State, City } from "country-state-city"

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  password: "",
  confirm_password: "",
  user_name: "",
};

function Profile() {
  const [states, setStates] = useState([]);
  const country = Country.getAllCountries();

  const handleCountry = (event) => {
    const isoCode = event.target.value;
    //console.log(Country.getCountryByCode(isoCode))
    // console.log(State.getStatesOfCountry(isoCode))
     setStates(State.getStatesOfCountry(isoCode));
    // console.log(State.getStatesOfCountry(isoCode))

    event.preventDefault();
  }
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: profileSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  console.log(errors);

  return (
    <>
      <div className=" p-7 flex justify-center"
        style={{ backgroundColor: "#d4d4d4", minHeight: "100vh" }}>

        <div className=" text-gray-800 text-xl">
          <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className=" grid grid-cols-2 gap-2">
              <div className="m-3 flex items-center">
                <div className=" flex flex-col">
                  <label htmlFor="name" className="m-1">
                    First Name :
                  </label>
                  <input
                    type="name"
                    autoComplete="off"
                    name="first_name"
                    id="first_name"
                    placeholder="first_name"
                    value={values.first_name}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    className=" bg-slate-400 flex-1 w-full  rounded-xl px-4 py-2 focus:outline-none focus:shadow-outline"
                  />
                  {errors.first_name && touched.first_name ? (
                    <p className=" text-red-600 text-sm">{errors.first_name}</p>
                  ) : null}
                </div>
              </div>

              <div className="m-3 flex items-center">

                <div className="flex flex-col">
                  <label htmlFor="name" className="m-1 ">
                    Last Name :
                  </label>
                  <input
                    type="name"
                    autoComplete="off"
                    name="last_name"
                    id="last_name"
                    placeholder="last_name"
                    value={values.last_name}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    className=" bg-slate-400 w-full flex-1 rounded-xl px-4 py-2 focus:outline-none focus:shadow-outline"
                  />
                  {errors.last_name && touched.last_name ? (
                    <p className=" text-red-600 text-sm">{errors.last_name}</p>
                  ) : null}
                </div>
              </div>
              <div className="m-3 flex items-center">
                <div className="flex flex-col">
                  <label htmlFor="email" className="m-1">
                    Email :
                  </label>
                  <input
                    type="email"
                    autoComplete="off"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    className=" bg-slate-400 w-full flex-1 rounded-xl px-4 py-2 focus:outline-none focus:shadow-outline"
                  />
                  {errors.email && touched.email ? (
                    <p className="text-red-600 text-sm">{errors.email}</p>
                  ) : null}
                </div>
              </div>
              <div className="m-3 flex items-center">
                <div className="flex flex-col">
                  <label htmlFor="Username" className="m-1">
                    User Name :
                  </label>
                  <input
                    type="name"
                    autoComplete="off"
                    name="user_name"
                    id="user_name"
                    placeholder="User Name"
                    value={values.user_name}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    className=" bg-slate-400 w-full flex-1 rounded-xl px-4 py-2 focus:outline-none focus:shadow-outline"
                  />
                  {errors.user_name && touched.user_name ? (
                    <p className="text-red-600 text-sm">{errors.user_name}</p>
                  ) : null}
                </div>
              </div>
              <div className="m-3 flex items-center">
                <div className="flex flex-col">
                  <label htmlFor="Username" className="m-1 ">
                    Country :
                  </label>         
                  <select
                    onChange={handleCountry}
                    // onBlur={handleBlur}
                    className=" bg-slate-400 rounded-xl flex-1 px-4 py-2 focus:outline-none focus:shadow-outline"
                    style={{ maxWidth: "70%" }} 
                  >
                    <option>--Select Country--</option>
                    {
                      country.map((country) => (
                        <option key={country.isoCode} value={country.isoCode}> {country.name}</option>
                      ))
                    }
                  </select>
                </div>
              </div>


              <div className="m-3 flex items-center">
                <div className="flex flex-col">
                  <label htmlFor="Username" className="m-1 ">
                    State :
                  </label>
                  <select
                    className=" bg-slate-400 flex-1 rounded-xl px-4 py-2  focus:outline-none focus:shadow-outline"
                    // onBlur={handleBlur}
                    style={{ maxWidth: "250px", minWidth:"250px"}} 
                 >
                    <option>--Select State--</option>
                    {
                      states.map((state) => (
                        <option key={state.isoCode} value={state.name}> {state.name}</option>
                      ))
                    }

                  </select>
                </div>
              </div>
              <div className="m-3 flex items-center">
                <div className="flex flex-col">
                  <label htmlFor="number" className="m-1 ">
                    Phone number :
                  </label>
                  <input
                    type="numbers"
                    autoComplete="off"
                    name="phone_number"
                    id="phone_number"
                    placeholder="phone_number"
                    value={values.phone_number}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    className=" bg-slate-400 flex-1 rounded-xl px-4 py-2 focus:outline-none focus:shadow-outline "
                  />
                  {errors.phone_number && touched.phone_number ? (
                    <p className="text-red-600 text-sm">{errors.phone_number}</p>
                  ) : null}
                </div>
              </div>

              <div className="m-3 flex items-center">

                <div className="flex flex-col">
                  <label htmlFor="password" className="m-1 ">
                    Password :
                  </label>
                  <input
                    type="password"
                    autoComplete="off"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    className=" bg-slate-400 flex-1 rounded-xl  px-2 py-2 focus:outline-none focus:shadow-outline"
                    style={{ maxWidth: "720px" }} 
                  />
                  {errors.password && touched.password ? (
                    <p className="text-red-600 text-sm">{errors.password}</p>
                  ) : null}
                </div>
              </div>
              <div className="m-3 flex items-center">
                <div className="flex flex-col" >
                  <label htmlFor="confirm_password" className="m-1">
                    Confirm Password :
                  </label>
                  <input
                    type="password"
                    autoComplete="off"
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="Confirm Password"
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className=" bg-slate-400  rounded-xl flex-1 px-2  py-2 focus:outline-none focus:shadow-outline"
                    style={{ width: "250px" }} 
                  />
                  {errors.confirm_password && touched.confirm_password ? (
                    <p className="text-red-600 text-sm">{errors.confirm_password}</p>
                  ) : null}
                </div>
              </div>



            </div>
            <button className=" bg-slate-800 flex  rounded-xl m-2 px-2 text-white p-1" type="submit">
              Registration
            </button>
          </form>
        </div>
      </div>
    </>
  );
}


export default Profile;
