/**
 * Created by Jun on 2015/3/30.
 */
define(function (require, exports, module) {
    var addChart = function () {
        var ChartModel = require("./model/chartDivModel");
        var ChartView = require("./view/chartDivView");

        var BarChartView = require("./view/barChartView");


        var chartSum = $("div[id^='chart']").length;//图表总数
        $("#addChart").click(function () {
            if ($(".row:last > div").length < 2) {//如果最后一行图表数不到2个则追加图表
                var chartModel = new ChartModel();
                chartModel.set({
                    "id": "chart" + (chartSum + 1),
                    "name": "标准柱状图",
                    "filterName": "过滤器",
                    "filter": {
                        "one": "2",
                        "two": "3",
                        "three": "4",
                        "four": "5",
                        "five": "6"
                    }
                });
                var chartView = new ChartView({
                    model: chartModel
                });
                $(".row:last").append(chartView.render().$el);
            } else {//最后一行图表数达到2个则追加一行再追加图表
                var chartModel = new ChartModel();
                chartModel.set({
                    "id": "chart" + (chartSum + 1),
                    "name": "标准柱状图",
                    "filterName": "过滤器",
                    "filter": {
                        "one": "1",
                        "two": "3",
                        "three": "4",
                        "four": "5",
                        "five": "6"
                    }
                });
                var chartView = new ChartView({
                    model: chartModel
                });
                $(".page-content").append("<div class='row'></div>");
                $(".row:last").append(chartView.render().$el);
            }
            chartSum++;
            var barChartView = new BarChartView();
            barChartView.render();
        })
    };

    module.exports = addChart;
});