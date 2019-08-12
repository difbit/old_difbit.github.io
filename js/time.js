var d = new Date();
function time()
{
	document.getElementById('time').value = s;
	s = s + 1;
	t = setTimeout(time, 1000);
}
