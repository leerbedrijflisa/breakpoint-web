export class App {
	configureRouter(config, router) {
		config.map([
			{ route: '', moduleId: 'bug-reports/list' },
            { route: 'create', moduleId: 'bug-reports/create' },
            { route: 'project/:projectName', name: 'project', moduleId: 'bug-reports/project'}
		])
	}
}