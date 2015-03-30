/**
 * Created by Jun on 2015/3/30.
 */
define(function(require, exports, module) {
    var ChartView = Backbone.View.extend({

        template : _.template(require("../tpl/chartArea.html")),

        id : "",

        init : function() {

        },

        render : function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        events : {
            "click #addChart" : "addNew"
        },

        addNew : function() {//新增图表
            alert('new');
        }

    });

    module.exports = ChartView;
})