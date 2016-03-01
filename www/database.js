export class Database {
	constructor() {
		this.bugReports = [
			{ title: "Patrick is bugly", project: "Wreekpoint" },
			{ title: "Joost crashed", project: "Wreekpoint" },
			{ title: "Nothing happened", project: "Bulder	" }
		];
	}
	
	fetchBugReports() {
		return this.bugReports;
	}
}