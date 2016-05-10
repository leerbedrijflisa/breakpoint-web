import {Database} from 'database';

export class bugReport {
    constructor() {
    }
   
async activate(params) {
        console.log(params.id);
        params.id;

        this.id = params.id;
        var db = new Database();
        let currentBug = await db.getBugReportInfo(params.id);

        this.currentBug = currentBug;

        console.log(currentBug);
   } 
}