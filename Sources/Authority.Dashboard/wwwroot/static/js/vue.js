Vue.component('module', {
  props: ['module'],
  template: `
    <div class="module" v-bind:data-module-id="module.id">
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
        vm.modules = data;
        this.initModules(vm.modules);
      });
  },
  methods: {
    initModules: function(modules) {
      let timers = [];
      for (let i = 0; i < modules.length; i++) {
        var module = modules[i];
        timers.push(
          setInterval(() => {
            this.handleModuleRequest(module, i);
          }, module.reloadInterval * 1000)
        );
      }
    },
    handleModuleRequest: function(module, index) {
      fetch(module.url)
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.modules[0].value = data;
        });
    }
  }
});
