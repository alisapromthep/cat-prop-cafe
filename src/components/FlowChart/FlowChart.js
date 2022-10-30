import React, { useMemo } from 'react';import './FlowChart.scss';
import ReactFlow, {Background, Controls} from 'reactflow';
import 'reactflow/dist/style.css';
import ButtonNode from './ButtonNode';

const FlowChart = ({displayCode}) => {

    const nodeTypes = useMemo(()=>({button: ButtonNode}),[])


    const nodes = [
        {
            id: '0',
            data: { label: 'Lobby', level:'parent', displayCode:displayCode },
            position: { x: 50, y: -140 },
            type: 'button',
            },
            {
            id: '1',
            data: { label: 'Room 1',level:'child', displayCode:displayCode },
            position: { x: -50, y: -20 },
            type: 'button'
            },
            {
            id: '2',
            data: { label: 'Room 2',level:'child', displayCode:displayCode },
            position: { x:  200, y: -20 },
            type: 'button'
            },
            {
            id: '3',
            data: { label: 'bedroom 1',level:'grandchild', displayCode:displayCode },
            position: { x: -110, y: 80 },
            type: 'button'
            },
            {
            id: '4',
            data: { label: 'bedroom 2',level:'grandchild', displayCode:displayCode },
            position: { x: 10, y: 80 },
            type: 'button'
            },
            {
            id: '5',
            data: { label: 'bathroom',level:'great-grandchild', displayCode:displayCode },
            position: { x: 10, y: 150 },
            type: 'button'
            },
            {
            id: '6',
            data: { label: 'dining table',level:'grandchild', displayCode:displayCode },
            position: { x: 200, y: 40 },
            type: 'button'
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
            <ReactFlow nodes={nodes} edges={connection}
            nodeTypes={nodeTypes}
            panOnDrag={false}
            panOnScrollMode={'vertical'}
            zoomOnScroll={false}
            >
                <Background/>
                <Controls/>
            </ReactFlow>
        </div>
    )
}

export default FlowChart;