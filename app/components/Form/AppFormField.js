import { useFormikContext } from "formik";
import React from "react";

import AppTextInput from "../AppTextInput";

function AppFormField({
  icon,
  name,
  width,
  onErrorChange,
  onPressIcon,
  ...otherProps
}) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  if (onErrorChange) {
    React.useEffect(() => {
      onErrorChange(errors[name] && touched[name]);
    }, [errors[name], touched[name], onErrorChange]);
  }

  return (
    <>
      <AppTextInput
        icon={icon}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        onPressIcon={onPressIcon}
        width={width}
        error={errors[name] && touched[name]}
        {...otherProps}
      />
    </>
  );
}

export default AppFormField;
