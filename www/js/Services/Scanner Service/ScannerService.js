angular.module('ngCordova').factory('ScannerServices' , function() {
  return {
    Scan: function() {
      cordova.plugins.barcodeScanner.scan(
        function (result) {
          if(!result.cancelled) {
            if(result.format == "QR_CODE") {
              if(result.text.includes('www.')) {
                window.open(`${result.text}`, '_blank', 'location=yes');
              }
            }
          }
        },
        function (error) {
            alert("Scanning failed: " + error);
        }
     );
    }
  }
});
