import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from "./controllers/podscasts-controller"
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";


const server = http.createServer( async(request:http.IncomingMessage, response: http.ServerResponse)=>{
    
   
    const [baseUrl, queryString ] = request.url?.split("?") ?? ["", ""]

    console.log(baseUrl)
    
    console.log(queryString)
    // litar podcasts
    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST){
     await getListEpisodes(request, response);
    }
    if(request.method === HttpMethod.GET && baseUrl === Routes.ESPISODE){
        await getFilterEpisodes(request, response)
    }
 }
);

const  port = process.env.PORT

server.listen(port, ()=>{
    console.log(`Servidor iniciado na Porta ${port}`)
})