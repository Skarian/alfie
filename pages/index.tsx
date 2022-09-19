import type { CustomPage } from '@components/utils/types/page';
import { Robot } from '@components/models/robot';
import { Environment } from '@react-three/drei';
import { Physics } from '@react-three/rapier';

const Home: CustomPage = () => {
	// return <DomExample />;
	return null;
};

Home.r3f = () => (
	<>
		<Environment
			background={true} // can be true, false or "only" (which only sets the background)
			preset={'apartment'}
		/>
		<Physics>
			<Robot />
		</Physics>
	</>
);

export default Home;
