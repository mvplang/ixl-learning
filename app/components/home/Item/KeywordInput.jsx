import React from 'react'

class KeywordInput extends React.Component {
    
    constructor(props, context) {
        super(props, context);
        this.state = {
            text: '',
            errMsg: ''
        }
    }

    render() {
        return (
        	<div className="div">
	        	<h1>Configuration</h1>
	        	<h2>Keyword</h2>
	        	<input
	                className="input" 
	                type="text" 
                    onChange={this.ChangeHandle.bind(this)}
	                onKeyUp={this.KeyUpHandle.bind(this)}
	                value={this.state.text}
				/>
				<a href="#" className="button" role="button" onClick={this.clickHandle.bind(this)}>Update</a>
                <p className='err'>
                    {this.state.errMsg}
                </p>
            </div>
        )
    }

    componentDidMount() {
        // default value
        this.setState({
            text: this.props.value || ''
        })
    }
    
    ChangeHandle(e) {
        // watch changes
        this.setState({
            text: e.target.value,
            errMsg: ''
        })
    }
    
    KeyUpHandle(e) {
        // watch input enter
        if (e.keyCode !== 13) {
            return;
        }
        
        if(this.test(e.target.value)){
            this.props.enterHandle(e.target.value)
        }
    }

    clickHandle(){
		
        if(this.test(this.state.text)){
            this.props.enterHandle(this.state.text);
        }
    }

    test(val){

        if (!/^[A-Z]+$/.test(val)){
            this.setState({
                errMsg: 'please input uppercase',
                text: ''
            })

            return false;
        }

        if(val.length < 3 || val > 8){
            this.setState({
                errMsg: 'input keywords length should between three and eight characters',
                text: ''
            })

            return false;
        }

        return true;
    }
}

export default KeywordInput