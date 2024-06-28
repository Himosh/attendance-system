pipeline {
    agent any

    stages {
        stage('Build Client') {
            steps {
                dir('client') {
                    script {
                        // Build Docker image for client
                        bat 'docker build -t client-image:latest -f Dockerfile .'
                    }
                }
            }
        }
        stage('Build Server') {
            steps {
                dir('server') {
                    script {
                        // Build Spring Boot application using Maven
                        bat 'mvn clean package -DskipTests'
                        // Build Docker image for server
                        bat 'docker build -t server-image:latest -f Dockerfile .'
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Deploy using docker-compose
                    bat 'docker-compose up --build -d'
                }
            }
        }
    }
}
