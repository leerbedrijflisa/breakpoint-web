import {Database} from 'database';

export class Create {
    constructor() {
			this.report = {}
		}
		
    submit() {
        var db = new Database();
				db.saveBugReport(this.report);
        window.location.replace('#/' +"?_t=" + new Date().getTime());        
    } 
}