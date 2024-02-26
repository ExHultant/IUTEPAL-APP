import { useState } from "react";
import { Sidebar } from "../../Layout";
import { Avatar } from "@mui/material";

function ProfilePage() {
  const [perfil, setPerfil] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerfil(prevPerfil => ({
      ...prevPerfil,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del perfil al servidor
    console.log('Perfil guardado:', perfil);
  };
  return (
    <Sidebar pageTitle={"Perfil"}>
      <div className="flex">
        <Avatar src="/broken-image.jpg" sx={{ width: 250, height: 250 }} />
        <div className="mx-6 mt-16">
          <h2 className="text-primary text-3xl font-bold">
            Ricardo Chavez Mata
          </h2>
          <h3 className="text-secondary-foreground">chavezmataricardo@gmail.com</h3>
          <h4 className="text-secondary-foreground">fecha de creacion del usuario</h4>
        </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">Editar Perfil de Usuario</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nombre" className="block mb-1">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={perfil.nombre} onChange={handleChange} placeholder="Ingrese su nombre" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
        </div>

        <div>
          <label htmlFor="apellido" className="block mb-1">Apellido:</label>
          <input type="text" id="apellido" name="apellido" value={perfil.apellido} onChange={handleChange} placeholder="Ingrese su apellido" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1">Correo Electrónico:</label>
          <input type="email" id="email" name="email" value={perfil.email} onChange={handleChange} placeholder="Ingrese su correo electrónico" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
        </div>

        <div>
          <label htmlFor="telefono" className="block mb-1">Teléfono:</label>
          <input type="text" id="telefono" name="telefono" value={perfil.telefono} onChange={handleChange} placeholder="Ingrese su número de teléfono" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>

        <div>
          <label htmlFor="direccion" className="block mb-1">Dirección:</label>
          <textarea id="direccion" name="direccion" value={perfil.direccion} onChange={handleChange} placeholder="Ingrese su dirección" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Guardar Cambios</button>
      </form>
    </Sidebar>
  );
}

export default ProfilePage;
