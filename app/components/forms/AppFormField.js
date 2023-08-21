import React from "react";
import AppTextInput from "../AppTextInput";
import AppErrorMessage from "./AppErrorMessage";
import { useFormikContext } from "formik";

function AppFormField({ name, width, ...otherProps }) {
  const { touched, setFieldTouched, handleChange, errors } = useFormikContext();
  return (
    <>
      <AppTextInput
        width={width}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
