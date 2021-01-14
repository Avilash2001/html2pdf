window.onload = function(){
    document.getElementById("download")
    .addEventListener("click",() =>{
        const content = this.document.getElementById("content");
        html2pdf().from(content).save();
    });
}