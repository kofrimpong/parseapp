import * as Parse from 'parse';

export class Event extends Parse.Object {
    constructor() {
        // Pass the ClassName to the Parse.Object constructor
        super('Event');
    }
}
Parse.Object.registerSubclass('Event', Event);