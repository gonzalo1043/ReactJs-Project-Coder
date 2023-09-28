
export const createAdaptedVinylFromFirestore = (doc) => {
    const fields = doc.data()

    const vinylAdapted = {
        id: doc.id,
        nombre: fields.nombre,
        img: fields.img,
        stock: fields.stock,
        categoria: fields.categoria,
        precio: fields.precio
    }

    return vinylAdapted
}