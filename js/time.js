var d = new Date();
var s = 0;
var t;
function time()
{
	document.getElementById('time').value = s;
	s = s + 1;
	t = setTimeout(time, 1000);
}
