import {useEffect, useState, useRef} from "react"
import Titre from "../../Components/Titre/Titre"
import Table from "../../Components/Table/Table"
import axios from "axios" 
import Bouton from "../../Components/Bouton/Bouton"



function Formations(){
    const [dictionary, setDictionary] = useState(null)
    // Le mot recherché dans input
    const inputRef = useRef('')
    //Le mot clé de l'url qui est variable 
    const [updated, setUpdated] = useState('sun')
    

    const handleClick = ()=> {
        // Remplacer le mot par defaut avec le mot courrant
        setUpdated(inputRef.current.value)
    }

    const handleKeyPress = (e) => {
        // La touche enter pour submit
        if(e.key === "Enter"){
            // Arreter de charger la page
            e.preventDefault();
            // Appeler la fonction click pour remplacer le mot
            handleClick()
        }
    }

    useEffect(()=>{
        // L'url de l'API
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${updated}`)
            .then(reponse=>{
                // Les données du dictionnaire
                setDictionary(reponse.data)
            })
            .catch(error=>{
                console.log(error)
            })
    }, [updated])

    if(!dictionary) return null

    return(
        <>
            <Titre>Free Dictionary API</Titre>
            <form className=" d-flex justify-content-center py-5 form-search">
                <div className="form-group d-flex align-items-start ">
                    <label htmlFor="word"></label>
                    <input 
                        type="text" 
                        className="form-control rounded-0" 
                        id="word" 
                        name="word" 
                        ref={inputRef} 
                        placeholder="Try it here ... "
                        onKeyDown={handleKeyPress}
                    />
                    
                </div>
                <Bouton clic={handleClick}>Submit</Bouton>
            </form>            
            <Table 
                mot={dictionary[0].word}
                phonetic={dictionary[0].phonetic}
                audio={dictionary[0].phonetics[0].audio}
                type={dictionary[0].meanings.map((type, index)=>{
                    return(
                        <ul key={index}>
                            <li >
                                <b>{type.partOfSpeech} : </b>
                                <ul >
                                    {type.definitions.map((definition, index)=>{
                                        return(        
                                                <li key={index}>{definition.definition}</li>
                                            )
                                    })}
                                </ul>
                            </li>
                        </ul>
                    )
                })}
            />
        
        </>
    )
}

export default Formations