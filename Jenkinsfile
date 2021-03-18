pipeline {
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
          steps { sh 'npm test -- --code-coverage' }
        }
      }
    }

    stage('Build') {
      steps { sh 'npm build -- --prod' }
    }

    stage('Deploy') {
      steps { 
          withCredentials([string(credentialsId: 'GITHUB_PAGES_TOKEN', variable: 'GH_TOKEN')]) {
            sh 'export GH_TOKEN="$GH_TOKEN"'
            sh 'npm run deploy -- --repo=https://github.com/wms2537/wms2537.github.io.git --name="wms2537" --email=swmeng@yes.my' 
          }
        }
    }
  }
}