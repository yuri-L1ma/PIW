import TelaPrincipal from "./TelaPrincipal"
import { Provider } from 'react-redux';
import { store } from "./store/store";


const MeuIndex = () => {
    return (
        <>
            <Provider store={store}>
                <TelaPrincipal />
            </Provider>
        </>
    )
}

export default MeuIndex