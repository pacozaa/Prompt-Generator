import React, { useState } from 'react';
import { Link } from "gatsby"
import InputField from '../components/InputField';

interface FormState {
    role: string;
    instruction: string;
    detail: string;
    outputFormat: string;
}

const PromptConstructorPage = () => {
    const [formState, setFormState] = useState<FormState>({
        role: '',
        instruction: '',
        detail: '',
        outputFormat: '',
    });
    const [copyState, setCopyState] = useState<boolean>(false)
    const [copyXMLState, setCopyXMLState] = useState<boolean>(false)
    const concatenatedText = `Role: ${formState.role}\nInstruction: ${formState.instruction}\nDetail: ${formState.detail}\nOutput Format: ${formState.outputFormat}`;
    const concatenatedTextXML = `<Role>${formState.role}</Role>\n<Instruction>${formState.instruction}</Instruction>\n<Detail>${formState.detail}</Detail>\n<OutputFormat>${formState.outputFormat}</OutputFormat>`;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const { id, value } = e.target;
        setFormState((prevState) => ({ ...prevState, [id]: value }));
        setCopyState(false)
        setCopyXMLState(false)
    };
    const copyToClipboard = () => {
        try {
            navigator.clipboard.writeText(concatenatedText)
            setCopyState(true)
        }
        catch (error) {
            console.log(error)
        }
    };
    const copyXMLToClipboard = () => {
        try {
            navigator.clipboard.writeText(concatenatedTextXML)
            setCopyXMLState(true)
        }
        catch (error) {
            console.log(error)
        }


    }
    return (<>
        <div className="overflow-auto w-full h-screen flex flex-col justify-between p-5 bg-orange-100 rounded-lg shadow-md items-start md:flex-row">
            <div className="w-full mb-5 md:w-1/2 md:m-5">
                <InputField
                    label="Role"
                    id="role"
                    value={formState.role}
                    onChange={handleChange}
                />
                <InputField
                    label="Instruction"
                    id="instruction"
                    value={formState.instruction}
                    onChange={handleChange}
                />
                <InputField
                    label="Detail"
                    id="detail"
                    value={formState.detail}
                    onChange={handleChange}
                />
                <InputField
                    label="Output Format"
                    id="outputFormat"
                    value={formState.outputFormat}
                    onChange={handleChange}
                />
            </div>

            <div className="w-full h-full md:w-1/2 text-wrap">
                <h3 className="w-full block font-bold text-yellow-700">Concatenated Text:</h3>
                <pre className="mt-1 p-4 bg-gray-200 border border-gray-300 rounded text-brown-700 text-wrap">{concatenatedText}</pre>
                <div className="flex flex-row">
                    <button className="block mt-4 p-2 px-4 bg-[#e5d2c3] text-[#6d5d52] rounded-md cursor-pointer transition-colors duration-300" onClick={copyToClipboard}>Copy to Clipboard</button>
                    {copyState ? <label className="block ml-4 mt-4 p-2 px-4 text-yellow-700">Copied to Clipboard</label> : <></>}
                </div>


                <h3 className="w-full block mt-10 font-bold text-yellow-700">Concatenated Text (XML):</h3>
                <pre className="mt-1 p-4 bg-gray-200 border border-gray-300 rounded text-brown-700 text-wrap">{concatenatedTextXML}</pre>
                <div className="flex flex-row mb-8">
                    <button className="block mt-4 p-2 px-4 bg-[#e5d2c3] text-[#6d5d52] rounded-md cursor-pointer transition-colors duration-300" onClick={copyXMLToClipboard}>Copy XML to Clipboard</button>
                    {copyXMLState ? <label className="block ml-4 mt-4 p-2 px-4 text-yellow-700">Copied XML to Clipboard</label> : <></>}
                </div>
            </div>
        </div>
    </>
    )
}

export default PromptConstructorPage
