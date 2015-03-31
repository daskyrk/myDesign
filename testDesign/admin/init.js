/**
 * Created by Jun on 2015/3/30.
 */
define(function(require, exports, module) {
    $(document).ready(function() {
        var ChartModel = require("./model/chartModel");
        var ChartView = require("./view/chartView");

        var chartModel = new ChartModel();
        var chartView = new ChartView({
            model : chartModel
        });

        $("#addChart").click(function () {
            $(".row").append(chartView.render().$el);
        })
    });



});