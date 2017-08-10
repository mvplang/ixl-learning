import React from 'react'

class SourceTextInput extends React.Component {
    
    constructor(props, context) {
        super(props, context);
    }

    render() {

        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
        let key = this.props.value || 'a';
        let index = this.props.index;

        return (
            <div className="div">
                <h1>Encoding</h1>
                <h2>Source Text</h2>
                <table>
                    {alphabet.map((item, i) => {
                        return( 
                            <tr key={i}>
                                <td><a className="outline" onClick={() => this.clickHandle(i)}>{item}</a></td>
                                <td>{String.fromCharCode(65 + (i + key[index%key.length].charCodeAt() - 65)%26)}</td>
                            </tr>)
                    })}
                </table>
            </div>
        )
    }

    clickHandle(index){
        if(this.props.value.length > 0){
            this.props.sourceUpdate(index);
            this.props.cipherUpdate(index);
            this.props.indexUpdate();
        }
    }
}

export default SourceTextInput