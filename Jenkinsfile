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
          steps { sh 'npm run lint' }
        }
        stage('Unit tests') {
          steps { sh 'npm run test' }
        }
      }
    }

    stage('Build') {
      steps { sh 'npm run build' }
    }

    stage('Deploy') {
      steps { sh 'ng deploy' }
    }
  }
}