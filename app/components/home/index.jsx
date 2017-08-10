import React from 'react'

import KeywodInput from './Item/KeywordInput'
import KeywodDisplay from './Item/KeywordDisplay'
import SourceTextInput from './Item/SourceTextInput'
import SourceTextDisplay from './Item/SourceTextDisplay'

import './style.less'

class Home extends React.Component {
    
    constructor(props, context) {
        super(props, context);
        this.state = {
            key: '',
            index: 0,
            source: '',
            cipher: ''
        }
    }

    render() {
        return (
        	<div>
	        	<KeywodInput value={this.state.key} enterHandle={this.enterHandle.bind(this)} />
				<KeywodDisplay value={this.state.key} index={this.state.index} />
				<SourceTextInput value={this.state.key} index={this.state.index} indexUpdate={this.indexUpdate.bind(this)} sourceUpdate={this.sourceUpdate.bind(this)} cipherUpdate={this.cipherUpdate.bind(this)} />
				<SourceTextDisplay source={this.state.source} cipher={this.state.cipher} clearBtn={this.clearBtn.bind(this)} />
            </div>
        )
    }

    enterHandle(val) {
        this.setState({
            key: val,
            index: 0,
            source: '',
            cipher: ''
        })
    }

    indexUpdate(){
    	if(this.state.key.length){
	    	let i = this.state.index;
	    	this.setState({
	    		index: ++i
	    	})
    	}
    }

    sourceUpdate(i){
        let cur = this.state.source;
        let now = String.fromCharCode(65 + i);
        this.setState({
            source: cur+now
        })
    }

    cipherUpdate(i){
        let cur = this.state.cipher;
        let index = this.state.index;
        let key = this.state.key;

        let now = String.fromCharCode(65 + (i + key[index%key.length].charCodeAt() - 65)%26)
        this.setState({
            cipher: cur+now
        })
    }

    clearBtn(){
        this.setState({
            index: 0,
            source: '',
            cipher: '',
        })
    }
}

export default Home