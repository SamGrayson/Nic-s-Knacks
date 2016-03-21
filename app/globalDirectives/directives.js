"use strict";

//GLOBAL DIRECTIVES
var app = angular.module('NicsKnacks');

/* Expand product window */

app.directive('openIndividual', function($timeout, $filter) {
  return {
    scope: {
      info: '=info',
      position: '=position',
    },
    template: '<div class="btn btn-success" data-toggle="modal" data-target="#shopModal">Purchase</div>',
    link: function(scope, element, attr) {
      $timeout(function(){
        //Setup
        var openDescription = function() {
          var selection = document.getElementsByClassName('shop-modal');
          var box = angular.element(selection);

          var modalString = '<div class="modal fade" id="shopModal" tabindex="-1" role="dialog" aria-labelledby="shopModalLabel"> \
            <div class="modal-dialog"> \
              <div class="modal-content"> \
                <div class="modal-header"> \
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> \
                  <h4 class="modal-title" id="myModalLabel"> <i> ' + scope.info.title + ' </i> </h4> \
                </div> \
                <div class="modal-body"> \
                  <div class="row"> \
                    <div class="col-xs-12 margin-bottom-20"> \
                      <img style="width: 100%" src="http://placehold.it/350x150" alt=""> \
                    </div> \
                    <div class="col-xs-12"><h2>' + scope.info.title + '<span class="pull-right margin-bottom-15">' + $filter('currency')(scope.info.price) + '</span></h2></div> \
                    <div class="col-xs-12"> \
                    <hr class="margin-top-5 margin-bottom-20"/> \
                      <h3 class="margin-bottom-10">Description</h3> <br /> \
                      <div style="font-size: 18px">' + scope.info.description + '</div> \
                    </div> \
                  </div> \
                </div> \
                <div class="modal-footer"> \
                  <button type="button" class="btn btn-success btn-block">Purchse</button> \
                </div> \
              </div> \
            </div> \
          </div>';

          box.html(modalString);
        };

        element.bind('click', openDescription);
      });
    },
  };
});
