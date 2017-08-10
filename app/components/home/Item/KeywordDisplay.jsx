import React from 'react'

class KeywordDisplay extends React.Component {
    
    constructor(props, context) {
        super(props, context);
    }
    
    render() {

        const keys = this.props.value.split('');

        return (
        	<div className="div">
                {
                keys.length?
                    <table>
                        {keys.map((item, index) => {
                            return( 
                                <tr key={index} style={{"background": index == this.props.index%keys.length ? "#8CFBF7": "#fff"}}>
                                    <td>{item}</td>
                                    <td>{item.toLowerCase().charCodeAt() - 97}</td>
                                </tr>
                            )
                        })}
                    </table>
                    :null
                }
            </div>
        )
    }
}

export default KeywordDisplay