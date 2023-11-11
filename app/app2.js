function  leiamais2(){
    var pontos2=document.getElementById("pontos2");
    var maistexto2=document.getElementById("mais2");
    var btnLeiaMais2=document.getElementById("btnLeiaMais2");

    if (pontos2.style.display === "none") {
        pontos2.style.display="inline";
        maistexto2.style.display="none"; 
        btnLeiaMais2.innerHTML="+";
    }
    else{
        pontos2.style.display="none";
        maistexto2.style.display="inline"; 
        btnLeiaMais2.innerHTML="-";
    }
}
