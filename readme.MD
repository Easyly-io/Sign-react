# React.JS Contracts

React components for Contracter Network Leads

[![build status](https://img.shields.io/npm/l/contracter)](https://www.npmjs.com/package/contracter)
[![npm version](https://img.shields.io/npm/v/contracter)](https://www.npmjs.com/package/contracter)

React.js front-end package of creating, editing & signing contracts.<br/>
To interact with the API - see [contracter-js](https://github.com/network-leads/contracter-js)

### Minimal example

First, install this package
```sh
npm install contracter
```

#### Create/Edit contract template using hooks

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {ContractEditor} from "contracter";

const App = () => {

    const save = async (data) => {
        // data = {contractId:10, type:"save/update"}
    }

    return (
        <div>
            <ContractEditor publishKey={"XXXXXXXXXXXXXX"} onSave={save} />
        </div>
    );
};

ReactDOM.render(<App />, document.body);
```


#### `<ContractEditor>` Props:

```js
{
    // API publish key can be found in your account
    publishKey: string,
    
    // Optional: contract id to edit
    id: int,
    
    // Optional: id of the sub account of the contract
    // if not speecified - contract template will be saved on main account
    subAccountId: int,
    
    // Called whenever contract 'save' button is clicked
    // returns an object with the new template id and if it was an edit or a new save
    onSave: (data: Object) => void,
}
```


<br/>


#### View & Sign a sent contract using hooks

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {ContractSign} from "contracter";

const App = () => {

  const onSubmit = async (data) => {
      // Signature submitted
      // data = {status:true/false,contractKey:"contractKey"}
  }
  
  return (
    <div>
        <ContractEditor
            contractKey={"XXXXXXXXXXXXXX"}
            subAccountId={"0"}
            onSubmit={onSubmit}        
        />
    </div>
  );
};

ReactDOM.render(<App />, document.body);
```



#### `<ContractSign>` Props:

```js
{
    // contract key that was received when sent the contract
    contractKey: string,
        
    // Optional: API publish key can be found in your account
    // if provided - 'private' signatures will be allowed to be signed
    // should be used only on your end point - not the customer
    publishKey: string,
    
    // Called whenever contract 'submit' button is clicked
    // returns a status of the request and the contract key back {status:true/false,contractKey:'XXXX'}
    onSubmit: (data: Object) => void,
}
```



### Minimum requirements

The minimum supported version of React is v16.8. If you use an older version,
upgrade React to use this library. If you prefer not to upgrade your React
version, we recommend using legacy.

### Contributing

If you would like to contribute to React Stripe.js, please make sure to read our
[contributor guidelines](CONTRIBUTING.md).