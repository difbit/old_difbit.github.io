var d = new Date();
var s = 0;
var t;
var timer_is_on = 0;

function time()
{
	document.getElementById('time').value = s;
	s = s + 1;
	t = setTimeout(time, 1000);
}

function count() {
	if (!timer_is_on) {
		timer_is_on = 1;
		time();
	}
}
