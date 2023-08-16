function hitungLuas() {
    var alas = document.getElementById("input_alas").value
    var tinggi = document.getElementById("input_tinggi").value

    var luas = 1/2 * alas * tinggi

    document.getElementById("input_luas").value = luas
    
}

function tampilkanRumus(typeRumus) {
    if (typeRumus == "luas"){
        document.querySelector("div#keliling_segitiga").style.display="none"      
        document.querySelector("div#luas_segitiga").style.display="block"
    } 
    else if (typeRumus == "keliling"){        
        document.querySelector("div#luas_segitiga").style.display="none"
        document.querySelector("div#keliling_segitiga").style.display="block"
    } 
}

function hitungKeliling(){
    var panjangSisiA = parseInt(document.getElementById("input_sisi_a").value)
    var panjangSisiB = parseInt(document.getElementById("input_sisi_b").value)
    var panjangSisiC = parseInt(document.getElementById("input_sisi_c").value)
    var keliling = panjangSisiA + panjangSisiB + panjangSisiC
   
    document.getElementById("input_keliling").value = keliling
}

function myFunction() {
     var input_all = document.querySelectorAll(".input_segitiga")
     input_all.forEach(element => {
        console.log(element)
        element.value ="" 
     });
     console.log(input_all)}
