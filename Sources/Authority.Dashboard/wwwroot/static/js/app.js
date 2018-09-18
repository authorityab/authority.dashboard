
$(document).ready(function() {
    var modules = getModules();
});

function getModules() {
    var modules = [];
    
    $.ajax({
        type: 'GET',
        url: '/api/module',
        success: function (data) {
             //$.each(data.pushModules, function (key, item) {
             //    modules.push(item);
             //     $('<div class="module" data-module-id="' + item.id + '"><h4>' + item.id + '</h4><p></p></div>').appendTo($('#modules'));
             //});

            $.each(data.fetchModules, function (key, item) {
                modules.push(item);
                $('<div class="module" data-module-id="' + item.id + '"><h4>' + item.id + '</h4><p></p></div>').appendTo($('#modules'));
            });

             initModules(modules);
        }
    });
};

function initModules(modules) {
    var timers = [];

    for (var i = 0; i < modules.length; i++) {
        var module = modules[i];
        timers.push(setInterval(function() {
            handleModuleRequest(module);
        }, module.reloadInterval * 1000));
    }
}

function handleModuleRequest(module) {
       $.ajax({
        type: module.method,
        url: module.url,
        success: function (data) {
            var item = $('#modules .module[data-module-id="' + module.id + '"]');
            item.find('p').html(data);
        }
    });
}