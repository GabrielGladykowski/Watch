import { TypeOfNumber } from "../numbers/Numbers.data";
import { TypeOfPointsHours, TypeOfPointsSmall } from "./Point.data";

export type PointsType = 
    | ({ type: 'Small' } & TypeOfPointsSmall)
    | ({ type: 'Hours' } & TypeOfPointsHours)
    | ({ type: 'Number' } & TypeOfNumber);