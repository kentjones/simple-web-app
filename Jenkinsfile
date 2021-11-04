pipeline {
	agent any
	stages {

		stage('Initialize') {
		
			steps {
				sh '''
					echo "PATH = ${PATH}"
					echo "GRADLE_HOME = ${GRADL_HOME}
				'''
				echo 'Hello World'
			}
		}
		stage('Build'){
			steps{
				echo 'Hello Build'
			}
		}
	}
}
