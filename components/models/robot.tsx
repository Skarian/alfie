/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type ActionName =
	| 'Dance'
	| 'Death'
	| 'Idle'
	| 'Jump'
	| 'No'
	| 'Punch'
	| 'Running'
	| 'Sitting'
	| 'Standing'
	| 'ThumbsUp'
	| 'Walking'
	| 'WalkJump'
	| 'Wave'
	| 'Yes';

interface GLTFAction extends THREE.AnimationClip {
	name: ActionName;
}

type GLTFResult = GLTF & {
	nodes: {
		FootL_1: THREE.Mesh;
		LowerLegL_1: THREE.Mesh;
		LegL: THREE.Mesh;
		LowerLegR_1: THREE.Mesh;
		LegR: THREE.Mesh;
		Head_2: THREE.Mesh;
		Head_3: THREE.Mesh;
		Head_4: THREE.Mesh;
		ArmL: THREE.Mesh;
		ShoulderL_1: THREE.Mesh;
		ArmR: THREE.Mesh;
		ShoulderR_1: THREE.Mesh;
		Torso_2: THREE.Mesh;
		Torso_3: THREE.Mesh;
		FootR_1: THREE.Mesh;
		HandR_1: THREE.SkinnedMesh;
		HandR_2: THREE.SkinnedMesh;
		HandL_1: THREE.SkinnedMesh;
		HandL_2: THREE.SkinnedMesh;
		Bone: THREE.Bone;
	};
	materials: {
		Grey: THREE.MeshStandardMaterial;
		Main: THREE.MeshStandardMaterial;
	};
	animations: GLTFAction[];
};

export function Robot(props: JSX.IntrinsicElements['group']) {
	// const group = useRef<THREE.Group>();

	const group = useRef<THREE.Group>() as React.MutableRefObject<THREE.Group>;
	const { nodes, materials, animations } = useGLTF(
		'/RobotExpressive.glb'
	) as GLTFResult;

	const { actions } = useAnimations(animations, group);
	console.log(actions);
	actions?.Running?.play();
	return (
		<group ref={group} {...props} dispose={null}>
			<group name="Root_Scene">
				<group name="RootNode">
					<group
						name="RobotArmature"
						rotation={[-Math.PI / 2, 0, 0]}
						scale={100}
					>
						<primitive object={nodes.Bone} />
					</group>
					<group
						name="HandR"
						position={[0, 2.37, -0.02]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={100}
					>
						<skinnedMesh
							name="HandR_1"
							geometry={nodes.HandR_1.geometry}
							material={materials.Main}
							skeleton={nodes.HandR_1.skeleton}
						/>
						<skinnedMesh
							name="HandR_2"
							geometry={nodes.HandR_2.geometry}
							material={materials.Grey}
							skeleton={nodes.HandR_2.skeleton}
						/>
					</group>
					<group
						name="HandL"
						position={[0, 2.37, -0.02]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={100}
					>
						<skinnedMesh
							name="HandL_1"
							geometry={nodes.HandL_1.geometry}
							material={materials.Main}
							skeleton={nodes.HandL_1.skeleton}
						/>
						<skinnedMesh
							name="HandL_2"
							geometry={nodes.HandL_2.geometry}
							material={materials.Grey}
							skeleton={nodes.HandL_2.skeleton}
						/>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload('/RobotExpressive.glb');
