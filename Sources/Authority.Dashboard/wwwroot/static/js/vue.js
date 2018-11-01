Vue.component('module', {
  props: ['module'],
  template: `
    <div class="c-grid__item module" v-bind:data-module-id="module.id" v-bind:style="module.style">
      <h4>{{ module.source }}</h4>
      <h4>{{ module.id }}</h4>
      <p>{{ module.value }}</p>
      <img :src="module.value"></img>
    </div>
  `
  });
  

var app = new Vue({
  el: '#app',
  data: {
    modules: [],
    inputLocked: false,
    inputLockTime: 500
  },
  beforeMount: function () {
    const apiBase = "https://localhost:5000";

    const hubConnection = new signalR.HubConnectionBuilder()
        .withUrl("/hubs/module")
        .configureLogging(signalR.LogLevel.Information)
        .build();

    hubConnection.on("Update", (moduleId, value) => {
      this.updateModule(moduleId, value);
    });

    if (!hubConnection.started) {
        hubConnection.start().catch(err => console.error(err.toString()));
    }   
  },
  created: function() {
    let vm = this;
    fetch('/api/module')
      .then(response => {
        return response.json();
      })
      .then(data => {
        data.forEach(item => {
          item.value = '';
        });
        vm.modules = data.sort((a, b) => {
          return a.order - b.order;
        });
        console.log(vm.modules);
        this.initModules(vm.modules);
      });

    this.setupLeap();
  },
  methods: {
    initModules: function(modules) {
        let timers = [];

        modules.forEach((module, i) => {
            if (module.source === 'fetch') {
              timers.push(
                setInterval(() => {
                  this.handleModuleRequest(module, i);

                }, module.reloadInterval * 1000)
              );
            }
        });
    },
    handleModuleRequest: function(module, index) {
      fetch(module.url)
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.modules[index].value = data;
        });
    },
    updateModule: function(moduleId, value) {
        this.modules.find(function(module) {
            if (module.id === moduleId) {
                module.value = value;
            }
        })
    },








   //LEAP MOTION

    setupLeap: function() {
      var self = this;
      var controller = new Leap.Controller({ enableGestures: true });

      controller.on("gesture", function(gesture) {
          if (gesture.type === 'swipe') {
                self.calculateSwipe(gesture);
          }
      });

      controller.on('deviceFrame', function(frame) {
      });

      controller.connect();
    },

    calculateSwipe: function(gesture) {

        if (this.inputLocked) {
            return;
        }

        var self = this;
        var isHorizontal = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);
        if(isHorizontal) {
            (gesture.direction[0] > 0) ? self.right() : self.left();
        } else {
            (gesture.direction[1] > 0) ? self.up() : self.down();
        }

        this.inputLock();
    },

    // Inverted swipe direction
     up: function() {
      console.log('up');
     },
    down: function() {
      console.log('down');
    },
    left: function() {
        this.modules.reverse();
      console.log('left');
    },

     right: function() {
      console.log('right');
    },
    inputLock: function() {
      var self = this;
      this.inputLocked = true;
      setTimeout(function() {
        self.inputLocked = false;
      }, self.inputLockTime);
    }

  }
});
