pipeline {
  triggers {
    pollSCM('') // Enabling being build on Push
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
        stage('Unit tests') {
          steps { sh 'npm run test -- --code-coverage' }
        }
      }
    }

    stage('Build') {
      steps { sh 'npm run build --prod' }
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