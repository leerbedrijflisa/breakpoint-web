import {HttpClient, json} from "aurelia-fetch-client";

export class Database {
	constructor() {
		this.http = new HttpClient();
		this.http.configure(config => {
			config
				.useStandardConfiguration()
				.withBaseUrl("http://breakpoint-develop-api.azurewebsites.net/");
		});
	}
	
	fetchBugReports(sort) {
        console.log(sort)
		return this.http.fetch("reports/" + "?sort=" + sort.option + "&order="+ sort.order)
			.then(response => response.json());
	}
    
    filterBugReports(filter) {
        return this.http.fetch("reports/" + "?status=" + filter)
            .then(response => response.json());
    }
	
	saveBugReport(report) {
		return this.http.fetch("reports", {
				method: "post",
				body: json(report)
		})
	}
    
    fetchSpecificProjectBugReports(project) {
		return this.http.fetch("reports/?project=" + project)
            .then(response => response.json());
    }
    
    getBugReportInfo(id) {
        return this.http.fetch("reports/" + id)
            .then(response => response.json());
    }
    
    updateBugReportInfo(selectedVal, id) {
        var bugReport = [{ action: "replace", field: "status", value: selectedVal }];
        this.http.fetch("reports/" + id, {
            method: 'PATCH',
            body: json(bugReport)
        });              
    }
}