function  leiamais1(){
    var pontos1=document.getElementById("pontos1");
    var maistexto1=document.getElementById("mais1");
    var btnLeiaMais1=document.getElementById("btnLeiaMais1");

    if (pontos1.style.display === "none") {
        pontos1.style.display="inline";
        maistexto1.style.display="none"; 
        btnLeiaMais1.innerHTML="+";
    }
    else{
        pontos1.style.display="none";
        maistexto1.style.display="inline"; 
        btnLeiaMais1.innerHTML="-";
    }
}