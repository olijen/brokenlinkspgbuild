var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.amendLinks('external-link');
    },

    // Find everything with class className and open it
    // with the InAppBrowser
    amendLinks: function(className) {
        var n = 0,
            links = document.getElementsByClassName('external-link');

        for (; n < links.length; n++) {
            links[n].onclick = function(e) {
                e.preventDefault();
                cordova.InAppBrowser.open(''.concat(this.href), '_blank');
            }
        }
    }
};

app.initialize();