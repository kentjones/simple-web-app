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
				try {
					sh 'npm install'
				} catch(error){
					echo "error: ${error.message}"
				}
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
