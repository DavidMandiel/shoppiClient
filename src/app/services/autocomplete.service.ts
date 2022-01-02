import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {
cities = ['Tel Aviv','Jerusalem','Haifa','Be\'er Sheva','Rishon-Le Zion','Natanya', 'Kfar-Saba', 'Rahat', 'Eilat', 'Hod-Hasharon', 'Herzelia']
  constructor() { }
//   autoComplete=async()=>{
//    const res =  await fetch('https://maps.googleapis.com/maps/api/place/autocomplete/json??input=Vict&types=geocode&language=fr&key=AIzaSyAzTE4pnD2cCm3Q52hnk6rC84A9kBO8Y8g').then( (response) =>{
//     console.log(response.json())}).catch( (error) =>{
//     console.log(error)});
// }
}
