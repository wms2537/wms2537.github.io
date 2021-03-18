pipeline {
  environment {
    GH_TOKEN = credentials('GITHUB_PAGES_TOKEN')
  }
  agent { dockerfile true }
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      parallel {
        stage('Static code analysis') {
          steps { sh 'npm lint' }
        }
        stage('Unit tests') {
          steps { sh 'npm test --code-coverage' }
        }
      }
    }

    stage('Build') {
      steps { sh 'npm run build --prod' }
    }

    stage('Deploy') {
      steps { sh 'npm run deploy' }
    }
  }
}