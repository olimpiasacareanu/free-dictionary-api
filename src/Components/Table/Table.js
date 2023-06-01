export default function Table(props){
    return(
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Mot</th>
                        <th scope="col">Phonetic</th>
                        <th scope="col">Origine</th>
                        <th scope="col">Signification</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{props.mot}</th>
                        <td>{props.phonetic}</td>
                        <td>
                            <audio controls  src={props.audio}></audio>
                        </td>
                        <td>
                            {props.type}
                        </td>
                    </tr>
                   
                </tbody>
            </table>
        </>
    )
}