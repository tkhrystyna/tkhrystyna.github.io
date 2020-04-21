function input_val( dir, elid ) {
	console.log(dir + " " + elid)
	var inputEl = document.getElementById(elid)
  console.log(inputEl)
	var value = parseInt(inputEl.value, 10)
  if (isNaN(value))
  	value = 0
  	
	if (dir == "dec" && value!=0)

		value--
  else if (dir == "inc")
		value++
    
  inputEl.value = value
}