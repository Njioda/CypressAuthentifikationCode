pipeline {
  agent any

  tools {
    nodejs "node"  // matches the name configured in Jenkins
  }

  environment {
    // Optional: set any required ENV variables
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/your-repo/cypress-project.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
      }
    }
