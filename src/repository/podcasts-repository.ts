import fs from "fs"
import path from "path"
import { PodcastModel } from "../models/podcast-models"



const pathData = path.join(__dirname, "../repository/podcasts.json")

export const repositoryPodcast = async (podcastName?: string): Promise<PodcastModel[]>=> {

    const Language = "utf-8"
    const rawData = fs.readFileSync(pathData, Language)
    let jsonfile = JSON.parse(rawData)

    if(podcastName){
        jsonfile = jsonfile.filter((podcast: PodcastModel)=> podcast.podcastName === podcastName)
    }


    return  jsonfile
}