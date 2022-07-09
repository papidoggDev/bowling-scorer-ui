import { Frame } from "./frame";
export interface Scoresheet{
    id:number;
    userID:string;
    name:string;
    totalscore:number;
    frames: Frame[];
}
