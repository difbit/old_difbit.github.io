var d = new Date();
function time(id)
{
	s = d.getSeconds();
	document.getElementById(id).innerHTML = s;
	return true;
}
