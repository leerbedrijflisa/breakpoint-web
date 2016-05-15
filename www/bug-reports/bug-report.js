import {inject} from 'aurelia-framework';  
import {Database} from 'database';
import {Router} from 'aurelia-router';

@inject(Database, Router)
export class bugReport {
    
    constructor(database, router) {
            this.db = database;
            this.router = router;
		}
   
async activate(params) {
        console.log(params.id);

        this.id = params.id;
        let currentBug = await this.db.getBugReportInfo(params.id);

        this.currentBug = currentBug;
        this.currentBugAssignee = currentBug.assignee;
        
        this.selectedVal = currentBug.status;
   }
   
  submit(id) {
      this.db.updateBugReportInfo(this.selectedVal, id);
      
      window.location.reload()
  }
}