/**
 * Created by Jun on 2015/3/30.
 */
define(function(require, exports, module) {
    $(document).ready(function() {
        //新增图表区域
        var AddChart = require("./addChart");
        var addChartArea = new AddChart();
        addChartArea.addChart;
    });

});