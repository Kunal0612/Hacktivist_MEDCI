import React, { useEffect, useState } from 'react'
import Models from '../components/services/ModelConfig';
import * as tf from '@tensorflow/tfjs';
import { useParams } from 'react-router-dom'; 

const Predict = () => {
    const [Selected, setSelected] = useState(null);
    const [Model, setModel] = useState(null) ;
    const [Form, setForm] = useState(null) ;
    const [Msg, setMsg] = useState("") ;
    const [ShowModal, setShowModal] = useState(false);
    const { param } = useParams() ;
    
    const handleSubmit = async (e) => {
        e.preventDefault() ;
        
        const names = Form.extract() ;
        const data = names.map(name => Number(e.target[name].value)) ;

        // console.log(data)
        
        for (let x of data){
            if (x===undefined || x==null){
                alert("All field should be filled and should be decimal number")
                return;
            }
        }
        const scaled = data.map((val,i) => {
            return (val-Form.mean[i])/(Form.std[i])
        })
        console.log(scaled)
        const inputTensor = tf.tensor([scaled]);
        // Run inference
        const output = Model.predict(inputTensor);

        // Get the result
        const result = output.dataSync()[0]; // Assuming a single output node
        
        setShowModal(true) ;
        setMsg(`${Selected}, chances=${(result*100).toFixed(2)}%`)

        // Dispose of input and output tensors to free up memory
        inputTensor.dispose();
        output.dispose();
    }
    
    const loadModel = async () => {
        try {
            const tfliteModel = await tf.loadLayersModel(`/${Selected}/model.json`);
            setModel(tfliteModel);
        }
        catch(err){
            console.log(err);
            alert("Server error")
        }
    }
    
    useEffect(() => {
      if (!Selected) return;
      for (let elem of Models){
          if (elem.name == Selected){
            setForm({...elem});
            loadModel();
            break;
        }
      }
    }, [Selected])

    useEffect(() => {
      setSelected(param) ;
    }, [param])
    
    
  return (
    <div className="min-h-[70vh] flex flex-col">
        <div className="flex flex-row justify-center items-center gap-10 my-4">
            <button className={`py-2 px-3 ${Selected==='Diabetes'? 'bg-blue-600':'bg-gray-700 hover:bg-gray-600'} text-white hover:text-gray-100 rounded-lg hover:shadow-lg`} onClick={() => setSelected('Diabetes')}>Diabetes</button>
            <button className={`py-2 px-3 ${Selected==='HeartAttack'? 'bg-blue-600':'bg-gray-700 hover:bg-gray-600'} text-white hover:text-gray-100 rounded-lg hover:shadow-lg`} onClick={() => setSelected('HeartAttack')}>Heart Attack</button>
            <button className={`py-2 px-3 ${Selected==='Corona'? 'bg-blue-600':'bg-gray-700 hover:bg-gray-600'} text-white hover:text-gray-100 rounded-lg hover:shadow-lg`} onClick={() => setSelected('Cancer')}>Cancer</button>
        </div>

        <div className="flex flex-col w-full h-full justify-center gap-2 items-center">
                {Form && (<h1 className='text-lg font-bold py-2'>{Form.head}</h1>)}
                {Form?.desc && (<p>{Form.desc}</p>)}
            <form onSubmit={handleSubmit} className='flex flex-col justify-center w-[90vw] max-w-md gap-4'>
                <div className="flex flex-col gap-3 mx-2 w-full justify-center">
                    {Form && Form.inputs.map((elem,ind) => (
                        <div key={ind} className='flex flex-row text-nowrap gap-3'>
                            <label htmlFor={elem.name}>{elem.name}:</label>
                            <input name={elem.name} type="text" placeholder={elem.placeholder? elem.placeholder: ''} defaultValue={elem.default? elem.default:''} className='w-full border-2 border-black rounded-md py-1 px-2'/>
                        </div>
                    ))}
                </div>
                {Form && (
                    <button type='submit' className='py-2 px-2 mb-10 bg-blue-500 w-24 rounded-md mx-auto text-white hover:bg-green-400'>Submit</button>
                )}
            </form>
        </div>

        {ShowModal && (
            <div className='flex flex-row justify-center items-center'>
                {/* Modal Overlay */}
                <div className={'fixed inset-0 bg-black bg-opacity-50 z-50'}></div>
        
                {/* Modal Content */}
                <div className={'fixed inset-0 flex items-center justify-center z-50'}>
                    <div className="flex flex-col px-4 py-2 bg-white rounded-md">
                        <div className="flex">
                            <button className=" text-black hover:text-red-500 font-bold shadow-lg cursor-pointer ml-auto" onClick={() => setShowModal(false)}>X</button>
                        </div>

                        <h3 className="flex flex-row m-4 p-2 text-xl font-bold font-sans">
                            {Msg}
                        </h3>

                    </div>
                </div>
           </div>
        )}

    </div>
  )
}

export default Predict