function Titre(props){

    return(
        <>
            <div>
                <h1 className="bg-secondary text-light py-3 text-center">{props.children}</h1>
            </div>
        </>
    )
}

export default Titre