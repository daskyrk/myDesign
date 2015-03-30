/**
 * Created by Jun on 2015/3/30.
 */
define(function(require, exports, module){

    var Chart = Backbone.Model.extend({
        defaults : {
            "id" : "123456",
            "filter" : {
                "one":"oneItem",
                "two":"twoItem",
                "three":"threeItem",
                "four":"fourItem",
                "five":"fiveItem"
            }
        }
    });
    module.exports = Chart;
});