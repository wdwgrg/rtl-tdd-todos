import React, { useCallback, useState } from "react";
const TodosFrom = () => {
    const [value, setValue] = useState('');
    const onChange = useCallback(e => {
        setValue(e.target.value);
    },[]);
    return (
        <form>
            <input placeholder="할 일을 입력해 주세요~" value={value} onChange={onChange}/>
            <button type = "submit">등록</button>
        </form>
    );
}
export default TodosFrom