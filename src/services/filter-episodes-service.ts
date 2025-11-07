import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repository/podcasts-repository"
import { PodcastTrnasferModel } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async (podcastName: string | undefined ):Promise<PodcastTrnasferModel> => {

    // define a interface de Retorno 
    let responseFormat:  PodcastTrnasferModel = {
        StatusCode: 0 ,
        body: [],

    }

    // buscando os dados
    const queryString = podcastName?.split("?p=")[1] || ""
    
    const data = await repositoryPodcast(queryString);

     // verifico se tem conteudo
    responseFormat.StatusCode = data.length !== 0 ?  StatusCode.OK : StatusCode.NoContent

    
        responseFormat.body = data;
    return responseFormat;
}