pipeline {
  agent any

  tools {nodejs "node"  // matches the name configured in Jenkin}

  stages{
      stage('Install Dependencies') {
          steps {
              bat 'npm ci'
          }
      }
      stage('Run Cypress Tests') {
          steps {
              bat 'npx cypress run'
          }
      }
   }
}

