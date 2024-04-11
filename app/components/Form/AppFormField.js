import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet } from "react-native";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
import AppText from "../AppText";

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
      {errors[name] && touched[name] ? (
        <ErrorMessage error={errors[name]} visible={touched[name]} />
      ) : (
        <AppText> </AppText>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
export default AppFormField;
