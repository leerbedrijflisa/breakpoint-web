import {HttpClient} from "aurelia-fetch-client";

export class Database {
	constructor() {
		this.http = new HttpClient();
		this.http.configure(config => {
			config
				.useStandardConfiguration()
				.withBaseUrl("http://localhost:4000/");
		});
	}
	
	fetchBugReports() {
		return this.http.fetch("reports")
			.then(response => response.json());
	}
}