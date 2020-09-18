import React from 'react'
import './SortingVisualiser.css'
import * as sortingAlgorithms from '../sortingAlgorithms/sortingAlgorithms'

export default  class SortingVisualiser extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];
        for(let i =0; i < 300 ; i++){
            array.push(randomIntFromInterval(5, 600));
        }
        this.setState({array});
    }

    mergeSort(){
        const javaScriptSortedArray = this.state.array
        .slice()
        .sort((a,b) => a-b);
        const sortedArray = sortingAlgorithms.mergeSort(this.state.array);
        console.log(sortedArray)
        console.log(arraysAreEqual(javaScriptSortedArray, sortedArray))
    }

    quickSort(){}

    heapSort(){}

    bubbleSort(){}


    render(){
        const {array} = this.state;

        return (
            <div className="array-container">
            {array.map((value, idx) => (
                <div 
                className="array-bar" 
                key={idx}
                    style={{height: `${value}px`}}>
                </div>
            ))}
            <button onClick={() => this.resetArray()}>Generate New Array</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            <button onClick={() => this.quickSort()}>Quick Sort</button>
            <button onClick={() => this.heapSort()}>Heap Sort</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            </div>
        );
    }
}
function randomIntFromInterval(min,max)
{
    return Math.floor( Math.random()*  ( max - min + 1 ) + min );
}

function arraysAreEqual(arrayOne, arrayTwo){
    if(arrayOne.length !== arrayTwo.length) return false;
    for(let i = 0 ; i < arrayOne.length; i++){
        if(arrayOne[i] !== arrayTwo[i]) return false;
    }
    return true;
}