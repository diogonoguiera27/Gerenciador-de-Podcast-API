import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { StatusCode } from "../utils/status-code";
import { ContentType } from "../utils/content-type";
import { PodcastTrnasferModel } from "../models/filter-podcast-model";

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
   const content: PodcastTrnasferModel = await serviceListEpisodes()

  res.writeHead(content.StatusCode, { "content-type": ContentType.JSON });
  res.write(JSON.stringify(content.body))
  res.end();
};

export const getFilterEpisodes = async ( req: IncomingMessage, res: ServerResponse)=> {
  
   const content: PodcastTrnasferModel = await serviceFilterEpisodes(req.url)


   res.writeHead(content.StatusCode, { "content-type": ContentType.JSON });
   res.write(JSON.stringify(content.body))
   res.end()
}
