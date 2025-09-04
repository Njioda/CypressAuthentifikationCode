pipeline {
  agent any
  parameters {
        string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description: "enter the scripts path that you wanrt to execue ")
        //choice(name: 'BROWSER', choices: ['chrome', 'edge', 'electron'], description: "Choise the browser you want to execute")
    
    }

  tools {
    nodejs "24.3.0"  // matches the name configured in Jenkin
  }

 stages {
      stage('Install Dependencies') {
          steps {
              bat 'npm ci'
          }
      }
      stage('Run Cypress Tests') {
          steps {
              //bat 'npx cypress run'
              bat 'npx cypress run --browser ${BROWSER} --cy ${SPEC}'
          }
      }
  
  }
  post {
        always {
             archiveArtifacts artifacts: 'cypress/videos/**'
        }
    }
}

