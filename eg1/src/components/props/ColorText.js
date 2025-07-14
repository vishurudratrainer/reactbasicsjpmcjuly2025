

export default function ColorText(props){
    if(props.color===""){
        return <div></div>
    }
    else
    {
        return (<div style={{backgroundColor:props.color}}>I am in color</div>)
    }
}
