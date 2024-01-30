import logo from "../../assets/iutepal-logo.png";
import { Metric, TextInput } from "@tremor/react";
import { Button } from "@tremor/react";

export default function Login() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-20 w-auto" src={logo} alt="Your Company" />
          <Metric className="mt-10 text-center font-bold">
            Iniciar Sesión
          </Metric>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-700"
              >
                Correo Electrónico
              </label>
              <div className="mt-2">
                <TextInput
                  placeholder="Correo Electrónico"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-700"
                >
                  Contraseña
                </label>
                <div className="text-sm">
                  <Button
                    variant="light"
                    href="#"
                    className="font-bold text-gray-700 hover:text-secondary duration-300"
                  >
                    Olvido de Contraseña?
                  </Button>
                </div>
              </div>
              <div className="mt-2">
                <TextInput
                  placeholder="Contraseña"
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                />
              </div>
            </div>

            <div>
              <Button
                variant="primary"
                type="submit"
                className="flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:text-black shadow-sm hover:bg-terciary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terciary transition-all duration-500"
              >
                Iniciar Sesion
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
