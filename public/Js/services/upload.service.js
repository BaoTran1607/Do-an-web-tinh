export async function getUploads(){
    const res = await fetch(`/uploads`);
    const json = res.json();

    return json;
}
