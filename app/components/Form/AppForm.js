import { Formik } from "formik";
import { View } from "react-native";

function AppForm({
  children,
  initialValues,
  onSubmit,
  style,
  validationSchema,
}) {
  return (
    <View style={style}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => <>{children}</>}
      </Formik>
    </View>
  );
}

export default AppForm;
