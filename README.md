![CircleCI](https://img.shields.io/circleci/build/github/zimmerman-team/iati.cloud.frontend/master?label=master&token=ca8607f192132f118771215bbcc8f569b85da47e)
![CircleCI](https://img.shields.io/circleci/build/github/zimmerman-team/iati.cloud.frontend/develop?label=develop&token=ca8607f192132f118771215bbcc8f569b85da47e)
[![Maintainability](https://api.codeclimate.com/v1/badges/846a56c0951d6328d08c/maintainability)](https://codeclimate.com/repos/5ced30f7e6231b6fad00257c/maintainability)
[![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=zimmerman-zimmerman_iati.cloud.frontend&metric=alert_status)](https://sonarcloud.io/dashboard?id=zimmerman-zimmerman_iati.cloud.frontend)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=zimmerman-zimmerman_iati.cloud.frontend&metric=security_rating)](https://sonarcloud.io/dashboard?id=zimmerman-zimmerman_iati.cloud.frontend)
![GitHub](https://img.shields.io/github/license/zimmerman-team/iati.cloud.frontend)

## What is the IATI Query Builder?


The IATI Query Builder runs on top the the iati.cloud API application. It will allow users to interact with all the IATI data that is available in the [IATI Registry](http://www.iatiregistry.org/publisher) using a form based interface which enables a user to select what IATI fields to extract, select dates and output formats.

IATI is a global aid transparency standard and it makes information about aid spending easier to access, re-use and understand the underlying data using a unified open standard. You can find more about the IATI XML standard at: <a href="http://www.iatistandard.org" target="_blank">www.iatistandard.org</a>

## About the project
* Website:         <a href="https://www.iati.cloud" target="_blank">www.iati.cloud</a>
* Authors:          <a href="https://www.zimmerman.team/" target="_blank">Zimmerman</a>
* License:          AGPLv3 (see included <a href="https://github.com/zimmerman-zimmerman/query-builder-iati.cloud/blob/develop/LICENSE.MD" target="_blank">LICENSE</a> file for full license)
* Github Repo:      <a href="https://github.com/zimmerman-zimmerman/query-builder-iati.cloud/" target="_blank">github.com/zimmerman-zimmerman/query-builder-iati.cloud</a>
* Bug Tracker:      <a href="https://github.com/zimmerman-zimmerman/query-builder-iati.cloud/issues" target="_blank">github.com/zimmerman-zimmerman/query-builder-iati.cloud/issues</a>

## Installing

<b>1.</b> Set up the <a href="https://github.com/zimmerman-zimmerman/iati.cloud" target="_blank">iati.cloud backend</a> first<br/>
<b>2.</b> Checkout this repository to a local folder<br/>
<b>3.</b> Make sure you've installed node.js 10.16.3 or higher<br/>
<b>4.</b> Run ```yarn install``` <br/>
<b>5.</b> Create an .env file and specify the following variables:
- NODE_PATH=src/
- REACT_APP_CLIENT_NAME=IATI Datastore


<b>6.</b> Run yarn start 

## Documentation
For a birds eye view on the different facets of the query builder please take the following steps:

<b>1.</b> Install <a href="https://github.com/Bogdan-Lyashenko/codecrumbs">codecrumbs</a> by running: ```yarn global add codecrumbs```<br/>
<b>2.</b> Start by running: ```codecrumbs```<br/>
<b>3.</b> Open a browser window or a new tab and navigate to: http://localhost:1234<br/>



## Can I contribute?

Yes! We are mainly looking for coders to help on the project. If you are a coder feel free to *Fork* the repository and send us Pull requests!
