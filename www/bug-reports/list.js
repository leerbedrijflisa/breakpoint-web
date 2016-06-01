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

          bugReports.forEach(function(report) {
                report.reported = this.timeSince(report.reported);
          }, this);

		});

	}

    updateSort() {
        this.activate(this.sort)
    }

    updateFilter() {

        if(this.filterOption == "All") {
            this.db.fetchBugReports("Title").then(bugReports => {
			    this.bugReports = bugReports;
            })
        }

        else{
            this.db.filterBugReports(this.filterOption).then(bugReports => {
                this.bugReports = bugReports;
		    });

        }
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
  				return interval + " hours XDDDDD ";
  		}
  		interval = Math.floor(seconds / 60);
  		if (interval > 1) {
  				return interval + " minutesmemes";
  		}
  		return Math.floor(seconds) + " seconds";
  	}
  }
