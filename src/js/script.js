$(document).ready(function () {


    let fileUpload = $("#fileUploadModules"); // mon input type file
    fileUpload.simpleUpload({
        url : "http://localhost:8082/file/upload/"
    }).on("upload:done", function (e,file, i , data) { // cette méthode sera appeler lorsque le telechargement sera terminer
        if(data.erreur == true){
            alert(data.message)
            return
        }
        $("#pathImage").val(data.pathFile)
        $("#image").attr("src","/file/image/"+data.pathFile)
    })



    $("#formArticle").submit(function(){
        let dataForm = $("#formArticle").serializeArray() // récupère mon formulaire pour le mettre dans une list name value
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

}

)

