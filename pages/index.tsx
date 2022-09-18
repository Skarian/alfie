import CanvasExample from '@components/canvas/example';
import type { CustomPage } from '@components/utils/types/page';
import DomExample from '@components/dom/example';
import { Robot } from '@components/models/robot';
import { Environment } from '@react-three/drei';

const Home: CustomPage = () => {
	// return <DomExample />;
	return null;
};

Home.r3f = () => (
	<>
		{/* <CanvasExample href="/cube" shape="torus" /> */}
		<Robot />
		<Environment
			background={true} // can be true, false or "only" (which only sets the background)
			preset={'apartment'}
		/>
	</>
);

export default Home;
