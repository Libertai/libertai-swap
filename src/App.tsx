import { WormholeInterface } from "./components/WormholeInterface.tsx";
import { LtaiNavbar } from "./components/LtaiNavbar.tsx";
import { LtaiSocials } from "./components/LtaiSocials.tsx";

function App() {
	return (
		<>
			<LtaiNavbar />
			<WormholeInterface />
			<LtaiSocials />
		</>
	);
}

export default App;
