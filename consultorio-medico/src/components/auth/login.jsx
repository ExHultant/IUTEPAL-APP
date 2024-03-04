import logo from "../../assets/iutepal-logo.png";
import { Dialog, DialogPanel, Metric, TextInput } from "@tremor/react";
import { Button } from "@tremor/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();


  const handleLogin = (event) => {
    event.preventDefault();
    if (email === "chavezmataricardo@gmail.com" && password === "test12345") {
      navigate("/inicio");
    } else {
      setIsOpen(true);
    }
  };
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
          <form
            className="space-y-6"
            action="#"
            method="GET"
            onSubmit={handleLogin}
          >
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
          {isOpen && (
            <Dialog
              open={isOpen}
              onClose={(val) => setIsOpen(val)}
              static={true}
            >
              <DialogPanel>
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <strong className="font-bold">Error!</strong>
                  <span className="block sm:inline">
                    {" "}
                    Contraseña o correo inválido. Por favor, intente nuevamente.
                  </span>
                </div>
                <Button
                  className="mt-8 w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Entendido!
                </Button>
              </DialogPanel>
            </Dialog>
          )}
        </div>
      </div>
    </>
  );
}
