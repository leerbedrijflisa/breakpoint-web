import {Database} from 'database';

export class Project {
    constructor() {
		}

    async activate(params) {
        params.projectName;

        this.projectName = params.projectName;
        var db = new Database();
		let bugReports = await db.fetchSpecificProjectBugReports(params.projectName);
        
        bugReports.forEach(function(report) {
                report.reported = this.timeSince(report.reported);
        }, this);

        this.bugReports = bugReports;

    }
    
    timeSince(date) {

  		var newDate = new Date(date).getTime();

  		var seconds = Math.floor((new Date().getTime()/1000) - (newDate/1000));

  		var interval = Math.floor(seconds / 31536000);

  		if (interval > 1) {
  				return interval + " years ago";
  		}
  		interval = Math.floor(seconds / 2592000);
  		if (interval > 1) {
  				return interval + " months ago";
  		}
  		interval = Math.floor(seconds / 86400);
  		if (interval > 1) {
  				return interval + " days ago";
  		}
  		interval = Math.floor(seconds / 3600);
  		if (interval > 1) {
  				return interval + " hours ago ";
  		}
  		interval = Math.floor(seconds / 60);
  		if (interval > 1) {
  				return interval + " minutes ago";
  		}
  		return Math.floor(seconds) + " seconds ago";
  	}
}
