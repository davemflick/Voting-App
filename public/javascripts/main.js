var addOption = document.querySelector('.addOpBtn');
addOption.addEventListener('click', function(e){
	var options = e.target.parentNode.previousSibling;
	var optionDiv = options.appendChild(document.createElement('div'))
	optionDiv.class = 'option'
	var input = document.createElement('input');
	input.type = 'text';
	input.name = 'option';
	input.placeholder = 'Option';
	optionDiv.appendChild(input);
});

