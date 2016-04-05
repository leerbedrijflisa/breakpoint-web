import {Database} from 'database';

export class Project {
    constructor() {
		}
    
    async activate(params) {
        params.projectName;
       
        this.projectName = params.projectName;
        var db = new Database();
		let bugReports = await db.fetchSpecificProjectBugReports(params.projectName);
        
        this.bugReports = bugReports;
    }
    
   
}