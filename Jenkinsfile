pipeline {
  agent any

  tools {
    nodejs "node"  // matches the name configured in Jenkins
  }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Run Cypress Tests') {
      steps {
        sh 'npx cypress run'
      }
    }
}
