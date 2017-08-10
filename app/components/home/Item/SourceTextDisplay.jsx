import React from 'react'

class SourceTextDisplay extends React.Component {
    
    constructor(props, context) {
        super(props, context);
    }
    
    render() {
        return (
            <div className="div">
                <input type="text" name="source" value={this.props.source} disabled />
                <a href="#" className="button" role="button" onClick={this.props.clearBtn} >Clear</a>
                <h2>Cipher</h2>
                <input type="text" name="cipher" value={this.props.cipher} disabled />
            </div>
        )
    }
}

export default SourceTextDisplay