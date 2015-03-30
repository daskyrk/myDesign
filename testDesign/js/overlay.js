/**
 * Created by Jun on 2015/3/28.
 */
/**
 * 黑色半透明遮罩层
 */

define(function(require, exports, module) {
    $("#addChart").click(function(){
        alert('df');
        overlay();
    });
    var elementCreate = require("./elementCreate");
    var overlay = (function() {
        var element = elementCreate.create("div", {
            styles: {
                display: "none",
                width: "100%",
                backgroundColor: "#000",
                opacity: 0.35,
                position: "absolute",
                zIndex: 1,
                left: 0,
                top: 0,
                bottom: 0
            }
        });
        document.body.appendChild(element);

        return {
            display: false,
            show: function() {
                element.style.display = "block";
                this.display = true;
                return this;
            },
            hide: function() {
                element.style.display = "none";
                this.display = false;
                return this;
            }
        };
    })();

    exports.overlay = overlay;
});

