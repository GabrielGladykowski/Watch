import { TypeOfPointsHours, TypeOfPointsSmall } from "./Point.data";

export type PointsType = 
    | ({ type: 'Small' } & TypeOfPointsSmall)
    | ({ type: 'Hours' } & TypeOfPointsHours);