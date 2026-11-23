function tampilkanData(data){

let html = "";

data.forEach(item => {

html += `
<tr>
<td>${item.nama}</td>
<td>${item.perusahaan}</td>
<td>${item.kpp}</td>
<td>${item.expired}</td>
</tr>
`;

});

document.getElementById("tbl").innerHTML = html;

}

tampilkanData(employeeData);

document
.getElementById("search")
.addEventListener("keyup", function(){

let keyword =
this.value.toLowerCase();

let hasil =
employeeData.filter(item =>

item.nama.toLowerCase()
.includes(keyword)

);

tampilkanData(hasil);

});