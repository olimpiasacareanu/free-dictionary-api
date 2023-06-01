export default function Bouton(props){
    return(
        <>
            <button type="button" className="btn btn-light rounded-0 mx-1" onClick={props.clic}>{props.children}</button>
        </>
    )
}

