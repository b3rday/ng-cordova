//  install   :   cordova plugin add org.apache.cordova.battery-status
//  link      :   https://github.com/apache/cordova-plugin-battery-status/blob/master/doc/index.md

angular.module('ngCordova.plugins.ble', [])

  .factory('$cordovaBLE', ['$q', '$window', function ($q, $window) {

    return {
      scan: function (services, seconds) {
        var q = q.defer();
        ble.scan(services, seconds, function (result) {
          q.resolve(result);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      connect: function (deviceID) {
        var q = q.defer();
        ble.connect(deviceID, function (result) {
          q.resolve(result);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },
      disconnect: function (deviceID) {
        var q = q.defer();
        ble.disconnect(deviceID, function (result) {
          q.resolve(result);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      read: function (deviceID, serviceUUID, characteristicUUID) {
        var q = q.defer();
        ble.read(deviceID, serviceUUID, characteristicUUID, function (result) {
          q.resolve(result);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      write: function (deviceID, serviceUUID, characteristicUUID, data) {
        var q = q.defer();
        ble.write(deviceID, serviceUUID, characteristicUUID, data, function (result) {
          q.resolve(result);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      writeCommand: function (deviceID, serviceUUID, characteristicUUID, data) {
        var q = q.defer();
        ble.writeCommand(deviceID, serviceUUID, characteristicUUID, data, function (result) {
          q.resolve(result);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      notify: function (deviceID, serviceUUID, characteristicUUID) {
        var q = q.defer();
        ble.notify(deviceID, serviceUUID, characteristicUUID, function (result) {
          q.resolve(result);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      indicate: function (deviceID, serviceUUID, characteristicUUID) {
        var q = q.defer();
        ble.indicate(deviceID, serviceUUID, characteristicUUID, function (result) {
          q.resolve(result);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      isConnected: function (deviceID) {
        var q = q.defer();
        ble.isConnected(deviceID, function (result) {
          q.resolve(result);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      isEnabled: function () {
        var q = q.defer();
        ble.isEnabled(function (result) {
          q.resolve(result);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      }
    }
  }]);
