var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        alert('device is ready');
    }
};

app.initialize();