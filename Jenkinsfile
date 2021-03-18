pipeline {
  agent { dockerfile true }
  stages {
    stage('Install') {
      steps {
        withCredentials([string(credentialsId: 'GITHUB_PAGES_TOKEN', variable: 'GH_TOKEN')]){
          sh 'npm install'
          sh "export GH_TOKEN=$GH_TOKEN"
        }
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
      steps { sh 'npm run deploy -- --name="wms2537" --email=swmeng@yes.my' }
    }
  }
}