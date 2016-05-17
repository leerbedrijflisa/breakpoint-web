import {Database} from 'database';

export class List {
    constructor() {

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

		var db = new Database();
		db.fetchBugReports(this.sort).then(bugReports => {
			this.bugReports = bugReports;
		});
	}
    
    updateSort() {
        this.activate(this.sort)
    }
}