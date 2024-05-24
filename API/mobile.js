document.getElementById("upload").addEventListener("submit", async function(event){
    event.preventDefault();
    const thang = document.getElementById("Files");
    const file =thang.files[0];

    if(!file){
        alert("PLEASE SELECT A FILE MF");
    }


    const formdat = new FormData();
    formdat.append("file", file);

    try{
        const response= await fetch("http://127.0.0.1:5000/detect", {
            method: 'POST',
            body: formdat
        });

        const result =await response.json();
        console.log(result);
    }
    catch(error){
        alert("ERROR UPLOADING FILE");
    }
});