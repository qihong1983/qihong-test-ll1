define(function(require, exports, module) {
    function Widget3() {
	        if (!(this instanceof Widget3)) {
			            return new Widget3();
						        }
								        this.name = "Widget3";
										    }
											    Widget3.prototype = {
												        init: function() {
														            console.log(this.name);
																	        }
																			    };
																				    module.exports = Widget3;
																					});
