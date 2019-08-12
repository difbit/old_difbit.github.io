var d = new Date();
function time(id)
{
	s = d.getSeconds();
	document.getElementById(id).innerHTML = s;
	setTimeout('time("'+id+'");','1000');
	return true;
}
