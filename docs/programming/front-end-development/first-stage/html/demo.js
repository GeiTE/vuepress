// 给#tools内部添加导出按钮
var tools =  document.getElementById("tools");
tools.innerHTML += "<button id='export' class='btn btn-primary'>导出</button>";

// 监听export按钮，点击后获取现在#row里面的tbody里面的每条数据
var exportBtn = document.getElementById("export");
exportBtn.onclick = function(){
    var tbody = document.getElementById("row").getElementsByTagName("tbody")[0];
    console.log(tbody);
    // var trs = tbody.getElementsByTagName("tr");
    // var trsArr = [];
    // for(var i = 0; i < trs.length; i++){
    //     var tr = trs[i];
    //     var tds = tr.getElementsByTagName("td");
    //     var tdsArr = [];
    //     for(var j = 0; j < tds.length; j++){
    //         var td = tds[j];
    //         var tdText = td.innerText;
    //         tdsArr.push(tdText);
    //     }
    //     trsArr.push(tdsArr);
    // }
    // var exportData = {
    //     "data":trsArr
    // };
    // var exportJson = JSON.stringify(exportData);
    // var exportBlob = new Blob([exportJson],{type:"text/plain;charset=utf-8"});
    // var exportUrl = URL.createObjectURL(exportBlob);
    // var exportLink = document.createElement("a");
    // exportLink.href = exportUrl;
    // exportLink.download = "export.json";
    // exportLink.click();
}