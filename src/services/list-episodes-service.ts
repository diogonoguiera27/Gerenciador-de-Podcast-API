import { PodcastTrnasferModel } from "../models/PodcastTrnasferModel";
import { repositoryPodcast } from "../repository/podcasts-repository";
import { StatusCode } from "../utils/status-code";

   let responseFormat:  PodcastTrnasferModel = {
        StatusCode: 0 ,
        body: [],

    }

export const serviceListEpisodes = async (): Promise<PodcastTrnasferModel> => {
  const data = await repositoryPodcast();

  // verifico se tem conteudo
      responseFormat = {
        StatusCode: data.length !== 0 ?  StatusCode.OK : StatusCode.NoContent,
        body:data
      }
  
      
  return responseFormat;
};
