var TTT = angular.module('TTT', []);

TTT.controller('GameController', function($scope){
	$scope.gameboard=[ ['','',''],['','',''], ['','',''] ];

	var xArray =[];
	var oArray = [];
	var turn=true;
	
	var xWinningArrays = 
[[[0,0], [0,1], [0,2], 0],
[[1,0], [1,1], [1,2], 0],
[[2,0], [2,1], [2,2], 0],
[[0,0], [1,0], [2,0], 0],
[[0,1], [1,1], [2,1], 0],
[[0,2], [1,2], [2,2], 0],
[[0,0], [1,1], [2,2], 0],
[[2,0], [1,1], [0,2], 0]];

var oWinningArrays = 
[[[0,0], [0,1], [0,2], 0],
[[1,0], [1,1], [1,2], 0],
[[2,0], [2,1], [2,2], 0],
[[0,0], [1,0], [2,0], 0],
[[0,1], [1,1], [2,1], 0],
[[0,2], [1,2], [2,2], 0],
[[0,0], [1,1], [2,2], 0],
[[2,0], [1,1], [0,2], 0]];

var counter = 0;
	
	$scope.playerTurn = function(r,c){

		

		if($scope.gameboard[r][c] == "X" || $scope.gameboard[r][c] == "O"){
			alert("Oops, that cell is taken! please choose a different cell.");

		}
		else if(turn == true){
			xArray.push([r,c]);
			$scope.gameboard[r][c] = "X";
			turn = false;
			counter ++;
			console.log(counter);
			compareX(xArray[xArray.length - 1]);

		}else{
			oArray.push([r,c]);
			$scope.gameboard[r][c]="O";
			turn= true;
			console.log(oArray);
			counter ++;
			compareO(oArray[oArray.length - 1]);

			}
	};


function compareX(value){
	var stringValue = value.toString();
	for(i=0; i<8; i++){
		for(b=0; b<3; b++){
			var xString = xWinningArrays[i][b].toString();
			if(xString == stringValue){
			xWinningArrays[i][3]++;
				if(xWinningArrays[i][3] == 3){
					alert("X is the WINNER!");
				}else if(xWinningArrays[0][3] !=3 && xWinningArrays[1][3] !=3 && xWinningArrays[2][3] !=3 && counter==9){
					alert("tie game");
				}
				
			}			
		}
	}
}

function compareO(value){
	var stringValue = value.toString();
	for(i=0; i<8; i++){
		for(b=0; b<3; b++){
			var oString = oWinningArrays[i][b].toString();
			if(oString == stringValue){
			oWinningArrays[i][3]++;
				if(oWinningArrays[i][3] == 3){
					alert("O is the WINNER!");
				}
			}
		}
	}
}


		



});

