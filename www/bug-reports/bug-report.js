import {inject} from 'aurelia-framework';  
import {Database} from 'database';

@inject(Database)
export class bugReport {
    
    constructor(database) {
            this.db = database;
		}
   
async activate(params) {
        console.log(params.id);

        this.id = params.id;
        let currentBug = await this.db.getBugReportInfo(params.id);

        this.currentBug = currentBug;

        console.log(currentBug);
        
        this.selectedVal = currentBug.status;
   }
   
  submit(id) {
      this.db.updateBugReportInfo(this.selectedVal, id);
  }
}