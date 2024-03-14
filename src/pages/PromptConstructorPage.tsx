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

    const concatenatedText = `Role: ${formState.role}\nInstruction: ${formState.instruction}\nDetail: ${formState.detail}\nOutput Format: ${formState.outputFormat}`;
    const concatenatedTextXML = `<Role>${formState.role}</Role>\n<Instruction>${formState.instruction}</Instruction>\n<Detail>${formState.detail}</Detail>\n<OutputFormat>${formState.outputFormat}</OutputFormat>`;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        
        const { id, value } = e.target;
        setFormState((prevState) => ({ ...prevState, [id]: value }));
      };
    const copyToClipboard = () => {
        navigator.clipboard.writeText(concatenatedText)
            .then(() => {
                alert('Text copied to clipboard!');
            })
            .catch((err) => {
                console.error('Failed to copy text: ', err);
            });
    };
    const copyXMLToClipboard = () => {
        navigator.clipboard.writeText(concatenatedTextXML)
        .then(() => {
            alert('XML Text copied to clipboard!');
        })
        .catch((err) => {
            console.error('Failed to copy XML text: ', err);
        });
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
                <h3 className="w-full block mb-2 font-bold text-brown-600">Concatenated Text:</h3>
                <pre className="mt-6 p-4 bg-gray-200 border border-gray-300 rounded text-brown-700">{concatenatedText}</pre>
                <button className="block mt-4 p-2 px-4 bg-[#e5d2c3] text-[#6d5d52] rounded-md cursor-pointer transition-colors duration-300" onClick={copyToClipboard}>Copy to Clipboard</button>

                <h3 className="w-full block mb-2 font-bold text-brown-600">Concatenated Text (XML):</h3>
                <pre className="mt-6 p-4 bg-gray-200 border border-gray-300 rounded text-brown-700">{concatenatedTextXML}</pre>
                <button className="block mt-4 p-2 px-4 bg-[#e5d2c3] text-[#6d5d52] rounded-md cursor-pointer transition-colors duration-300" onClick={copyXMLToClipboard}>Copy XML to Clipboard</button>
            </div>
        </div>
    </>
    )
}

export default PromptConstructorPage
