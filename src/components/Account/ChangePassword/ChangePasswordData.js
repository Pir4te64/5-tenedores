import * as Yup from "yup";
export function initialValues() {
  return {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
}
export function validationSchema() {
  return Yup.object({
    oldPassword: Yup.string().required("La contraseña actual es requerida"),
    newPassword: Yup.string()
      .required("La nueva contraseña es requerida")
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
    confirmPassword: Yup.string()
      .required("La confirmación de la contraseña es requerida")
      .oneOf([Yup.ref("newPassword")], "Las contraseñas no coinciden"),
  });
}
