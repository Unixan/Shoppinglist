import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";

function AppFormField({ icon, name, width, ...otherProps }) {
  const { setFieldTouched, handleChange } = useFormikContext();

  return (
    <>
      <AppTextInput
        icon={icon}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
    </>
  );
}

export default AppFormField;
