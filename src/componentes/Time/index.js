import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba'

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
    return (
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: "url(img/fundo.png)", backgroundColor: hexToRgba(time.cor, '0.5') }}>
            <input type="color"
                className='input-cor'
                value={time.cor}
                onChange={e => mudarCor(e.target.value, time.id)}
            />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) =>
                    <Colaborador
                        key={indice}
                        colaborador={colaborador}
                        corDeFundo={time.cor}
                        aoDeletar={aoDeletar}
                    />)}
            </div>
        </section>
    )
}

export default Time