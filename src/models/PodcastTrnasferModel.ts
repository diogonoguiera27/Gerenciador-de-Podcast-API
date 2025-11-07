import { PodcastModel } from "./podcast-models";

export interface PodcastTrnasferModel {
    StatusCode: number,
    body: PodcastModel[]
}