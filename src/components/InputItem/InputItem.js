import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<div>
	<TextField
        id="outlined-helperText"
        label="Helper text"
        defaultValue="Default Value"
        helperText="Some important text"
        variant="outlined"
    />
</div>);

export default InputItem;