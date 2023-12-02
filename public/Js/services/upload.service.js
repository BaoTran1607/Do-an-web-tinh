export async function getUploads(){
    const res = await fetch(`/uploads`);
    const json = res.json();

    return json;
}

export async function newUpload(upload){
    const res = await fetch(`/uploads`);
    
}
