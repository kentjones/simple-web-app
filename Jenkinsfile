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
				echo 'Initialized'
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
				sh 'npm -v'
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
				echo 'Deploy to Staging'
			}
		}
	}
}
