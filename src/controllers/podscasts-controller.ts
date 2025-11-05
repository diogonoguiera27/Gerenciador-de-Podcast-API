import { IncomingMessage, ServerResponse } from "http";

export const getListEpisodes = (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { "content-type": "application/json" });
  res.end(
    JSON.stringify([
      {
        podcastName: "flow",
        episode: "CBUM - Flow #319",
        videoId: "QSuQmUfS30",
        category: ["saude", "bodybuilder"],
      },
      {
        podcastName: "flow",
        episode: "RUBENS BARRICHELLO - Flow #339",
        videoId: "QSuQmUfS30",
        category: ["esporte", "corrida"],
      },
    ])
  );
};
