import {Database} from 'database';

export class List {
	activate() {
		var db = new Database();
		db.fetchBugReports().then(bugReports => {
			this.bugReports = bugReports;
		});
	}
}