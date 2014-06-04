//This controller retrieves data from the buttonFactory and associates it with the $scope
//The $scope is ultimately bound to the view
app.controller('CalculatorController', function ($scope, buttonFactory) {

    init();

    function init() {
        $scope.buttons = buttonFactory.getButtons();
    }
    
    $scope.buttonEvent= function (button) {
		if(button.buttonValue == '=')
			evaluate(button);
		else if(button.buttonValue == 'C')
			clearText();
		else 
			append(button);
	};
	
	var append = function (button) {
		
		var space = '';
		if(isNaN(parseInt(button.buttonValue)))
			space = " ";
		if(!$scope.infixNotation)
			$scope.infixNotation = space;
		$scope.infixNotation = $scope.infixNotation + space + button.buttonValue + space;
		
	};
	
	var clearText = function () {
		$scope.infixNotation = '';
	};
	
	var evaluate = function (button) {
		var value = $scope.infixNotation;
		var tokens = value.trim().split(" ");
		if(tokens.length % 2 == 0 || tokens[0] == '')
			value = 'Wrong Input';
		else {
			var exp = parseInt(tokens[0]);
			for (var i = 1; i < tokens.length; i+=2) {
				if(tokens[i]== '+')
					exp = exp  + parseInt(tokens[i+1]);
				else if(tokens[i]== '-')
					exp = exp  - parseInt(tokens[i+1]);
				else if(tokens[i]== '*')
					exp = exp  * parseInt(tokens[i+1]);
				else if(tokens[i]== '/')
					exp = exp  / parseInt(tokens[i+1]); 
				value = exp;
			}
		}
		$scope.infixNotation = value;
	};

});