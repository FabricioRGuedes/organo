import './Campo.css'

const Campo = ({type = 'text', label, placeholder, valor, aoAlterado, required = false }) => {

    const aoDigitar = (e) => {
        aoAlterado(e.target.value)
    }

    return(
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input type={type} value={valor} onChange={aoDigitar} required={required} placeholder={placeholder}/>
        </div>
    )
}

export default Campo