import { useDiscount } from '../../Hooks/DiscountHook'
import { Link, useNavigate } from 'react-router-dom'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Vinyl = ({nombre, artista, id, precio, img, descuento, newReleases}) => {

    const navigate = useNavigate()

    const {discountPorcentage} = useDiscount()

        const discountPrice = Math.round(precio * discountPorcentage)


    return(
            <Row xs={1} md={2} className="g-4" >
            <Col key={id} >
            <Card className='vinylCard' onClick={() => navigate(`/vinylDetail/${id}`)}>
                <Card.Img className='imgCard' variant="top" src={img} />
                
                <Card.Body>
                <Card.Text>
                {newReleases == 'SI'&& <p className='newReleasesTextCard'> Nuevo Lanzamiento</p>}
                </Card.Text>
                <Card.Title className = 'titleCard'>
                    <p className='nameCard'>{nombre}</p>
                    <p className='artistCard'>{artista}</p>
                </Card.Title>
                
                <Card.Text>
                { descuento == 'SI' ? <p className='beforePriceCard'>Antes U$S {precio}</p> : <p className='priceCard'>
                    USD$ {precio}</p>}
                <p className='discountTextCard'>{descuento == 'SI' && ' Ahora U$S ' + discountPrice}</p>
                
                </Card.Text>
                <Card.Text>
                    <Link className='buttonDetailCard' to = {`/vinylDetail/${id}`} >Ver detalle</Link>
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </Row>

    )
}

export default Vinyl 
