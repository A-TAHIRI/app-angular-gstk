$(document).ready(function () {

    let idBien = 0

    let fileUpload = $("#fileUploadModules"); // mon input type file
    fileUpload.simpleUpload({
        url : "http://localhost:8082/file/upload/"+idBien
    }).on("upload:done", function (e,file, i , data) { // cette méthode sera appeler lorsque le telechargement sera terminer
        if(data.erreur == true){
            alert(data.message)
            return
        }
        $("#pathImage").val(data.pathFile)
        $("#image").attr("src","/file/image/"+data.pathFile)
    })

    let fileUploadPhotoProfil = $("#fileUploadPhotoProfil"); // mon input type file
    fileUploadPhotoProfil.simpleUpload({
        url : "http://localhost:8082/file/upload"
    }).on("upload:done", function (e,file, i , data) { // cette méthode sera appeler lorsque le telechargement sera terminer
        if(data.erreur == true){
            alert(data.message)
            return
        }
        $("#photoProfil").val(data.pathFile)
        $("#imapathImageProfilge").attr("src","/file/image/"+data.pathFile)
    })

    $("#formBien").submit(function(){
        let dataForm = $("#formBien").serializeArray() // récupère mon formulaire pour le mettre dans une list name value
        console.log(dataForm)
        // clé => valeur
        let datas = {}
        $.each(dataForm, function(i, field){
            datas[field.name] = field.value
        })
        console.log(datas)

        $.post("http://localhost:8082/ws/bien/add", datas , function(response){ // response => répense du server
            console.log(response)
            idbien = response.id
        })


        return false; // pour ne pas actualiser la page

    })

})
