import React, { useEffect } from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";

function AppFormField({ icon, name, width, onErrorChange, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  React.useEffect(() => {
    onErrorChange(errors[name] && touched[name]);
  }, [errors[name], touched[name], onErrorChange]);

  return (
    <>
      <AppTextInput
        icon={icon}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        error={errors[name] && touched[name]}
        {...otherProps}
      />
    </>
  );
}

export default AppFormField;
