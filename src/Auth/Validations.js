let pass =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}[^'\s]/;
export const validations = (input) => {
  let errors = {};

  if (!input.password) errors.password = "Ingresa tu contraseña";
  if (!pass.test(input.password))
    errors.password =
      "La contraseña tiene que tener una longitud entre 6 y 10 caracteres y al menos un numero y un simbolo.";
  return errors;
};
