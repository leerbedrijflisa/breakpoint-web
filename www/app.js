import {HttpClient} from 'aurelia-fetch-client';

export class App {
    
   static inject() {
    return [ HttpClient ];
   }
    
  constructor(http) {
     http.configure(x => {
            x.withBaseUrl('http://localhost:31415/')
						  .withDefaults({
								headers: {
									'Accept': 'application/json',
									'Content-Type': 'application/json'
								}
							});
    });
  }
  
	configureRouter(config, router) {
		config.map([
			{ route: '', moduleId: 'bug-reports/list' },
            { route: 'create', moduleId: 'bug-reports/create' }
		])
	}
}