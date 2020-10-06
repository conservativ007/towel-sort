
// You should implement your task here.

module.exports = function towelSort (matrix) {
	  if(!matrix) return [];
  	let newArr = [];
		let count = 0;

		newArr = matrix.map((item, index) => {
			count = index+1;

			if(count % 2 == 0)
			{
				item.reverse(); 
			}

			return item;

		});

		newArr = newArr.flat();

		return newArr;
}
