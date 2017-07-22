
function addAnswer(){
	let i = 2,
			an = $('#answers input').first()
	;
	$('#addAnswer').click(function() {
		$('#answers')	.append( an.clone()
										.attr('name',`answer[${i}]`)
										.attr('placeholder',`Answer#${i}`)
									);
									i++;
	})
}
let a = addAnswer();
