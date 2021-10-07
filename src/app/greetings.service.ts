import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';

// se debe poner este decorador siempre q se agregen dependencias
@Injectable()

export class GreetingsService{
    public counter = 0;
    
    constructor(private logger: LoggerService){

    }
    
    handleGreeting(message:string){
        this.counter++;
        this.logger.log(message);
    }
}