import { Injectable } from '@angular/core';

@Injectable({
    // para q se cree la instancia en el modulo principal
    providedIn: "root"
})

export class LoggerService {
    log(msg:string) {console.log(msg);}
    error(msg:string) {console.error(msg);}
    warn(msg:string) {console.warn(msg);}
}