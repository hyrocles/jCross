jCross = function(){

	/* File import */
	@jecLi:import = conf/config.js;
	
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
	var lpQuee 				= new Array();
	var serviceObj 			= false;
	var serviceURI 			= _setup.Service+":"+_setup.Port+"/"+_setup.ProductID+"/";
	
	/* - private - methodes */
	var isHTML = function(){
		if(document.getElementsByTagName('html')[0]){
			return true;
		}else{
			return false;
		}
	}
	
	var createServiceObj = function(){
		var _sObj;
		var _htmlNode;
		
		_sObj = document.createElement('div');
		_sObj.id = "jCross";
		
		_htmlNode = document.getElementsByTagName('html')[0];
		_htmlNode.appendChild(_sObj);
		
		serviceObj = document.getElementById('jCross');
	}
	
	var callService = function(msg){
		var _requester;
		var _fingerprint;
		
		_fingerprint = new Date();
		_fingerprint = _fingerprint.getTime();
		
		_requester = document.createElement('script');
		_requester.language = "JavaScript";
		
		if(!msg){
			msg = "";
		}
		_requester.src = serviceURI+msg+_fingerprint+"/";
		
		serviceObj.innerHTML = "";
		serviceObj.appendChild(_requester);
	}
	
	/* PUBLIC */
	return {
		onLoad			: function(){
			return true;
		},
		
		onInclude		: function(object_o){
			if(object_o){
				serviceObj = object_o;
				return true;
			}else{
				return false;
			}
		},
		
		onComplete		: function(){
			if(!serviceObj){
				if(isHTML()){
					createServiceObj();
				}
			}
			if(_setup.autoConnect){
				callService();
			}
		},
		
		getDescription	: function(){
			return description;
		},
		
		clearQuee	: function(){
			lpQuee = new Array();
		},
		
		onData		: function(msgQuee){
		},
		
		sendData	: function(msg){
			callService(msg);
		},
		
		updateLpQuee	: function(msgObj){
			if(msgObj){
				lpQuee.push(msgObj);
			}
			JecLi.jCross.onData(lpQuee);
		}
	};
}();