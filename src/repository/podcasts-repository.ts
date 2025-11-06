import fs from "fs"
import path from "path"
import { Podcast } from "../models/podcast-models"



const pathData = path.join(__dirname, "../repository/podcasts.json")

export const repositoryPodcast = async (): Promise<Podcast[]>=> {
    const rawData = fs.readFileSync(pathData, "utf-8")
    const jsonfile = JSON.parse(rawData)
    return  jsonfile
}