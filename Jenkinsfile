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
				echo 'Hello Build'
			}
		}
	}
}
