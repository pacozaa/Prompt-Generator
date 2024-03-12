import React, { useState } from 'react';
import { Link } from "gatsby"
import InputField from '../components/InputField';
import { styles } from '../styles/styles';

const PromptConstructorPage = () => {
    const [role, setRole] = useState('');
    const [instruction, setInstruction] = useState('');
    const [detail, setDetail] = useState('');
    const [outputFormat, setOutputFormat] = useState('');

    const concatenatedText = `Role: ${role}\nInstruction: ${instruction}\nDetail: ${detail}\nOutput Format: ${outputFormat}`;

    const handleInstructionChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setInstruction(e.target.value);
    };

    const handleDetailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setDetail(e.target.value);
    };

    const handleOutputFormatChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setOutputFormat(e.target.value);
    };
    const handleRoleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setRole(e.target.value);
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
    return (<>
        <div className="w-full flex flex-row justify-between p-5 bg-orange-100 rounded-lg shadow-md items-start">
            <div className="w-full m-5">
                <InputField
                    label="Role"
                    id="role"
                    value={role}
                    onChange={handleRoleChange}
                />
                <InputField
                    label="Instruction"
                    id="instruction"
                    value={instruction}
                    onChange={handleInstructionChange}
                />
                <InputField
                    label="Detail"
                    id="detail"
                    value={detail}
                    onChange={handleDetailChange}
                />
                <InputField
                    label="Output Format"
                    id="outputFormat"
                    value={outputFormat}
                    onChange={handleOutputFormatChange}
                />
            </div>

            <div className="w-full">
                <h3 style={styles.label}>Concatenated Text:</h3>
                <pre style={styles.output}>{concatenatedText}</pre>
                <button style={styles.button} onClick={copyToClipboard}>Copy to Clipboard</button>
            </div>
        </div>
    </>
    )
}

export default PromptConstructorPage
