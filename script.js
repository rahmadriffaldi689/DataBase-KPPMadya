let employeeData = [];

fetch("data.json")
.then(response => response.json())
.then(data => {

employeeData = data;

document.getElementById(
"totalPersonel"
).innerHTML =
employeeData.length;

document.getElementById(
"totalPerusahaan"
).innerHTML =
new Set(
employeeData.map(
item => item.perusahaan
)
).size;

isiFilterPerusahaan();

tampilkanData(
employeeData
);

});
let employeeData = [];

fetch("data.json")
.then(response => response.json())
.then(data => {

    employeeData = data;

    document.getElementById(
    "totalPersonel"
    ).innerHTML =
    employeeData.length;

    document.getElementById(
    "totalPerusahaan"
    ).innerHTML =
    new Set(
    employeeData.map(
    item => item.perusahaan
    )
    ).size;

    isiFilterPerusahaan();

    tampilkanData(
    employeeData
    );

});
function statusWarna(tahun){

const sekarang =
new Date().getFullYear();

tahun = Number(tahun);

if(tahun <= sekarang){

return "expired";

}

if(tahun <= sekarang + 1){

return "warning";

}

return "aktif";

}

function tampilkanData(data){

document.getElementById(
"totalTampil"
).innerHTML = data.length;

let html = "";

data.forEach(item=>{

html += `
<tr>

<td>${item.nama}</td>

<td>${item.perusahaan}</td>

<td>${item.kpp}</td>

<td class="${statusWarna(item.expired)}">
${item.expired}
</td>

</tr>
`;

});

document.getElementById(
"tbl"
).innerHTML = html;

}

function isiFilterPerusahaan(){

const daftar =
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

daftar.forEach(item=>{

let option =
document.createElement("option");

option.value =
item;

option.textContent =
item;

select.appendChild(
option
);

});

}

function filterData(){

const keyword =
document
.getElementById("search")
.value
.toLowerCase();

const perusahaan =
document
.getElementById(
"filterPerusahaan"
)
.value;

const hasil =
employeeData.filter(item=>{

const cocokNama =
item.nama
.toLowerCase()
.includes(keyword);

const cocokPerusahaan =

perusahaan === "" ||

item.perusahaan ===
perusahaan;

return cocokNama &&
cocokPerusahaan;

});

tampilkanData(hasil);

}

document
.getElementById("search")
.addEventListener(
"keyup",
filterData
);

document
.getElementById(
"filterPerusahaan"
)
.addEventListener(
"change",
filterData
);

document
.getElementById(
"totalPersonel"
)
.innerHTML =
employeeData.length;

document
.getElementById(
"totalPerusahaan"
)
.innerHTML =
new Set(
employeeData.map(
item=>item.perusahaan
)
).size;

isiFilterPerusahaan();

tampilkanData(
employeeData
);