import Vinyl from '../Vinyl/Vinyl'
import classes from './VinylList.module.css'

const VinylList = ({vinyl}) => {
    return(
        <div className={classes.list}>{
            vinyl.map(vinilo => {
                return(
                    <Vinyl key={vinilo.id} {...vinilo}  />
                )
            })
            }
        </div>
    )
}

export default VinylList