import * as Yup from "yup";
export function initialValues() {
  return {
    name: "",
    address: "",
    phone: "",
    email: "",
    description: "",
  };
}
export function validationSchema() {
  return Yup.object({
    name: Yup.string().required("Campo Obligatorio"),
    address: Yup.string().required("Campo Obligatorio"),
    phone: Yup.string().required("Campo Obligatorio"),
    email: Yup.string()
      .email("Correo electrónico inválido")
      .required("Campo Obligatorio"),
    description: Yup.string().required("Campo Obligatorio"),
  });
}
