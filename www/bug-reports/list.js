import {inject} from 'aurelia-framework';  
import {Database} from 'database';
import {Router} from 'aurelia-router';

@inject(Database, Router)
export class List {
    constructor(database, router) {
        
        this.db = database;
        this.router = router;

        if(this.sort == null) {
            this.sort = {
                    option: "title",
                    order: "asc"
                }     
        }
       
    }
    
	activate() {
      
        this.sortOptions = [
            {
                name: "Title",
                value: "title"
            }, {
                name: "Status",
                value: "status"
            }, 
        ];
        this.sortOrders = [
            {
                name: "A-Z",
                value: "asc"
            }, {
                name: "Z-A",
                value: "desc"
            }
        ]

		
		this.db.fetchBugReports(this.sort).then(bugReports => {
			this.bugReports = bugReports;
		});
        
	}
    
    updateSort() {
        this.activate(this.sort)
    }
    
    updateFilter() {
        console.log(this.filterOption);
        
        this.db.filterBugReports(this.filterOption).then(bugReports => {
			this.bugReports = bugReports;
		});

        
        
    }
}