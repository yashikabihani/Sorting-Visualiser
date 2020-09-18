import React from 'react'
import './SortingVisualiser.css'

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
        for(let i =0; i < 100 ; i++){
            array.push(randomIntFromInterval(5, 1000));
        }
        this.setState({array});
    }
}
