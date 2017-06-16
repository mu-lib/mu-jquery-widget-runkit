(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["mu-jquery-widget/widget", "mu-jquery-runkit/jquery.runkit"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("mu-jquery-widget/widget"), require("mu-jquery-runkit/jquery.runkit"));
  } else {
    root["mu-jquery-widget-runkit/widget"] = factory(root["mu-jquery-widget/widget"], root["mu-jquery-runkit/jquery.runkit"]);
  }
})(this, function (widget, runkit) {
  return widget.extend({
    "on/initialize": function ($event) {
      var me = this;
      var $children = me.$element.children();

      me.on("ready.runkit", function () {
        return false;
      });
      me.on("create.runkit", function () {
        $children.hide();
      });

      runkit.call($children);
    }
  })
});
