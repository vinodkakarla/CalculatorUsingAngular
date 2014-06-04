//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('buttonFactory', function () {
    this.getButtons = function () {
        return buttons;
    };

    var buttons = [
        {
     		id: 2,
     		buttonName: '1',
     		buttonValue: '1'
     	},
     	{
     		id: 3,
     		buttonName: '2',
     		buttonValue: '2'
     	},
     	{
     		id: 4,
     		buttonName: '3',
     		buttonValue: '3'
     	},
     	{
     		id: 11,
     		buttonName: 'Add',
     		buttonValue: '+'
     	},
     	{
     		id: 5,
     		buttonName: '4',
     		buttonValue: '4'
     	},
     	{
     		id: 6,
     		buttonName: '5',
     		buttonValue: '5'
     	},
     	{
     		id: 7,
     		buttonName: '6',
     		buttonValue: '6'
     	},
     	{
     		id: 12,
     		buttonName: 'Sub',
     		buttonValue: '-'
     	},
     	{
     		id: 8,
     		buttonName: '7',
     		buttonValue: '7'
     	},
     	{
     		id: 9,
     		buttonName: '8',
     		buttonValue: '8'
     	},
     	{
     		id: 10,
     		buttonName: '9',
     		buttonValue: '9'
     	},
     	{
     		id: 15,
     		buttonName: 'Eval',
     		buttonValue: '='
     	},
     	{
     		id: 13,
     		buttonName: 'Mul',
     		buttonValue: '*'
     	},
     	{
     		id: 1,
     		buttonName: '0',
     		buttonValue: '0'
     	},
     	{
     		id: 14,
     		buttonName: 'Div',
     		buttonValue: '/'
     	},
     	{
     		id: 16,
     		buttonName: 'Clear',
     		buttonValue: 'C'
     	}
    ];

});