pipeline {
  environment {
    GH_TOKEN = credentials('GITHUB_PAGES_TOKEN')
  }
  agent {
    docker { image 'node:stretch' }
  }
  stages {
    stage('Install') {
      steps { sh 'wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -' }
      steps { sh "echo 'deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main' >>     /etc/apt/sources.list.d/google.list" }
      steps { sh 'RUN apt-get update && apt-get install -yq google-chrome-stable' }
      steps { 'ENV CHROME_BIN=/usr/bin/google-chrome' }
      steps { 'ENV DISPLAY=:99.0' }
      steps { sh 'npm install' }
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