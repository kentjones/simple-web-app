pipeline {
	
	agent any

	stages {

		stage('Initialize') {
		
			steps {
				sh 'echo PATH = ${PATH}'
				sh 'echo JAVA_HOME = ${JAVA_HOME}'
				echo 'Hello World'
			}
		}
		stage('Build'){
			steps{
				sh 'npm run build'
			}
			post{
				success {
					echo 'Success, now archiving artifacts'
				}
				failure {
					echo 'build failed.'
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
