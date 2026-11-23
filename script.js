function tampilkanData(data){

let html = "";

data.forEach(item=>{

html += `
<tr>
<td>${item.nama}</td>
<td>${item.perusahaan}</td>
<td>${item.kpp}</td>
<td>${item.expired}</td>
</tr>
`;

});

document.getElementById("tbl").innerHTML =
html;

}

function isiPerusahaan(){

const perusahaan =
[
...new Set(
employeeData.map(
item=>item.perusahaan
)
)
];

const select =
document.getElementById(
"filterPerusahaan"
);

perusahaan.forEach(p=>{

let option =
document.createElement("option");

option.value = p;
option.textContent = p;

select.appendChild(option);

});

}

document
.getElementById("search")
.addEventListener("keyup",filterData);

document
.getElementById("filterPerusahaan")
.addEventListener("change",filterData);

function filterData(){

let keyword =
document.getElementById("search")
.value.toLowerCase();

let perusahaan =
document.getElementById("filterPerusahaan")
.value;

let hasil =
employeeData.filter(item=>{

const cocokNama =
item.nama
.toLowerCase()
.includes(keyword);

const cocokPerusahaan =
perusahaan === "" ||
item.perusahaan === perusahaan;

return cocokNama &&
cocokPerusahaan;

});

tampilkanData(hasil);

}

document.getElementById(
"totalPersonel"
).innerText =
employeeData.length;

document.getElementById(
"totalPerusahaan"
).innerText =
new Set(
employeeData.map(
item=>item.perusahaan
)
).size;

isiPerusahaan();

tampilkanData(employeeData);