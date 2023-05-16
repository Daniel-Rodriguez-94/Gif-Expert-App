
import { GifItem } from "./GifItem"
import { useFetchGifs } from "../Hooks/useFetchGifs"

export const GifGird = ({category}) => {

    const {images, isLoaging} = useFetchGifs(category)


    return (
        <>
            <h3>{category}</h3>
            {
                isLoaging && (<h2>Cargando...</h2>) 
            }
            <div className="card-grid">
                {
                    images.map( (image)  => (
                        <GifItem 
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>


        </> 
    )
    }
