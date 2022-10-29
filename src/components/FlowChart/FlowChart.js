import React from 'react';import './FlowChart.scss';
import ReactFlow, {Background, Controls} from 'reactflow';
import 'reactflow/dist/style.css';


const FlowChart = () => {

    const nodes = [
        {
            id: '0',
            data: { label: 'Lobby' },
            position: { x: 50, y: -120 },
            type: 'input',
            },
            {
            id: '1',
            data: { label: 'Room 1' },
            position: { x: 200, y: -20 },
            },
            {
            id: '2',
            data: { label: 'Room 2' },
            position: { x: -100, y: -20 },
            },
            {
            id: '3',
            data: { label: 'bedroom 1' },
            position: { x: 100, y: 80 },
            },
            {
            id: '4',
            data: { label: 'bedroom 2' },
            position: { x: 300, y: 80 },
            },
            {
            id: '5',
            data: { label: 'bathroom' },
            position: { x: 300, y: 150 },
            },
            {
            id: '6',
            data: { label: 'dining table' },
            position: { x: -100, y: 40 },
            },
        ];

    const connection = [
        { id: '0-1', source:'0', target:'1', type:'step'},
        { id: '0-2', source:'0', target:'2', type:'step'},
        { id: '2-6', source:'2', target:'6', type:'step'},
        { id: '1-3', source:'1', target:'3', type:'step'},
        { id: '1-4', source:'1', target:'4', type:'step'},
        { id: '4-5', source:'4', target:'5', type:'step'}
    ]

    return (
        <div className='flowchart'>
            <ReactFlow nodes={nodes} edges={connection}>
                <Background/>
                <Controls/>
            </ReactFlow>
        </div>
    )
}

export default FlowChart;