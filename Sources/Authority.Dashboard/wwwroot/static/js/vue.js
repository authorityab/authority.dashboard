Vue.component('module', {
  props: ['module'],
  template: `
    <div class="module" v-bind:data-module-id="module.id" v-bind:style="module.style">
      <h4>{{ module.type }}</h4>
      <h4>{{ module.id }}</h4>
      <p>{{ module.value }}</p>
    </div>
  `
});

var app = new Vue({
  el: '#app',
  data: {
    modules: []
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
  },
  methods: {
    initModules: function(modules) {
        let timers = [];

        modules.forEach((module, i) => {
            if (module.type === 'fetch') {
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
    }
  }
});
