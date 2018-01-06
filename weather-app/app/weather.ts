import {Iweather} from './Iweather';

export class weather implements Iweather {
    constructor(public id: number, public city: string, public main: string, public description: string) {

    }

}
