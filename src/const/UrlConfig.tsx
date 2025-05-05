import Config from 'react-native-config';

const apiUrl = Config.API_URL;

const aliasPhp = `${apiUrl}/nekopaper`;

const api_path = `${aliasPhp}/api`;

const user_path = `${api_path}/usuario`;
const list_path = `${api_path}/lista`;

export const login_path = `${user_path}/iniciar_sesion.php`;

export const show_images = `${list_path}/mostrar_imagenes.php`;


