# Create Module
* Create a folder for the specific language "/Modules/Node/hello_world/index.js"
* Create a folder for your module
* The module needs to be hosted separatly and have a api method that returns a string value
* Add a new entry in modules.yml

```javascript
- id: 2
  url: http://127.0.0.1:3000/getData
  method: GET
  reloadInterval: 5
```
* Specify unique id
* Specify url to api method
* Specify reload time (sec)
* Specify HTTP Method
* Reboot Dashboard


# Hello World
* Start dashboard .NET Core app: localhost:5000
* Start node.js module: node index.js -> localhost:3000

# Authority Dashboard
* We will build a dashboard based on .NET Core - https://www.microsoft.com/net/download/linux-package-manager/debian9/sdk-2.1.300
* Material design - https://material.io/
* Material design react https://material-ui.com/
* Config files in yaml - http://yaml.org/ 
* You should be able to build modules and components

# Ideas for modules
* Beer status
* Deployment statistics
* Coffée status
* Now playing Sonos status

# CI Tools
* Travis CI? - https://travis-ci.org/
* Jenkins?

# Hardware
* Button
* Raspberry Pi
* Amazon dash button - https://github.com/Nekmo/amazon-dash
* Google home mini - https://dialogflow.com/
* Amazon Dot - https://developer.amazon.com/alexa/console/ask
* Leap motion
* Remote control

# Mobile app

