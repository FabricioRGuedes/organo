import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba'

const Time = (props) => {
    return (
        props.colaboradores.length > 0 && <section className='time' style={{backgroundImage: "url(img/fundo.png)", backgroundColor: hexToRgba(props.corPrimaria, '0.5')}}>
            <input type="color"
                className='input-cor'
                value={props.corPrimaria}
                onChange={e => props.mudarCor(e.target.value, props.nome)}
            />
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador =>
                    <Colaborador
                        corDeFundo={props.corPrimaria}
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        aoDeletar={props.aoDeletar}

                    />)}
            </div>
        </section>
    )
}

export default Time