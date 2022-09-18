import { Context } from "./context/Context"

import ComponentA from "./components/ComponentA"
import ComponentB from "./components/ComponentB"



const App = () => {
    return (
        <div>
            <Context.Provider>
                <h1>This is a boilerplate for Context + Reducers</h1>
                <ComponentA />
                <ComponentB />
            </Context.Provider>
        </div>
    )
}

export default App