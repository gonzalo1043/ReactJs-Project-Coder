
export const createAdaptedVinylFromFirestore = (doc) => {
    const fields = doc.data()

    const vinylAdapted = {
        id: doc.id,
        nombre: fields.nombre,
        artista: fields.artista,
        img: fields.img,
        stock: fields.stock,
        categoria: fields.categoria,
        precio: fields.precio,
        descuento: fields.descuento,
        newReleases: fields.newReleases
    }

    return vinylAdapted
}