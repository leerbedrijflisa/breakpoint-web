import {Database} from 'database';

export class List {
	activate() {
		var db = new Database();
		this.bugReports = db.bugReports;
	}
}