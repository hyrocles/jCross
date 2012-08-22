jCross = function(){

	/* - description - */
	var description = {
		Title 		: "JS2jS Wrapper",
		Version		: "0.1",
		Autor		: "Tobias Schmalenberg",
		
		dependence	: false,
		useTemplate	: false
	}
	
	/* PRIVATE */
	
	/* - private - vars */
	
	/* - private - methodes */
	
	/* PUBLIC */
	return {
		onLoad			: function(){
			return true;
		},
		
		onInclude		: function(object_o){
			return true;
		},
		
		onComplete		: function(){
			return true;
		},
		
		getDescription	: function(){
			return description;
		},
	};
}();