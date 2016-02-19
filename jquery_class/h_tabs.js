/**
 * Created by hjb2722404 on 2016/2/18.
 */
$.h_tab = function(tabId){
    var oLinks = document.getElementById(tabId).getElementsByTagName("a");
    var oCons = document.getElementById(tabId).getElementsByTagName("section");
    for(var i = 0; i<oLinks.length; i++){
        oLinks[i].index = i;
        oLinks[i].onclick = function () {
            for(var j =0; j<oLinks.length; j++){
                oLinks[j].className="";
                oCons[j].style.display = "none";
            }
            this.className="cur";
            oCons[this.index].style.display ="block";
        }

    }
};