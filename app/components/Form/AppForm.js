import { Formik } from "formik";

function AppForm({
  children,
  initialValues,
  onSubmit,
  style,
  validationSchema,
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
