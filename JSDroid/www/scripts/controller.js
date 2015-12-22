var controller = {

    showDevices : function() {
        $("#joystick").hide();
        $("#devices").show();

        var getDeviceTemplate = function (device) {
            var li = jQuery("<li></li>").append("<label>" + device.name + "</label><p>" + device.address + "</p>");
            li.click(function() {
                controller.connectTo(device.address);
            });
            return li;
        };

        bluetoothSerial.list(function(devices) {
            devices.forEach(function(device) {
                var deviceLabel = getDeviceTemplate(device);
                $("#devices").append(deviceLabel);
            });
        });

        //bluetoothSerial.discoverUnpaired(function (devices) {
        //    devices.forEach(function(device) {
        //        var deviceLabel = getDeviceTemplate(device);
        //        $("#devices").append(deviceLabel);
        //    });
        //});

        //bluetoothSerial.setDeviceDiscoveredListener(function (device) {
        //        var deviceLabel = getDeviceTemplate(device);
        //        $("#devices").append(deviceLabel);
        //});
    },

    showJoystick: function () {
        var joystick = $("#joystick");
        joystick.removeClass("hidden");
        joystick.show();
    },

    hideJoystick: function() {
        var joystick = $("#joystick");
        joystick.hide();
    },

    connectTo: function (address) {
        bluetoothSerial.connect(address, function () {
            $("#devices").hide();
            $("#mode_buttons").removeClass("hidden");
            $("#mode_buttons").show();
        });
    },

    sendData: function (data) {
        bluetoothSerial.write([data]);
    }
}