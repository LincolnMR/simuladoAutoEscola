function abrirAjax(){
	var lin;
	if(window.XMLHttpRequest){
		lin = new XMLHttpRequest();
	}else{
		lin = ActiveXObject("Microsoft.XMLHTTP");
		
    }
    return lin;
}

function carregar(url){
	
	var ajax = abrirAjax();
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			
			document.getElementById("conteudo").innerHTML = ajax.responseText ;
        }
    }
	ajax.open('GET',url,'true');
	ajax.send(null);
}