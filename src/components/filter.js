import React from "react";
import { Formik, Form, Field } from "formik";
import DatePicker from "react-datepicker";
import {  subDays, addDays, subMonths } from "date-fns";
import {  useState } from "react";

import "react-datepicker/dist/react-datepicker.css";

function Filter() {


  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();


  return (
    <Formik
      initialValues={{
        work: "",
        startDate: "",
        endDate: "",
      }}
      onSubmit={(values) => {
        console.log(JSON.stringify(values, null, 2));
      }}
    >
      { ( ) => (
        <Form>
          <label>Work</label>
          <br />
          <Field as="select" name="work">
            <option disabled value="">
              Choose...
            </option>
            <option value="Clinic">Clinic</option>
            <option value="Hospital">Hospital</option>
          </Field>
          <br />

          <label>Start Date:</label>

          <Field name="startDate">
            {({ field, form: { setFieldValue } }) => {
              return (
                <DatePicker
                  {...field}
                  dateFormat="dd-MM-yyyy"
                  selected={field.value}
                  dropdownMode="select"
                  minDate={subDays(endDate, 30)}
                  maxDate={subDays(endDate ,2)}
                  showMonthDropdown
                  showYearDropdown
                  onChange={(val) => {
                    setFieldValue(field.name, val);
                    setStartDate(val);
                  }}
                />
              );
            }}
          </Field>


          <label>End Date:</label>

          <Field name="endDate">
            {({ field, form: { setFieldValue } }) => {
              return (
                <DatePicker
                  {...field}
                  dateFormat="dd-MM-yyyy"
                  selected={field.value}
                  dropdownMode="select"
                  showMonthDropdown
                  showYearDropdown
                  minDate={subMonths(new Date(), 1)}
                  maxDate={addDays(new Date(),-1)}
                  onChange={(val) => {
                    setFieldValue(field.name, val);
                    setEndDate(val);
                  }}
                />
              );
            }}
          </Field>
          <br/>

          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
export default Filter;
