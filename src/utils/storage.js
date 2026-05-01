let data = null

export function clearStorage(){

}
export function getStorage(){

}
export function createStorage(llave, valor){
    localStorage.setItem(llave, JSON.stringify(valor))
}