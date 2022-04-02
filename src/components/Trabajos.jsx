import TrabajosSquare from "./TrabajosSquare";
import data from "../data/trabajos.json";

export default function Trabajos() {
    return (
        <div>
            <div className="d-flex justify-content-center"><h1 className="fs-1 fw-bold gradient-text">TRABAJOS</h1></div>
            <div class="row row-cols-1 row-cols-md-5 m-5 g-4 pt-1">
                {
                    Object.keys(data).map((e) => {
                        return <TrabajosSquare
                            key={e}
                            title={data[e].title}
                            description={data[e].description}
                            linkOferta={data[e].linkOferta}
                            image={data[e].image}
                            vacantes={data[e].vacantes}
                        />
                    })
                }
            </div>
        </div>
    );
}