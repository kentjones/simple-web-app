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
		
			post{
				success {
					echo 'npm install complete'
				}
				failure {
					echo 'npm install failed'
				}
			}
		}
		stage('Build'){
			steps{
				sh 'npm -v'
			}
			steps {
					sh 'npm install'
				echo 'Initialized'
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
