pipeline {
	
	agent any
	tools {
		nodejs 'NodeJs-17.0.1'
	}
	options {
		 timestamps()
	}
	stages {

		stage('Initialize') {
			
			steps {
				sh 'npm -v'
			}
			post{
				success {
					echo 'initialized complete'
				}
				failure {
					echo 'initalized failed'
				}
			}
		}
		stage('Build'){
			
			steps {
				sh 'npm install'
			}
			post{
				success {
					echo 'npm install complete'
				}
				failure {
					echo 'npm install failed'
				}
			}

		}
		stage('Deploy to Staging'){
			steps{
				timeout(time: 4, unit:'MINUTES') {
					input message: 'Approve Staging Deployment?', submitter: 'admin'
				}
				echo 'Deploy to Staging'
			}
		}
	}
}
