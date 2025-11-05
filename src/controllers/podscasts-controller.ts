import { IncomingMessage , ServerResponse} from "http"

export const getListEpisodes = (req : IncomingMessage, res: ServerResponse) => {
   res.writeHead(200, {"content-type": "application/json"}) ;
   res.end({
    name: "Diogo",
   });
}