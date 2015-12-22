// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        cordova.plugins.backgroundMode.enable();
        var auto = false;
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        controller.showDevices();
        var modeButtons = $("#mode_buttons");
        modeButtons.find("#mode_0_button").click(function () {
            auto = false;
            controller.sendData(11);
            controller.hideJoystick();
        });
        modeButtons.find("#mode_1_button").click(function () {
            auto = false;
            controller.sendData(12);
            controller.hideJoystick();
        });
        modeButtons.find("#mode_snake_button").click(function () {
            auto = false;
            controller.sendData(10);
            controller.showJoystick();
        });
        modeButtons.find("#mode_2_button").click(function () {
            auto = false;
            controller.sendData(14);
            controller.hideJoystick();
        });
        modeButtons.find("#mode_3_button").click(function () {
            auto = false;
            controller.sendData(13);
            controller.hideJoystick();
            
        });
        modeButtons.find("#mode_auto_button").click(function () {
            auto = true;
            var currentMode = 11;
            controller.hideJoystick();
            var timeoutFunction = function () {
                if (!auto) return;
                controller.sendData(currentMode);
                if (++currentMode === 14) {
                    currentMode = 11;
                }
                setTimeout(timeoutFunction, 10000);
            }
            timeoutFunction();
        });

        var joystick = $("#joystick");
        joystick.find("#left_button").click(function () {
            controller.sendData(1);
        });
        joystick.find("#top_button").click(function () {
            controller.sendData(2);
        });
        joystick.find("#right_button").click(function () {
            controller.sendData(3);
        });
        joystick.find("#bottom_button").click(function () {
            controller.sendData(4);
        });
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();