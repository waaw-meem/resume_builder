function showPreview(event) {
	if (event.target.files.length > 0) {
		var src = URL.createObjectURL(event.target.files[0]);
		var preview = document.getElementById("file-ip-1-preview");
		preview.src = src;
		preview.style.display = "block";
	}

	if (event.target.files.length > 0) {
		var src = URL.createObjectURL(event.target.files[0]);
		var preview = document.getElementById("file-ip-2-preview");
		preview.src = src;
		preview.style.display = "block";
	}
}
function submit() {
	let none = document.getElementById("form");
	none.classList.add("form1");
	let none1 = document.getElementById("container-fluid");
	none1.classList.add("container-fluid1");

	document.getElementById("name").innerHTML = document.getElementById(
		"name-field"
	).value;

	document.getElementById("job-title").innerHTML = document.getElementById(
		"job-title-field"
	).value;

	document.getElementById("email").innerHTML = document.getElementById(
		"email-field"
	).value;

	document.getElementById("number").innerHTML = document.getElementById(
		"number-field"
	).value;

	document.getElementById("country").innerHTML = document.getElementById(
		"country-field"
	).value;

	document.getElementById("city").innerHTML = document.getElementById(
		"city-field"
	).value;

	document.getElementById("school").innerHTML = document.getElementById(
		"school-field"
	).value;

	document.getElementById("f-o-s").innerHTML = document.getElementById(
		"field-of-study-field"
	).value;

	document.getElementById("l-o-s").innerHTML = document.getElementById(
		"level-of-study-field"
	).value;

	document.getElementById("skills").innerHTML = document.getElementById(
		"skills-field"
	).value;

	document.getElementById(
		"experiance-title"
	).innerHTML = document.getElementById("experiance-title-field").value;

	document.getElementById("experiance").innerHTML = document.getElementById(
		"weField"
	).value;

	document.getElementById("course-title").innerHTML = document.getElementById(
		"short-course-title-field"
	).value;

	document.getElementById("course-center").innerHTML = document.getElementById(
		"center-name-field"
	).value;

	document.getElementById("course-name").innerHTML = document.getElementById(
		"short-course-field"
	).value;

	document.getElementById("deploma-title").innerHTML = document.getElementById(
		"deploma-title-field"
	).value;

	document.getElementById("deploma-center").innerHTML = document.getElementById(
		"center-name-2-field"
	).value;

	document.getElementById("deploma-name").innerHTML = document.getElementById(
		"deploma-field"
	).value;

	document.getElementById("refrence-name").innerHTML = document.getElementById(
		"reference-name-field"
	).value;

	document.getElementById(
		"refrence-location"
	).innerHTML = document.getElementById("reference-location-field").value;

	document.getElementById("refrence-number").innerHTML = document.getElementById(
		"reference-number-field"
	).value;

	document.getElementById("refrence-email").innerHTML = document.getElementById(
		"reference-email-field"
	).value;
}
