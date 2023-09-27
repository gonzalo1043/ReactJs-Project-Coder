
const vinyl = [
    {   img: 'https://littlebutterflyrecords.com/cdn/shop/products/buenos8_1000x.jpg?v=1620929914',
        id: "1",
        nombre: '#8',
        artista: 'Buenos Muchachos',
        precio: 40,
        descuento: 'SI',
        categoria: 'Rock',
        stock: 5
        },
        
        {
        img:'https://http2.mlstatic.com/D_NQ_NP_833902-MLU69642139617_052023-O.webp',
        id: "2",
        nombre: 'Final Cut',
        artista: 'Pink Floyd',
        precio: 35,
        descuento: 'SI',
        categoria: 'Rock',
        stock: 5
        },
        
        {
        img:'https://upload.wikimedia.org/wikipedia/en/0/01/ZiggyStardust.jpg',
        id:"3",
        nombre: 'The rise and fall of Ziggy Stardust and the Spiders from Mars',
        artista: 'David Bowie',
        precio: 42,
        descuento: 'SI',
        categoria: 'Rock',
        stock: 5
        },

        {
        img:'https://http2.mlstatic.com/D_NQ_NP_947213-MLU69167097571_042023-O.webp',
        id: "4",
        nombre: 'Parte de la Religion',
        artista: 'Charly Garcia',
        precio: 32,
        descuento: 'SI',
        categoria: 'Rock',
        stock: 5
        },

        {
        img:'https://media1.jpc.de/image/w1155/front/0/0600753480922.jpg',
        id:"5",
        nombre: 'Nightclubbing',
        artista: 'Grace Jones',
        precio: 50,
        descuento: 'NO',
        categoria: 'Rock',
        categoria: 'Pop',
        stock: 5
        },

        {
        img:'https://img.discogs.com/K2uBkCzMBsF3-39HcKj5rnlHv3g=/fit-in/500x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3115846-1386813419-7051.jpeg.jpg?w=640',
        id:"6",
        nombre: 'Superficie de Placer',
        artista: 'Virus',
        precio: 35,
        descuento: 'NO',
        categoria: 'Rock',
        stock: 5
        },

        {
        img:'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/09/29131153/Shakira-Donde-estan-los-ladrones.jpg',
        id:"7",
        nombre: 'Donde estan los ladrones',
        artista: 'Shakira',
        precio: 30,
        descuento: 'NO',
        categoria: 'Rock',
        categoria: 'Pop',
        stock: 5
        },

        {
        img:'https://www.lahiguera.net/musicalia/artistas/babasonicos/disco/9426/babasonicos_discutible-portada.jpg',
        id:"8",
        nombre: 'Discutible',
        artista: 'Babasonicos',
        precio: 32,
        descuento: 'NO',
        categoria: 'Rock',
        stock: 5
        },
    
    { img:"https://www.lahiguera.net/musicalia/artistas/jessie_ware/disco/12753/jessie_ware_that_feels_good-portada.jpg", id: '9', nombre: "That! Feels Good!", artista: "Jessie Ware", precio: 38, descuento: "NO", categoria: 'Pop', newReleases:'newReleases', stock: 5},
    
    { img: "https://www.lahiguera.net/musicalia/artistas/kali_uchis/disco/12729/portada-m.jpg", id: '10', nombre: "Red Moon in Venus", artista: "Kali Uchis", precio: 32, descuento: "NO", categoria: 'Pop', newReleases:'newReleases', stock: 5},
    
    { img: "https://cdn.smehost.net/sonymusices-45pressprod/wp-content/uploads/2020/09/Calambre-Nathy-Peluso-portada.png", id:' 11', nombre: "Calambre", artista: "Nathy Peluso", precio: 40, descuento: "NO", categoria: 'Pop', stock: 5},
    
    { img: "https://www.lahiguera.net/musicalia/artistas/marina_diamandis/disco/11191/marina_diamandis_ancient_dreams_in_a_modern_land-portada.jpg", id: '12', nombre: "Ancient Dreams in a Modern Land", artista: "Marina", precio: 35, descuento: "NO", categoria: 'Pop', stock: 5}
]


export const getVinyl = () => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(vinyl)
        }, 2000)
    })
}

export const getVinylById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(vinyl.find(vin => vin.id === id))
        }, 1000)
    })
}

export const getVinylByCategory = (categoryId) => {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve(vinyl.filter(vinilo => vinilo.categoria === categoryId))
        }, 1000)
    })
}

export const getVinylByNewReleases = (newReleasesId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(vinyl.filter(vinilo => vinilo.newReleases === newReleasesId))
        },1000)
    })
}