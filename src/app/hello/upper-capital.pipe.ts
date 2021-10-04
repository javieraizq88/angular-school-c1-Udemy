import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: "upperCapital"
})
export class UpperCapiitalPipe implements PipeTransform {
    
    transform(value:string){
        return value[0].toUpperCase() + value.substring(1).toLowerCase();
    }
}