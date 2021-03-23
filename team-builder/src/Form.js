import React from 'react';

function Form(props) {
    const { values, update, submit } = props;

    const onChange = (evt) => {
    const { name, value } = evt.target;

    update(name, value);
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };


return (
    <form className="form container" onSubmit={onSubmit}>
        <div className ='form-group inputs'>
        <label>
        Name
            <input
            type="text"
            name="name"
            onChange={onChange}
            value={values.name}
            placeholder="type a username"
            />
        </label>

        <label>
        Email
            <input
            name="email"
            value={values.email}
            type="email"
            onChange={onChange}
            placeholdeer="type an email"
            />
        </label>

        <label>
        Role
            <select name="role" value={values.role} onChange={onChange}>
            <option value=''>---Select Your Role---</option>
            <option value='Backend Engineer'>Backend Engineer</option>
            <option value='Frontend Engineer'>Frontend Engineer</option>
            <option value='Designer'>Designer</option>
            </select>
        </label>
        <div className='submit'>
        <button>Submit</button>            
        </div>
    </div>
</form>
);
}
export default Form;