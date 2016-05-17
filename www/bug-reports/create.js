import {inject} from 'aurelia-framework';  
import {Database} from 'database';
import {Router} from 'aurelia-router';

@inject(Router, Database)
export class Create {
    
    constructor(router, database) {
            this.router = router;
            this.db = database;
			this.report = {}
		}
		
    submit() {
        document.getElementById('createBtn').setAttribute("disabled","disabled");
        this.db.saveBugReport(this.report).then(() =>
            this.router.navigate(''));
    } 
}