
pipeline {
    agent any
    
    stages {
        stage('Test cmd') {
            steps {
                bat 'echo Hello from cmd'
                bat 'ver'
            }
        }
        
        stage('Build Client') {
            steps {
                dir('client') {
                    bat 'docker build --no-cache -t client-image:latest -f Dockerfile .'
                }
            }
        }
        
        stage('Build Server') {
            steps {
                dir('server') {
                    bat 'mvn clean package -DskipTests'
                    bat 'docker build --no-cache -t server-image:latest -f Dockerfile .'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                // Add your deployment steps here if needed
                echo 'Deploying...'
            }
        }
    }
    
    post {
        always {
            // Clean up workspace if needed
            cleanWs()
        }
    }
}
