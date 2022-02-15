import { useState, ChangeEvent } from "react"

type Props = {
    onAdd: (title: string, body: string) => void;
}



export const PostForm = ({ onAdd }: Props) =>{

    const [addTitleText, setAddTitleText] = useState('');
    const [addBodyText, setAddBodyText] = useState('');


    const handleAddTitleOnchange = (e: ChangeEvent<HTMLInputElement>) =>{
        setAddTitleText( e.target.value );
    }

    const handleAddBodyOnchange = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        setAddBodyText( e.target.value )
    }

    const handleClickAdd = () =>{
        if(addTitleText && addBodyText) {
            onAdd(addTitleText, addBodyText)
        }else{
            alert('Preencha os campos')
        }
       
    }


    return(
        <div>
        <fieldset className="border-2 mb-3 p-3">
            <legend>Adicionar Novo Post</legend>
            <input value={addTitleText} 
            className="border block" 
            type="text"
            placeholder="Digite um titulo"
            onChange={handleAddTitleOnchange} 
            />
            <textarea className="border block"
            value={addBodyText}
            onChange={handleAddBodyOnchange}
            >
            </textarea>
            <button className="p-2 border block" onClick={handleClickAdd}>Adicionar</button>
        </fieldset>
    </div>
    );
}