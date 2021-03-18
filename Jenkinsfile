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
          steps { sh 'ng lint' }
        }
        stage('Unit tests') {
          steps { sh 'ng test --code-coverage' }
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