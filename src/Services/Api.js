
import axios from "axios";

//esta url e de mocp api
const URL = "https://616b5ec016c3fa0017171694.mockapi.io/Productos";

const Api = async () => {
  try {
    const { data } = await axios.get(URL);
    console.log('data de '  ,data)
    return data
  } catch (error) {
    throw error;
  }
};

const crearProducto = async (nuevoProducto) => {
    try {
        const headers = {
            "Content-Type": "application/json",
        };
        //axios siempre me va devolver La propiedad data, donde esta la rpta del servidor
        //axios cuando hace POST, PUT necesita no solo la URL
        //axios.post(URL, objACrear, (headers})
        const { data }= await axios.post (URL, nuevoProducto, { headers });
        return data;
     } catch (error) {
        throw error;
     }
};
export {Api,crearProducto}















