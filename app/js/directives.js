'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('bootstrapSlider', function() {
    return function(scope, element, attrs) {
      $(document).ready(function() {
        var init = scope.$eval(attrs.ngModel);
        var min = scope.$eval(attrs.bootstrapSliderMin);
        var max = scope.$eval(attrs.bootstrapSliderMax);
        $(element[0]).slider({
          value : init,
          min : min,
          max : max,
          tooltip : 'hide'
        });
 
        // Update view to reflect model
        scope.$watch(attrs.ngModel, function(v) {
          $(element[0]).slider('setValue', v);
        });
 
        // Update model to reflect view
        $(element[0]).slider().on('slide', function(ev) {
          scope.$apply(function() {
            scope[attrs.ngModel] = ev.value;
          });
        });
      });
    };
  });
