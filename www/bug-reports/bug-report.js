import {inject} from 'aurelia-framework';  
import {Database} from 'database';
import {Router} from 'aurelia-router';

@inject(Database, Router)
export class bugReport {
    
    constructor(database, router) {
            this.db = database;
            this.router = router;
            this.userGroup = {}
		}
   
async activate(params) {
        
        this.id = params.id;
        let currentBug = await this.db.getBugReportInfo(params.id);

        this.currentBug = currentBug;
        this.selectedUser = currentBug.assignee;
        
        this.selectedVal = currentBug.status;
        this.selectedGroup = "manager";
        
        let Users = await this.db.getAllUsers();
        
        Users.forEach(function(user) {
               this.userName = user.userName;
        }, this);
        
        this.userOptions = Users;
        console.log(this.userOptions);
}
   
  submitStatus(id) {
      this.db.updateBugReportInfo(this.selectedVal, id);
  }
  
  submitUser(id) {
      console.log(this.selectedUser.userName);
      this.db.updateBugReportAssignee(this.selectedUser, id);   
  }

  submitGroup() {
    this.db.saveUserGroupAssign(this.userGroup);
    console.log(this.userGroup);
  }
}