# CREW APPLICATION

Simple application which represents dashboard with candidates.

### Running locally
`yarn install`

`yarn start`

App will be available on http://localhost:3000


### Running in docker
`docker build -t crew-app .`

`docker run -it --rm -p 5000:5000 --name crew-container crew-app`

App will be available on http://localhost:5000

# TEST FRAMEWORK
 Automation framework with Cypress + Cucumber
 
### Preconditions for running tests
 - Install Node.js, npm and yarn to your computer. PLease follow the instruction
 https://medium.com/@itsromiljain/the-best-way-to-install-node-js-npm-and-yarn-on-mac-osx-4d8a8544987a
 - Install docker https://docs.docker.com/docker-for-mac/install/
 - Install git to your computer
 - Clone repository: perform command git clone https://github.com/epishev/test_task.git and go to test_task/
oos-ca directory
 - Perform command `yarn install`
 
### Running localy
  `yarn run cypress:e2e`
  
### Running in CI
   `yarn run cypress:e2e-ci`
### Running with Mochawesome report
    `yarn run cypress:e2e-mochawesome`
    `yarn run report-open`
    
### Running in Docker 
    `docker-compose up --exit-code-from cypress`
