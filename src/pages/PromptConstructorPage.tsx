import React, { useState } from 'react';
import { Link } from "gatsby"
import InputField from '../components/InputField';
import { styles } from '../styles/styles';

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
        <div className="overflow-auto w-full flex flex-col justify-between p-5 bg-orange-100 rounded-lg shadow-md items-start md:flex-row">
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

            <div className="w-full md:w-1/2 text-wrap">
                <h3 className="w-full"style={styles.label}>Concatenated Text:</h3>
                <pre className="w-full text-wrap"  style={styles.output}>{concatenatedText}</pre>
                <button style={styles.button} onClick={copyToClipboard}>Copy to Clipboard</button>

                <h3 style={styles.label}>Concatenated Text (XML):</h3>
                <pre className="w-full text-wrap" style={styles.output}>{concatenatedTextXML}</pre>
                <button style={styles.button} onClick={copyXMLToClipboard}>Copy XML to Clipboard</button>
            </div>
        </div>
    </>
    )
}

export default PromptConstructorPage
