import { PodcastModel } from "./podcast-models";

export interface FilterPodCastModel {
    StatusCode: number,
    body: PodcastModel[]
}