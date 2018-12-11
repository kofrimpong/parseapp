import * as Parse from 'parse';

export class Product extends Parse.Object {
    constructor() {
        // Pass the ClassName to the Parse.Object constructor
        super('Product');
    }
}
Parse.Object.registerSubclass('Product', Product);