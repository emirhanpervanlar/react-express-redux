// REACT İLK TESTLER
import React from 'react'
import Proptypes from 'prop-types';

export class Test extends React.Component(){

    constructor(props){
        super(props)
        this.state = { // state'i set etme yöntemlerinden 1
            hasan : 123,
            label : "cengiz",
            count : 0
        }
        this.inc = this.inc.bind(this); //  bindli kullanımı kısaltmak için
        this.dec = this.dec.bind(this);
    }

    setState(){
        this.setState({ // state'i set etme yöntemlerinden 2
           hasan : 123,
           label : "cengiz"
        }); // setState 2. parametresi callback tir yani işlem tamamlanınca çalışır
    }

    btnClick(){ // buton kullanarak state'i değiştirdik
        this.setState({
            hasan : 555
        })
    }
    inc=(e)=>{ // bind'i kısaltınca bu şekilde kullanmalıyız. React'ın özel stili
        this.setState({
            count : this.state.count +1
        })
    }

    dec=(e)=>{ // bind'i kısaltınca bu şekilde kullanmalıyız. React'ın özel stili
        this.setState({
            count : this.state.count -1
        })
    }
    render(){

        return <div>
            deneme {this.props.Name} - {this.props.Deger} /* props kullanımı */
            {this.state.hasan} /* state değişikliğini koda yansıttık*/


            Count : {this.state.count} /* COUNTU BİR ARTIRIP AZALTMA*/
            <button onClick={this.inc} type="button" />Inc
            <button onClick={this.dec} type="button"/>Dec


            <button onClick={this.btnClick.bind(this)} type="button">Click Me</button> /* state */
            </div>
    }
}

// Proplara validation atama
Test.propTypes = {
    Name : Proptypes.string.isRequired,
    Deger : Proptypes.number.isRequired
}

// Proplara default değere atama
Test.propDefaults ={
    Name : "ahmet",
    Deger : "12"
}