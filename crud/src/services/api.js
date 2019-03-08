import { create } from 'apisauce'

const api = create({
    baseUrl: 'http://192.168.0.111:3000/v1/',
});

//fazer alterações com as respostas antes delas serem enviadas para o rn
api.addResponseTransform(response => {
    //enviar as respostas para o catch
   if(!response.ok) throw response;
});
//exportar para usar em outras partes do projeto
export default api;