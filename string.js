

var file = WScript.StdIn.Readline();
var FSO = new ActiveXObject("Scripting.FileSystemObject");
f = FSO.OpenTextFile(file, 1);
var fileContent = f.ReadAll();
f.close();
count = 0;
counting = 0
//shablon = 'baaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
shablon = WScript.StdIn.Readline();
var t1 = new Date().getTime();
len = shablon.length;

//BruteForce
for (var i = 0; i < fileContent.length - len; i++)
{
	if (fileContent.charAt(i)==shablon.charAt(0))
	{
		for (var j = 1; j<len, shablon.charAt(j)==fileContent.charAt(i+j);j++);
		if (j==len)
		{
			count += 1;
			counting += 1;
			if (counting < 11) WScript.echo(i);
		}
	}
}

//Hashes
var hash = 0;
var textHash = 0;
var collision = 0;
/*
//Hash1
for (var i = 0; i < len; i++) hash += shablon.charCodeAt(i);
for (var i = 0; i < len; i++) textHash += fileContent.charCodeAt(i);
if (textHash == hash)
{
	collision++;
	for (var j = 0; j<len, shablon.charAt(j)==fileContent.charAt(j);j++);
	if (j==len)
	{
		count += 1;
		counting += 1;
		WScript.echo(0);
	}
}
for (var i = 1; i <= fileContent.length-len; i++)
{
	textHash = textHash - fileContent.charCodeAt(i-1) + fileContent.charCodeAt(i+len-1);
	if (textHash == hash)
		{
			collision++;
			for (var j = 0; j<len, shablon.charAt(j)==fileContent.charAt(i+j);j++);
			if (j==len)
			{
				count += 1;
				counting += 1;
				if (counting < 11) WScript.echo(i);
			}
		}
}*/
/*
//Hash2
for (var i = 0; i < len; i++) hash += shablon.charCodeAt(i)*shablon.charCodeAt(i);
for (var i = 0; i < len; i++) textHash += fileContent.charCodeAt(i)*fileContent.charCodeAt(i);
if (textHash == hash)
{
	collision++;
	for (var j = 0; j<len, shablon.charAt(j)==fileContent.charAt(j);j++);
	if (j==len)
	{
		count += 1;
		counting += 1;
		WScript.echo(0);
	}
}
for (var i = 1; i <= fileContent.length-len; i++)
{
	textHash = textHash - fileContent.charCodeAt(i-1)*fileContent.charCodeAt(i-1) + fileContent.charCodeAt(i+len-1)*fileContent.charCodeAt(i+len-1);
	if (textHash == hash)
	{
		collision++;
		for (var j = 0; j<len, shablon.charAt(j)==fileContent.charAt(i+j);j++);
		if (j==len)
		{
			count += 1;
			counting += 1;
			if (counting < 11) WScript.echo(i);
		}
	}
}*/
/*
//Hash3
for (var i = 0; i < len; i++) hash += shablon.charCodeAt(i)*(1<<(len-i));
for (var i = 0; i < len; i++) textHash += fileContent.charCodeAt(i)*(1<<(len-i));
if (textHash == hash)
{
	collision++;
	for (var j = 0; j<len, shablon.charAt(j)==fileContent.charAt(j);j++);
	if (j==len)
	{
		count += 1;
		counting += 1;
		WScript.echo(0);
	}
}
for (var i = 1; i <= fileContent.length-len; i++)
{
	textHash = 2*(textHash - fileContent.charCodeAt(i-1)*(1<<len)) + fileContent.charCodeAt(i+len-1)*2;
	if (textHash == hash)
	{
		collision++;
		for (var j = 0; j<len, shablon.charAt(j)==fileContent.charAt(i+j);j++);
		if (j==len)
		{
			count += 1;
			counting += 1;
			if (counting < 11) WScript.echo(i);
		}
	}
}*/

	//WScript.echo(collision);
	WScript.echo(count);
	var t2 = new Date().getTime();
	WScript.echo(t2-t1);