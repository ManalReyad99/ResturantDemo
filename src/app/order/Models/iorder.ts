import { OnChanges } from "@angular/core";
import { IAdditionalMeal } from "./iadditional-meal";
import { IMealType } from "./imeal-type";

export interface IOrder {

    id:number;
    quantity :number;
    orderDate:Date;
    remaining_Quantity :number;
    mealTypes :IMealType[];
    other_meals :IAdditionalMeal[];
    subscriberId :number;
}
