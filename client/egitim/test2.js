import React from 'react';
import Test from './test';


export class Test2 extends React.Component(){
    render(){
        return(
            <div>
                <Test Name="Ahmet" /> /* component çekme ve prop a değer atama*/
            </div>
        )
    }
}


